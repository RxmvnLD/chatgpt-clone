import { useState, useEffect } from "react";

const useTypingEffect = (text: string): string => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const speed = Math.floor(Math.random() * 30) + 60;

  useEffect(() => {
    const words = text.split(" ");
    const interval = setInterval(() => {
      setDisplayText(words.slice(0, currentWordIndex + 1).join(" "));
      setCurrentWordIndex(currentWordIndex + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [text, currentWordIndex, speed]);

  return displayText;
};

export default useTypingEffect;
