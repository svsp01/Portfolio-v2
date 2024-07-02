import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoMdSend } from 'react-icons/io';

const questions = [
  "Hello! What's your name?",
  "Nice to meet you! What's your email?",
  "Got it! What's your message?",
  "Thank you! We'll get back to you soon."
];

const ChatContact: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < questions.length) {
      const timeout = setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, questions[step]]);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [step]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setMessages([...messages, input]);
      setInput('');
      setLoading(false);
      setStep(step + 1);
    }, 1000);
  };
  const getCurrentTime = (): string => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  return (
    <div className="w-full max-w-md bg-whatsapp-pattern md:max-w-2xl lg:max-w-4xl py-20 mx-auto dark:bg-primaryColor bg-secondaryColor rounded-lg shadow-lg p-6">
      <div className="h-64 overflow-y-auto px-4 md:px-10   hide-scrollbar flex flex-col space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className={`py-2 px-4 rounded-lg ${
              index % 2 === 0 ? 'dark:bg-primaryColor bg-secondaryColor border dark:border-secondaryColor dark:text-secondaryColor text-primaryColor self-start' : 'dark:bg-primaryColor bg-secondaryColor border dark:border-secondaryColor dark:text-secondaryColor text-primaryColor self-end'
            }`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className='text-xs font-bold'>
                {` ${index % 2 === 0 ? 'Sakthi' : "you"}`}
            </div>
            <div className='pe-14'>
            {message}
            </div>
            <div className='flex justify-end text-xs text-gray-500'>
            {getCurrentTime()}
            </div>
          </motion.div>
        ))}
        {loading && (
          <div className="py-2 px-4 rounded-lg dark:text-secondaryColor text-primaryColor self-start">
            Typing...
          </div>
        )}
      </div>
      {step < questions.length && (
        <form className="sm:flex items-center mx-4 md:mx-10 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 sm:rounded-l-lg rounded-lg border dark:bg-primaryColor bg-secondaryColor dark:text-secondaryColor text-primaryColor sm:rounded-none  border-gray-300 focus:outline-none"
            placeholder="Type your response..."
            disabled={loading}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-0 md:px-10 py-3 bg-primaryColor dark:bg-secondaryColor dark:text-primaryColor text-secondaryColor sm:rounded-r-lg  w-[200px] sm:rounded-none rounded-lg"
            type="submit"
            disabled={loading}
          >
            <div className="flex justify-center items-center gap-2">
              Send
              <IoMdSend />
            </div>
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default ChatContact;
