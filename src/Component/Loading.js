import React, { useEffect, useState } from "react";

const greetings = [
  "Xin Chào",        // Vietnamese
  "Hello",            // English
  "Bonjour",          // French
  "स्वागत हे",       // Hindi
  "Ciao",             // Italian
  "Olá",              // Portuguese
  "おい",              // Japanese
  "Hallå",            // Swedish
  "Guten tag",        // German
  "Hallo",            // Dutch
  "こんにちは",         // Japanese (formal)
  "Hola",             // Spanish
  "안녕하세요",         // Korean
  "שלום",             // Hebrew
  "Привет",           // Russian
  "Merhaba",          // Turkish
  "Hej",              // Danish
  "Sawasdee",         // Thai
  "Kamusta",          // Filipino (Tagalog)
  "Salam",            // Arabic
  "Zdravo",           // Serbian
  "Selam",            // Albanian
  "Dia duit",         // Irish
  "Namaste",          // Nepali
  "Parev",            // Armenian
  "Γειά σας",         // Greek
  "Privet",           // Russian (informal)
  "Helo",             // Welsh
  "Salut",            // Romanian
  "Cześć",            // Polish
  "Heippa",           // Finnish
  "Aloha",            // Hawaiian
  "Sveiki",           // Latvian
  "Szia",             // Hungarian
  "Tere",             // Estonian
  "Labas",            // Lithuanian
  "Marhaba",          // Arabic (formal)
  "As-salāmu ʿalaykum" // Arabic (peaceful greeting)
];


export default function Loading({ onFinish }) {
  const [currentText, setCurrentText] = useState(greetings[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 150);

    // Automatically finish loading after 5 seconds
    const timer = setTimeout(() => {
      clearInterval(interval);
      onFinish();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  useEffect(() => {
    setCurrentText(greetings[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Loading animation */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-blue-300 rounded-full animate-bounce mr-2"></div>
          <div className="w-12 h-12 bg-black rounded-full animate-bounce mr-2"></div>
          <div className="w-12 h-12 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
        
        {/* Animated Greeting Text */}
        <h2 className="text-3xl font-semibold text-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
          {currentText}
        </h2>
      </div>
    </div>
  );
}
