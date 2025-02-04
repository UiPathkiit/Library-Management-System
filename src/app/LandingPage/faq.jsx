// "use client"; 

// import React, { useState } from "react";
// import Image from "next/image";
// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(1); 

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//       answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       question: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?",
//       answer:
//         "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
//       answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
//     },
//     {
//       question:
//         "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
//       answer:
//         "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
//     },
//     {
//       question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
//       answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];

//   return (
//     <div className="faq-wrapper">
//       {/* Background Image */}
//       <div className="faq-background-image">
//          <Image 
//                     width={1300}
//                     height={1300}
//                      alt='Library'
//                      src='/assets/book.png'
//                     ></Image>
//       </div>
//      <div className="faq-container">
//         {/* Left Section */}
//         <div className="faq-left">
//           <h5>Frequently Asked Questions</h5>
//           <h2>Let&apos;s clarify some of your questions</h2>
//           <p>
//             Find quick answers to common questions about searching, borrowing,
//             returning books, and using our library system effectively.
//           </p>
//           <div className="faq-image">
//           <Image 
//                     width={1300}
//                     height={1300}
//                      alt='Library'
//                      src='/assets/booj.png'
//                     ></Image>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="faq-right">
//           {faqs.map((faq, index) => (
//             <div key={index} className="faq-item">
//               <div className="faq-question" onClick={() => toggleFAQ(index)}>
//                 <span>{faq.question}</span>
//                 <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
//               </div>
//               {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;

"use client";

import React, { useState } from "react";
import Image from "next/image";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I search for a book in the library?",
      answer: "You can search for a book using the search bar on the homepage. Simply enter the book title, author name, or keywords related to the book, and the system will display matching results from the catalog.",
    },
    {
      question: "What should I do if I forget my password?",
      answer:
        "Click on the Forgot Password link on the login page. Enter your registered email address, and a password reset link will be sent to you. Follow the instructions in the email to reset your password.",
    },
    {
      question: "Can I reserve a book that’s currently checked out?",
      answer: "Yes, you can place a reservation, and you’ll be notified when the book becomes available.",
    },
    {
      question:
        "What happens if I return a book late?",
      answer:
        "If you return a book after the due date, a late fee will be applied. The amount of the fine depends on the library's policy, which you can check in the Rules and Policies section of the system.",
    },
    {
      question: "Can I access the library system on my phone?",
      answer: "Yes, the system is mobile-friendly and accessible via a web browser.",
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto mt-16 p-6">
      {/* Background Image */}
      <div className="absolute top-[-80px] right-[-30px] z-0 opacity-70">
        <Image
          width={200}
          height={200}
          alt="Library"
          src="/assets/book.png"
          className="pointer-events-none"
        />
      </div>

      {/* FAQ Container */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 bg-white p-8 rounded-lg shadow-md">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h5 className="text-blue-700 text-lg mb-2">Frequently Asked Questions</h5>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Let&apos;s clarify some of your questions
          </h2>
          <p className="text-gray-600 text-base mb-6">
            Find quick answers to common questions about searching, borrowing,
            returning books, and using our library system effectively.
          </p>
          <div>
            <Image
              width={350}
              height={300}
              alt="Library"
              src="/assets/booj.png"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <div
                className="flex justify-between items-center bg-blue-100 px-4 py-3 font-semibold text-gray-800 cursor-pointer hover:bg-blue-200"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-lg font-bold">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <div className="px-4 py-3 bg-blue-200 text-gray-700 border-t border-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
