"use client";

import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true); // <-- Start loading

    try {
        const res = await axios.post("/api/messages", {
            user_input: input,
        });

        const aiMessage = { role: "assistant", content: res.data.ai_response };
        setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
        console.error(error);
        }

        setInput("");
        setLoading(false); // <-- Stop loading
    };

    return (
        <div className="max-w-lg mx-auto p-4">
        <div className="space-y-2 mb-4">
            {messages.map((msg, index) => (
            <div
                key={index}
                className={`p-2 rounded ${
                msg.role === "user" ? "bg-gray-200 text-black" : "bg-purple-200 text-black"
                }`}
            >
                <strong>{msg.role === "user" ? "You" : "EternalPeaseBot"}:</strong> {msg.content}
            </div>
            ))}

            {loading && (
            <div className="p-2 rounded bg-purple-100 text-black animate-pulse">
                <strong>EternalPeaseBot:</strong> typing...
            </div>
            )}
        </div>

        <div className="flex gap-2">
            <input
            className="flex-1 border rounded p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask EternalPeaseBot..."
            disabled={loading} // <-- Prevent typing while loading (optional)
            />
            <button
            onClick={handleSend}
            className="bg-purple-500 hover:bg-purple-600 text-white rounded px-4 disabled:opacity-50"
            disabled={loading} // <-- Disable button while loading
            >
            {loading ? "..." : "Send"}
            </button>
        </div>
        </div>
    );
}
