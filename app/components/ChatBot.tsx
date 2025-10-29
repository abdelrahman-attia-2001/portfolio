"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend } from "react-icons/fi";
import { LuBot } from "react-icons/lu";
import { MdOutlineRecycling } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";

// --- 🧩 تعريفات TypeScript المصححة والمحسّنة ---

// 1. الواجهة التي تصف شكل كائن SpeechRecognition بعد إنشائه
interface SpeechRecognitionInstance extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onstart: () => void;
  onend: () => void;
  onerror: (event: Event) => void;
  onresult: (event: CustomSpeechRecognitionEvent) => void;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

// 2. الواجهة التي تصف الدالة البانية (Constructor) للكائن
interface SpeechRecognitionConstructor {
  // 💡 هذا يحل خطأ "no-misused-new"
  new (): SpeechRecognitionInstance; 
}

// 3. تعريف واجهة SpeechRecognitionEvent (كما كانت)
interface CustomSpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

// 4. تعريف الواجهة العامة لـ Window باستخدام الدالة البانية
declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionConstructor;
    webkitSpeechRecognition: SpeechRecognitionConstructor;
  }
}

// --- نهاية التعريفات ---

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  // ✅ استخدام SpeechRecognitionConstructor كنوع للدالة البانية
  const SpeechRecognition: SpeechRecognitionConstructor | null =
    typeof window !== "undefined"
      ? window.SpeechRecognition || window.webkitSpeechRecognition
      : null;

  const suggestions = [
    "فوائد إعادة التدوير",
    "كيفية إعادة تدوير البلاستيك",
    "طرق الاستفادة من النفايات المنزلية",
    "أنواع المواد القابلة لإعادة التدوير",
  ];

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    // إيقاف أي صوت في الخلفية
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    const userMessage = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // منطق استدعاء API (تم اختصاره)
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (data.reply) {
        const lines = data.reply
          .split(/\r?\n/)
          .map((l: string) => l.trim())
          .filter((l: string) => l.length > 0);

        const assistantMessages = lines.length
          ? lines.map((line: string) => ({
                role: "assistant",
                content: line,
              }))
          : [{ role: "assistant", content: "No reply content." }];

        setMessages((prev) => [...prev, ...assistantMessages]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Error connecting to the bot 🤖" },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "حدث خطأ أثناء إرسال الرسالة ❌" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const startListening = () => {
    if (!SpeechRecognition) {
      alert("متصفحك لا يدعم التعرف على الصوت.");
      return;
    }

    // ✅ استخدام SpeechRecognitionInstance كنوع للكائن
    const recog: SpeechRecognitionInstance = new SpeechRecognition();
    recog.lang = "ar-EG";
    recog.continuous = false;
    recog.interimResults = false;

    recog.onstart = () => setListening(true);
    recog.onend = () => setListening(false);
    recog.onerror = () => setListening(false);

    recog.onresult = (event: CustomSpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      sendMessage(transcript);
    };

    recog.start();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* الزر العائم */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition z-50"
      >
        {isOpen ? <FiX size={22} /> : <LuBot size={30} />}
      </button>

      {/* نافذة الشات */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border z-50"
          >
            {/* الهيدر */}
            <div className="bg-green-600 text-white p-3 text-center font-semibold flex items-center justify-center gap-2 text-lg">
              Recycling Chatbot <MdOutlineRecycling size={22} />
            </div>

            {/* الرسائل */}
            <div className="flex-1 p-3 overflow-y-auto space-y-3 text-base chat-area">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-gray-500 text-center text-base">
                    ابدأ بالسؤال أو اختر موضوعًا:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {suggestions.map((hint, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(hint)}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200 transition"
                      >
                        {hint}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="text-green-600 mt-1">
                      <LuBot size={22} />
                    </div>
                  )}

                  <div
                    className={`p-2 rounded-lg text-base max-w-[75%] ${
                      msg.role === "user"
                        ? "bg-green-600 text-white text-right"
                        : "bg-gray-200 text-gray-800 text-left"
                    }`}
                  >
                    {msg.content}
                  </div>

                  {msg.role === "user" && (
                    <div className="text-gray-500 mt-1">
                      <FaUserCircle size={22} />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="text-gray-400 text-center flex items-center justify-center gap-2 text-base">
                  <LuBot size={24} />
                  <span>يفكر...</span>
                </div>
              )}

              {listening && (
                <div className="flex justify-center items-center gap-1 mt-2">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scaleY: [1, 2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 h-4 bg-green-500 rounded-full"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* الإدخال */}
            <form onSubmit={handleSubmit} className="flex border-t items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب أو تحدث..."
                className="flex-1 p-3 outline-none text-base text-black"
                disabled={loading || listening}
              />

              {/* 🎤 زر الصوت */}
              <button
                type="button"
                onClick={startListening}
                className={`p-3 ${
                  listening ? "text-red-600 animate-pulse" : "text-green-600"
                }`}
                title={listening ? "جارٍ التسجيل..." : "تحدث"}
                disabled={loading}
              >
                <IoMdMic size={22} />
              </button>

              {/* زر الإرسال */}
              <button
                type="submit"
                className={`bg-green-600 text-white px-4 py-3 flex items-center justify-center transition ${
                    (!input.trim() || loading || listening) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
                }`}
                disabled={!input.trim() || loading || listening}
              >
                <FiSend size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}