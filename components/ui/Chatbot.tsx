"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { Send } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Chatbot() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setLoading(true)

    try {
      const res = await axios.post("/api/messages", {
        user_input: input,
      })

      const aiMessage = { role: "assistant", content: res.data.ai_response }
      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error(error)
    }

    setInput("")
    setLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto h-[600px] flex flex-col shadow-lg bg-[#f8f9fa]">
      <CardHeader className="border-b border-[#e6ebf4]">
        <CardTitle className="text-center text-[#5a8bc9]">EternalPeaseBot</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow p-0">
        <ScrollArea className="h-[480px] p-4">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-[#2d2e32] opacity-50">
              Start a conversation with EternalPeaseBot
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-2 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <Avatar className="h-15 w-15">
                        <AvatarImage src={msg.role === "user" ? "/user.svg" : "/bot.svg"} />
                        <AvatarFallback className={`bg-${msg.role === "user" ? "[#5a8bc9]" : "[#2d2e32]"} text-white text-xs`}>
                            {msg.role === "user" ? "You" : "bot"}
                        </AvatarFallback>
                    </Avatar>

                    <div
                      className={`p-3 rounded-lg ${
                        msg.role === "user"
                          ? "bg-[#5a8bc9] text-white rounded-tr-none"
                          : "bg-[#e6ebf4] text-[#2d2e32] rounded-tl-none"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[80%]">
                    <Avatar className="h-8 w-8 bg-[#2d2e32]">
                      <span className="text-xs text-white">EP</span>
                    </Avatar>
                    <div className="p-3 rounded-lg bg-[#e6ebf4] rounded-tl-none">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 bg-[#5a8bc9] rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-[#5a8bc9] rounded-full animate-bounce delay-75"></div>
                        <div className="h-2 w-2 bg-[#5a8bc9] rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </ScrollArea>
      </CardContent>

      <CardFooter className="p-3 border-t border-[#e6ebf4]">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex w-full gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            disabled={loading}
            className="flex-grow bg-white text-[#2d2e32] border-[#e6ebf4] placeholder:text-[#2d2e32] placeholder:opacity-50"
          />
          <Button
            type="submit"
            size="icon"
            disabled={loading || !input.trim()}
            className="bg-[#5a8bc9] hover:bg-[#4a77b3]"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
