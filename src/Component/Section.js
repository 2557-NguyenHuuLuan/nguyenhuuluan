import React, { useState, useEffect } from 'react';
import '../App.css';
import me2 from '../Images/me2.jpeg';

export default function Section() {
    const [text, setText] = useState(""); // State to hold the typed text
    const fullText = "I'm a final-year Information Systems major with a focus on Information Technology, equipped with a solid foundation in system analysis, database management, and software development. I have hands-on experience in designing and optimizing information systems, along with a proven ability to adapt to emerging technologies. Passionate about innovation, I excel at collaborating within multidisciplinary teams to deliver creative solutions to complex challenges.";

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText[index]); // Add one character at a time
                index++;
            } else {
                clearInterval(typingInterval); // Clear interval when all text is typed
            }
        }, 30); // Adjust typing speed to your preference (currently 50ms per character)

        return () => clearInterval(typingInterval); // Cleanup interval on unmount
    }, []); // Empty dependency array means this effect runs only once when the component mounts

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-4xl font-semibold text-gray-900 sm:text-3xl relative">
                                I'm a <span className="text-5xl text-blue-500 font-bold animate-float">IT</span>
                                Student
                            </h2>
                            <p className="mt-4 text-gray-700 text-justify">
                                {text}
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            src={me2}
                            className="rounded shadow-extra-bold"
                            alt="me"
                            style={{
                                width: '700px', // Chiều rộng tùy chỉnh
                                height: '400px', // Chiều cao tùy chỉnh
                                objectFit: 'cover' // Giữ tỷ lệ hình ảnh nếu cần
                            }}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
