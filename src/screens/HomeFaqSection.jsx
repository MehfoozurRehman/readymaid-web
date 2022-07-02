import React, { useState } from "react";
import { HomeFaqSectionEntry } from "../components/HomeFaqSectionEntry";

export function HomeFaqSection({}) {
  const [selected, setSelected] = useState(false);

  const faqData = [
    {
      heading: "How do I create an Account?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium!",
    },
    {
      heading: "How do I create an Account?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium!",
    },
    {
      heading: "How do I create an Account?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium!",
    },
    {
      heading: "How do I create an Account?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium!",
    },
    {
      heading: "How do I create an Account?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium!",
    },
    {
      heading: "How do I create an Account?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium!",
    },
    {
      heading: "How do I create an Account?",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel officiis mollitia doloremque ea, necessitatibus inventore voluptatem accusantium quaerat laudantium!",
    },
  ];

  return (
    <div className="home__faq">
      <div className="home__faq__col"></div>
      <div className="home__faq__col">
        {faqData.map((faq, i) => (
          <HomeFaqSectionEntry
            index={i}
            heading={faq.heading}
            info={faq.info}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      <div className="home__faq__col">
        <div className="home__faq__col__heading">Faq</div>
        <div className="home__faq__col__info">All you need to know!</div>
      </div>
    </div>
  );
}
