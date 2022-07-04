import React, { useState } from "react";
import { HomeFaqSectionEntry } from "../components/HomeFaqSectionEntry";
import { faqData } from "../constants/faqData";

export function HomeFaqSection() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="home__faq">
      <div className="home__faq__col"></div>
      <div className="home__faq__col">
        {faqData.map((faq, i) => (
          <HomeFaqSectionEntry
            key={JSON.stringify(faq)}
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
