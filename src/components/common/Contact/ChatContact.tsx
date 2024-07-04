'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoMdSend, IoMdRefresh } from 'react-icons/io';

interface Question {
  _id: string;
  text: string;
}

const ChatContact: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    fetchQuestions();
  }, []);
  const resetConversation = () => {
    setMessages([]);
    setInput('');
    setStep(0);
    setContactData({ name: '', email: '', message: '' });
    fetchQuestions()
  };

  useEffect(() => {
    if (questions.length > 0 && step < questions.length) {
      const timeout = setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, questions[step]]);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [step, questions]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/questions');
      const data = await response.json();
      if (data.success) {
        setQuestions(data.data);
        
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const sendContactData = async (data: { name: string; email: string; message: string }) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error);
      }
      return result.data;
    } catch (error) {
      console.error('Error sending contact data:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const newMessages = [...messages, input];
      setMessages(newMessages);
      setInput('');

      if (step === 0) {
        setContactData(prev => ({ ...prev, name: input }));
      } else if (step === 1) {
        setContactData(prev => ({ ...prev, email: input }));
      } else if (step === 2) {
        setContactData(prev => ({ ...prev, message: input }));
    
        await sendContactData({ ...contactData, message: input });
      }else if(step === 3){
      }
      if(step <=3){
        setStep(step + 1);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentTime = (): string => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="w-full relative max-w-md bg-whatsapp-pattern md:max-w-2xl lg:max-w-4xl py-20 mx-auto dark:bg-primaryColor bg-secondaryColor rounded-lg shadow-lg p-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-4 right-4 p-2 rounded-full dark:bg-secondaryColor bg-primaryColor dark:text-primaryColor text-secondaryColor"
        onClick={resetConversation}
      >
        <IoMdRefresh size={24} />
      </motion.button>
      <div className="h-64 overflow-y-auto px-4 md:px-10 hide-scrollbar flex flex-col space-y-4">
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
              {`${index % 2 === 0 ? 'Sakthi' : "you"}`}
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
      {questions.length > 0 && step < questions.length && (
        <form className="sm:flex items-center mx-4 md:mx-10 mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 sm:rounded-l-lg rounded-lg border dark:bg-primaryColor bg-secondaryColor dark:text-secondaryColor text-primaryColor sm:rounded-none border-gray-300 focus:outline-none"
            placeholder="Type your response..."
            disabled={loading || step >= 3}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-0 md:px-10 py-3 bg-primaryColor dark:bg-secondaryColor dark:text-primaryColor text-secondaryColor sm:rounded-r-lg w-[200px] sm:rounded-none rounded-lg"
            type="submit"
            disabled={loading || step > 3}
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