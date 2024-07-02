"use client";
import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const ContactForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [queryType, setQueryType] = useState<string>(""); // 'hiring', 'collaboration', 'consulting', 'others'
  const [githubLink, setGithubLink] = useState<string>("");
  const [profileLink, setProfileLink] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [letterContent, setLetterContent] = useState({
    top: '',
    bottom: ''
  });
  const [senderName, setSenderName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);



  const [floatingIcons, setFloatingIcons] = useState([
    { icon: <FaEnvelope />, link: "mailto:your-email@example.com", x: 0, y: 0 },
    { icon: <FaWhatsapp />, link: "https://wa.me/yourphonenumber", x: 0, y: 0 },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/yourprofile",
      x: 0,
      y: 0,
    },
    { icon: <FaGithub />, link: "https://github.com/yourusername", x: 0, y: 0 },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/yourusername",
      x: 0,
      y: 0,
    },
  ]);
  const nextStep = () => {
    if (queryType === "hiring" || queryType === "consulting") {
      setCurrentStep((prevStep) => prevStep + 2);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (queryType === "hiring" || queryType === "consulting") {
      setCurrentStep((prevStep) => prevStep - 2);
    } else {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleQueryTypeChange = (type: string) => {
    setQueryType(type);
  };

  const validateStep = () => {
    let isValid = true;
    const errors: { [key: string]: string } = {};

    if (currentStep === 1 && !queryType) {
      errors.queryType = "Please select a query type.";
      isValid = false;
    }

    if (currentStep === 2 && queryType === "collaboration") {
      if (!githubLink.trim() || !profileLink.trim() || !message.trim()) {
        errors.allFields = "Please fill out all required fields.";
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const validateForm = () => {
    let isValid = true;
    if (!senderName.trim()) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }
    return isValid;
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!validateStep()) {
      return;
    }
    if (validateForm()) {


    if (currentStep === 3) {
      if (queryType === "hiring") {
        const hiringTemplate = `
          Dear Sakthi,

          I am interested in discussing a hiring opportunity at your company. Please find my resume attached for your review.

          Best regards,
${senderName}
        `;

        sendEmail(hiringTemplate, "Your Hiring Inquiry");
      } else if (queryType === "collaboration") {
        const collaborationTemplate = `
          Hi,

          I am interested in collaborating with you. Here are my GitHub and profile links:

          GitHub: ${githubLink}
          Profile: ${profileLink}

          ${message}

          Looking forward to connecting further!

          Best regards,
          ${senderName}

        `;

        sendEmail(collaborationTemplate, "Your Collaboration Inquiry");
      } else if (queryType === "consulting") {
        const consultingTemplate = `
          Dear Sakthi,

          I would like to discuss consulting services with you. Please find my requirements below:

          ${message}

          Best regards,
          ${senderName}

        `;

        sendEmail(consultingTemplate, "Your Consulting Inquiry");
      }
    }
}
  };

  useEffect(() => {
    if (queryType === 'hiring') {
      setLetterContent({
        top: "Dear Sakthi,\n\nI am writing to express my interest in a position at your company.",
        bottom: "\n\nThank you for your time and consideration.\n\nBest regards,"
      });
    } else if (queryType === 'collaboration') {
      setLetterContent({
        top: "Hi Sakthi,\n\nI hope this message finds you well. I'm reaching out because I'm interested in collaborating with you.",
        bottom: "\n\nI look forward to the possibility of working together.\n\nBest wishes,"
      });
    } else if (queryType === 'consulting') {
      setLetterContent({
        top: "Dear Sakthi,\n\nI am contacting you regarding your consulting services.",
        bottom: "\n\nI appreciate your time and expertise.\n\nSincerely,"
      });
    }
  }, [queryType]);


  const sendEmail = (template: string, subject: string) => {
    const recipientEmail = 'sakthisvsp01@gmail.com'; 
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(template);
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    
    window.location.href = mailtoLink;
  };


  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingIcons((icons) =>
        icons.map((icon) => ({
          ...icon,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const isNextDisabled = () => {
    if (currentStep === 1) return !queryType;
    if (currentStep === 2 && queryType === "collaboration") {
      return !githubLink.trim() || !profileLink.trim();
    }
    return false;
  };

  return (
    <div className="relative h-screen dark:bg-primaryColor bg-secondaryColor overflow-hidden">
      {floatingIcons.map((icon, index) => (
        <motion.a
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute text-3xl dark:text-secondaryColor text-primaryColor"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{ x: icon.x, y: icon.y }}
          transition={{ duration: 5, ease: "linear" }}
        >
          {icon.icon}
        </motion.a>
      ))}
      <div className="flex justify-center items-center h-screen">
        <motion.div
          className="  w-full max-w-2xl p-6 bg-secondaryColor dark:bg-primaryColor border-2 border-primaryColor dark:border-secondaryColor rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center dark:text-secondaryColor text-primaryColor">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {currentStep === 1 && (
              <motion.div
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <label className="block text-lg text-center font-medium dark:text-secondaryColor text-primaryColor">
                  Select your query type:
                </label>
                <div className="flex justify-center space-x-4 mt-2">
                  {["hiring", "collaboration", "consulting"].map((type) => (
                    <motion.button
                      key={type}
                      type="button"
                      className={`px-4 py-2 dark:text-secondaryColor text-primaryColor rounded-lg border-2 focus:outline-none focus:ring focus:ring-primaryColor
                      ${
                        queryType === type
                          ? "bg-primaryColor dark:bg-secondaryColor text-secondaryColor dark:text-black"
                          : "dark:border-secondaryColor border-primaryColor  text-primaryColor"
                      }`}
                      onClick={() => handleQueryTypeChange(type)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </motion.button>
                  ))}
                </div>
                {formErrors.queryType && (
                  <p className="text-sm text-red-500 mt-1 text-center">
                    {formErrors.queryType}
                  </p>
                )}
              </motion.div>
            )}

            {currentStep === 2 && queryType === "collaboration" && (
              <motion.div
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div className="space-y-4">
                  {["githubLink", "profileLink"].map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className="block text-lg font-medium text-primaryColor"
                      >
                        {field === "githubLink"
                          ? "GitHub Link:"
                          : "Profile Link:"}
                      </label>
                      <input
                        type="text"
                        id={field}
                        value={
                          field === "githubLink" ? githubLink : profileLink
                        }
                        onChange={(e) =>
                          field === "githubLink"
                            ? setGithubLink(e.target.value)
                            : setProfileLink(e.target.value)
                        }
                        placeholder={`Enter your ${
                          field === "githubLink" ? "GitHub" : "profile"
                        } link`}
                        className="mt-1 block w-full border-2 border-secondaryColor rounded-md shadow-sm focus:border-primaryColor focus:ring focus:ring-primaryColor focus:ring-opacity-50 px-3 py-2"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
           {currentStep === 3 && (
            <motion.div 
              initial={{ y: 50 }} 
              animate={{ y: 0 }} 
              transition={{ type: 'spring', stiffness: 120 }}
              className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 shadow-inner"
            >
              <div className="mb-2 text-gray-600 whitespace-pre-line">{letterContent.top}</div>
              <div className="relative">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={2}
                  placeholder="Enter your message here..."
                  className="w-full p-2 bg-transparent border-b border-dashed border-gray-400 focus:outline-none focus:border-primaryColor resize-none"
                  style={{lineHeight: '2.5em', background: 'repeating-linear-gradient(transparent, transparent 2.4em, #ccc 2.4em, #ccc 2.5em)'}}
                />
                <div className="absolute inset-0 pointer-events-none" style={{zIndex: -1}}>
                  {Array(6).fill(0).map((_, i) => (
                    <div key={i} className="h-10 border-b border-gray-200"></div>
                  ))}
                </div>
              </div>
              <div className="mt-2 text-gray-600 whitespace-pre-line">{letterContent.bottom}</div>
              <div className="mt-2 relative">
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your Name"
                  className={`w-full p-2 bg-transparent border-b ${
                    nameError ? 'border-red-500' : 'border-gray-400'
                  } focus:outline-none focus:border-primaryColor`}
                />
                {nameError && (
                  <p className="text-red-500 text-sm mt-1">Please enter your name</p>
                )}
              </div>
            </motion.div>
          )}

            {formErrors.allFields && (
              <p className="text-sm text-red-500 mt-1 text-center">
                {formErrors.allFields}
              </p>
            )}

            <div className="flex justify-between">
              {currentStep > 1 && (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 rounded-lg border-2 border-primaryColor dark:border-secondaryColor text-primaryColor dark:text-secondaryColor focus:outline-none focus:ring focus:ring-primaryColor"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Previous
                </motion.button>
              )}

              <motion.button
                type={currentStep < 3 ? "button" : "submit"}
                onClick={currentStep < 3 ? nextStep : undefined}
                className={`px-4 py-2 rounded-lg border-2 border-primaryColor dark:border-secondaryColor text-primaryColor dark:text-secondaryColor focus:outline-none focus:ring focus:ring-primaryColor
                ${isNextDisabled() ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isNextDisabled()}
                whileHover={isNextDisabled() ? {} : { scale: 1.05 }}
                whileTap={isNextDisabled() ? {} : { scale: 0.95 }}
              >
                {currentStep < 3 ? "Next" : "Submit"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
