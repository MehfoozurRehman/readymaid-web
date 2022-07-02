import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setIsHeaderOpen(true);
    } else {
      setIsHeaderOpen(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        setIsHeaderOpen(true);
      } else {
        setIsHeaderOpen(false);
      }
    });
  }, []);

  return <div className="header"></div>;
}
