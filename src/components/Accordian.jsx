import React from "react";
import { useState } from "react";

import Faqs from "./Faqs";

export default function Accordian() {
  const [selected, setSelected] = useState(false);
  console.log(selected);
  const Faqarray = [
    {
      questions: "How do I create an Account?",
      answer:
        "We do our best to provide you with all the help you may need in our FAQs. If you need to get in touch with us, you can go to the app Menu > Get help.",
    },
    {
      questions: "How can I hire a resource?",
      answer:
        "We do our best to provide you with all the help you may need in our FAQs. If you need to get in touch with us, you can go to the app Menu > Get help.",
    },
    {
      questions: "How do I become a resource?",
      answer:
        "We do our best to provide you with all the help you may need in our FAQs. If you need to get in touch with us, you can go to the app Menu > Get help.",
    },
    {
      questions: "How do I pay?",
      answer:
        "We do our best to provide you with all the help you may need in our FAQs. If you need to get in touch with us, you can go to the app Menu > Get help.",
    },
    {
      questions: "Where can I get Information & support?",
      answer:
        "We do our best to provide you with all the help you may need in our FAQs. If you need to get in touch with us, you can go to the app Menu > Get help.",
    },
  ];
  return (
    <div className="accordian__section">
      <div className="accordian__section__container__heading">
        <div className="accordian__section__container__heading__left">
          <div className="accordian__section__array">
            {Faqarray.map((item, index) => {
              console.log(item);
              return (
                <Faqs
                  questions={item.questions}
                  selected={selected}
                  setSelected={setSelected}
                  index={index}
                  answer={item.answer}
                />
              );
            })}
          </div>
        </div>
        <div className="accordian__section__container__heading__right">
          <div className="accordian__section__heading">Faq</div>
          <div className="accordian__section__heading__para">
            All you need to know!
          </div>
        </div>
      </div>
    </div>
  );
}
