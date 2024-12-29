import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import Loading from "./Component/Loading";
import Homepage from "./Component/Homepage";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false); // Hide loading and show homepage
  };
  useEffect(() => {
    // Hide scrollbar but still allow scrolling
    document.body.style.overflow = "hidden";  // Hide scrollbar on the page
    return () => {
      document.body.style.overflow = "auto"; // Restore scrollbar when component unmounts
    };
  }, []);
  return (
    <div className="relative h-screen">
      <style>
        {`
          /* Hide scrollbar for WebKit browsers */
          .scrollbar-hidden::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }

          /* Hide scrollbar for Firefox */
          .scrollbar-hidden {
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
      {isLoading ? (
        <Loading onFinish={handleFinishLoading} />
      ) : (
        <motion.div
          initial={{ y: "100%" }} // Initially, the homepage will be hidden below the screen
          animate={{ y: "0%" }}    // After loading is complete, the homepage will slide up
          exit={{ y: "-100%" }}     // When the component is removed, the homepage will slide out from the top
          transition={{ 
            type: "spring",        // Use spring for a natural feel
            stiffness: 50,        // Adjust stiffness for smooth motion
            damping: 25,           // Adjust damping for softer motion
            duration: 0.8          // Duration of the motion
          }}
          className="w-full h-full overflow-hidden" // Ensure the element takes full height and width
        >
          <div className="h-screen overflow-y-scroll scrollbar-hidden"> {/* This div allows scrolling */}
            <Homepage />
          </div>
        </motion.div>
      )}
    </div>
  );
}