import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-yellow py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="mt-3 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "How did Zintlr get my data?",
      answer:
        "Zintlr collects data based on your interactions and permissions given on our website.",
    },
    {
      question: "What is Zintlr?",
      answer:
        "Zintlr is a platform that helps businesses grow through data-driven marketing solutions.",
    },
    {
      question: "How can Zintlr help my business grow?",
      answer:
        "Zintlr provides insights and tools to optimize your marketing efforts, driving growth.",
    },
    {
      question: "Is Zintlr free to start with?",
      answer: "Yes, Zintlr offers a free plan to get you started.",
    },
    {
      question: "How much does Zintlr subscription cost?",
      answer:
        "Subscription costs depend on the plan. Pricing details can be found on our pricing page.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
