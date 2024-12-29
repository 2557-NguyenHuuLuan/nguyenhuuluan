import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "./blogs.json"; // Import JSON
import Footer from "../Footer";

export default function BlogDetails() {
  const { id } = useParams();

  // Tìm bài viết dựa trên ID
  const blog = blogsData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p className="text-center text-red-500 font-bold mt-10">Bài viết không tồn tại!</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Header with Back Button */}
      <div className="text-left my-8 ml-5">
        <a
          href="/my-blogs"
          className="px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded-md hover:bg-blue-700 transform transition-all duration-300 hover:scale-105"
        >
          Quay lại trang blogs
        </a>
      </div>

      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 transform transition-all duration-500 hover:scale-102">
        {/* Title */}
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">{blog.title}</h1>

        {/* Content */}
        <div className="prose prose-lg text-gray-700 leading-relaxed">
          {/* Render nội dung bài viết */}
          <p>{blog.content}</p>
        </div>
      </div>


      {/* Smooth scroll to top button */}
      <div className="fixed bottom-6 right-6 z-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-110"
        >
          ↑
        </button>
      </div>
      <Footer />
    </div>
  );
}
