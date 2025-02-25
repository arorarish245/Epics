import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const chatBodyRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    try {
      const response = await axios.post("http://localhost:3000/chatbot", {
        message: input,
      });
      setMessages((prev) => [...prev, { sender: "bot", text: response.data.response }]);
    } catch (error) {
      console.error("Error sending message", error);
    }
    setInput("");
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!chatOpen ? (
        <motion.button 
          className="bg-gradient-to-r from-blue-500 to-teal-600 text-white p-4 rounded-full shadow-lg animate-bounce hover:scale-110 transition relative"
          onClick={() => setChatOpen(true)}
          whileHover={{ scale: 1.1 }}
        >
          💬 Chat
        </motion.button>
      ) : (
        <motion.div 
          className="bg-blue-900 text-white w-[400px] h-[500px] shadow-2xl rounded-2xl overflow-hidden flex flex-col animate-fade-in border border-blue-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-700 p-4 flex justify-between items-center border-b border-teal-400">
            <h3 className="text-lg font-bold">Chat with Us!</h3>
            <button className="text-white text-xl" onClick={() => setChatOpen(false)}>✖</button>
          </div>
          <div className="p-4 h-[380px] overflow-y-auto space-y-2 bg-blue-800/50" ref={chatBodyRef}>
            {messages.length === 0 ? (
              <div className="text-center text-teal-300">
                <p>Start a conversation!</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <motion.div 
                  key={index} 
                  className={`p-3 max-w-[80%] rounded-lg ${msg.sender === "user" ? "bg-teal-500 text-white self-end ml-auto" : "bg-blue-700 text-gray-200 self-start mr-auto"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg.text}
                </motion.div>
              ))
            )}
          </div>
          <div className="p-4 flex items-center border-t border-teal-400">
            <input
              type="text"
              className="flex-1 p-3 bg-blue-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <motion.button
              className="ml-3 p-3 bg-teal-600 text-white rounded-lg hover:scale-105 transition"
              onClick={sendMessage}
              whileTap={{ scale: 0.9 }}
            >
              ➤
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
