import React from "react";

import AccordionFAQ from "../../AccordionFAQ";

const faq = [
  {
    question: "How do I start bidding?",
    answer: "",
  },
  {
    question: "How much does it cost to join?",
    answer: "It’s completely free! There is no cost to join with a Standard Membership.",
  },
  {
    question: "Where are your vehicles located?",
    answer: "",
  },
  {
    question: "How do I get started?  ",
    answer: "",
  },
  {
    question: "Do you offer shipping?",
    answer: "",
  },
];

const FAQ = () => {
  return (
    <div className="tw-w-full desktop:tw-max-w-[760px] tw-h-[458px] tw-hidden laptop:tw-block tw-mt-[70px]">
      <div className="text-title tw-text-[30px] tw-text-[#191919] tw-mb-[40px] tw-font-semibold">FAQ</div>
      <div className="case-border tw-p-[30px]">
        {faq.map((item, idx) => {
          const id = `collapse-${idx}`; // Уникальный идентификатор
          return <AccordionFAQ key={idx} question={item.question} answer={item.answer} id={id} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
