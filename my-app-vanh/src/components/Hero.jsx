import React, { useState, useEffect } from "react";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const texts = ["Music", "code", "play hard"];

  useEffect(() => {
    const typeNextText = () => {
      const currentText = texts[textIndex];
      const currentIndex = typedText.length;
      if (currentIndex < currentText.length) {
        const nextChar = currentText[currentIndex];
        setTypedText((prevText) => prevText + nextChar);
      } else {
        // All characters typed for the current text, move to the next text
        setTimeout(() => {
          setTypedText(""); // Clear the typedText
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text
        }, 2000); // Wait for 2 second before clearing and moving to the next text
      }
    };

    const typingInterval = setInterval(typeNextText, 120); // Typing speed: 120ms per character

    return () => {
      clearInterval(typingInterval); // Clean up the interval when the component unmounts
    };
  }, [textIndex, typedText]);

  return (
    <div className="">
      <div className="max-w-[60%] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="text-[#4BADED] w-50 md:text-5xl sm:text-4xl text-4xl font-bold md:py-4">
          Nâng tầm Quản trị Thương hiệu cùng Big Data, AI & Machine Learning
        </h1>
        <div className="text-[#4BADED] md:text-2xl border border-blue-400 border-solid font-bold mt-5">
          <button>Tim hieu them</button>
        </div>
      </div>
      <div className="flex justify-center text-center">
        <p>Vanh Vanh He161142 - </p>
        <span
          style={{
            fontSize: "1rem",
          }}
        >
          {typedText}
        </span>
      </div>
    </div>
  );
};

export default Hero;
