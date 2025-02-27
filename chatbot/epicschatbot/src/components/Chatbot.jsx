import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await axios.post("http://localhost:3000/chatbot", {
        message: input,
      });
      const botMessage = { sender: "bot", text: response.data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message", error);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const readOutLoud = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!chatOpen ? (
        <motion.button 
          className="bg-gradient-to-r from-blue-200 to-blue-400 text-white p-4 rounded-full shadow-lg animate-bounce hover:scale-110 transition relative"
          onClick={() => setChatOpen(true)}
          whileHover={{ scale: 1.1 }}
        >
          💬 Chat
        </motion.button>
      ) : (
        <motion.div 
          className="bg-white text-gray-800 w-[400px] h-[500px] shadow-2xl rounded-2xl overflow-hidden flex flex-col animate-fade-in border border-blue-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-4 flex justify-between items-center border-b border-blue-300">
            <h3 className="text-lg font-bold text-gray-800">Chat with Us!</h3>
            <button className="text-gray-800 text-xl" onClick={() => setChatOpen(false)}>✖</button>
          </div>
          <div className="p-4 h-[340px] overflow-y-auto space-y-2 bg-blue-50" ref={chatBodyRef}>
            {messages.length === 0 ? (
              <div className="text-center text-blue-500">
                <p>Start a conversation!</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <motion.div 
                  key={index} 
                  className={`p-3 max-w-[80%] rounded-lg ${msg.sender === "user" ? "bg-blue-300 text-gray-800 self-end ml-auto" : "bg-blue-100 text-gray-800 self-start mr-auto"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg.text}
                </motion.div>
              ))
            )}
            {isTyping && (
              <motion.div
                className="p-3 max-w-[80%] rounded-lg bg-blue-100 text-gray-800 self-start mr-auto italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                Typing...
              </motion.div>
            )}
          </div>
          <div className="p-4 flex items-center border-t border-blue-300">
            <input
              type="text"
              className="flex-1 p-3 bg-blue-100 text-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <motion.button
              className="ml-3 p-3 bg-blue-300 text-gray-800 rounded-lg hover:scale-105 transition"
              onClick={sendMessage}
              whileTap={{ scale: 0.9 }}
            >
              ➤
            </motion.button>
          </div>
          <div className="p-4 flex justify-center border-t border-blue-300">
            {messages.length > 0 && messages[messages.length - 1].sender === "bot" && (
              <motion.button
                className="p-3 bg-blue-400 text-white rounded-lg hover:scale-105 transition"
                onClick={() => readOutLoud(messages[messages.length - 1].text)}
                whileTap={{ scale: 0.9 }}
              >
                🔊 Read Out
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
