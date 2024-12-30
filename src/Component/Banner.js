import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import me from "../Images/me.png";
import cat from "../Images/cat.gif";
import '../App.css';
import '../style/Banner.css';

export default function Banner() {

    return (
        <div className="min-h-screen bg-blue-500 text-white relative">
            {/* Header */}
            <header className="absolute top-0 left-0 w-full p-8 flex justify-between items-center bg-opacity-50 bg-blue-500">
                {/* Left section */}
                <div className="text-lg font-semibold text-white">
                    <span>@nguyenhuuluan</span>
                </div>

                {/* Right section */}
                <div className="flex space-x-12">
                    {[
                        { text: "Home", path: "/nguyenhuuluan" },
                        { text: "My Blogs", path: "/nguyenhuuluan/my-blogs" },
                        { text: "About Me", path: "/nguyenhuuluan/about-me" },
                    ].map(({ text, path }, index) => (
                        <Link
                            key={index}
                            to={path}
                            className="relative text-white font-medium group transform transition-all duration-300"
                        >
                            <span className="relative z-10 group-hover:scale-125 group-hover:origin-center transition-all duration-300">{text}</span>
                            <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 group-hover:scale-125 scale-0 transition-all duration-300 rounded-full z-0"></span>
                        </Link>
                    ))}
                </div>
            </header>

            <img
                src={me}
                alt="Nguyễn Hữu Luân"
                className="absolute top-1/2 left-1/2 object-cover z-2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: '100%', // Chiếm toàn bộ chiều rộng khung hình
                    height: '100%', // Chiếm toàn bộ chiều cao khung hình
                    maxWidth: '700px', // Đảm bảo hình ảnh không vượt quá kích thước tối đa
                    maxHeight: '900px', // Đảm bảo hình ảnh không vượt quá chiều cao tối đa
                }}
            />

            {/* Text on the left */}
            <motion.div
                className="absolute left-[5%] top-[40%] transform -translate-y-1/2 text-xl font-bold z-10 flex justify-center items-center"
                initial={{ scale: 1, backgroundColor: 'black', color: 'white' }}
                whileHover={{
                    scale: 1.5,
                    backgroundColor: 'white',
                    color: 'black',
                    transition: {
                        duration: 0.5, // Increased duration for smooth color transition
                        ease: "easeInOut" // Smoother transition easing
                    },
                }}
                transition={{ duration: 0.3 }}
                style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    textAlign: 'center',
                }}
            >
                <p className="m-auto animate-float">Located in Viet Nam</p>
            </motion.div>

            {/* Text on the right */}
            <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 z-10 text-white animate-float">
                <p className="text-4xl font-bold">
                    {["#In", "formation", "Technology"].map((text, index) => (
                        <span key={index} className="inline-block">
                            {text.split("").map((char, idx) => (
                                <motion.span
                                    key={idx}
                                    whileHover={{
                                        fontFamily: "'Poppins', sans-serif", // Chọn font chữ mới
                                        scale: 1.2, // Phóng to khi di chuột
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </p>
                <p className="text-sm">Senior Student</p>
            </div>

            <div className="image-container">
                <img
                    src={cat}  // Chỉnh sửa đường dẫn hình ảnh cho phù hợp
                    alt="Chạy hình ảnh"
                    className="image"
                />

                {/* Dòng chữ màu đen chạy */}
                <div className="text font-bold">
                    NGUYỄN HỮU LUÂN - INFORMATION TECHNOLOGY STUDENT
                </div>
            </div>
        </div>
    );
}
