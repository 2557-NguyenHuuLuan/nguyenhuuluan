import React from "react";
import { Link } from "react-router-dom";
import me from "./Avatar/me.jpg";
import Footer from "../Footer";
import blogsData from "./blogs.json"; // Import JSON file

export default function MyBlogs() {
    function truncateContent(content, wordLimit) {
        const words = content.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return content;
    }
    
    return (
        <div>
            <div className="text-left my-8 ml-5">
                <a
                    href="/nguyenhuuluan"
                    className="px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded-md hover:bg-blue-700"
                >
                    Quay lại trang chủ
                </a>
            </div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Blog của chúng tôi
                        </h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            Những bài viết về Java và JavaScript, từ cơ bản đến nâng cao, giúp bạn mở rộng kiến thức và kỹ năng.
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        {blogsData.map((blog) => (
                            <article
                                key={blog.id}
                                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                            >
                                <div className="flex justify-between items-center mb-5 text-gray-500">
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                        {blog.category}
                                    </span>
                                    <span className="text-sm">{blog.date}</span>
                                </div>
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <Link to={`/my-blogs/${blog.id}`}>{blog.title}</Link>
                                </h2>
                                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                    {truncateContent(blog.content, 20)} {/* 30 từ */}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            className="w-7 h-7 rounded-full"
                                            src={me}
                                            alt="me"
                                        />
                                        <span className="font-medium dark:text-white">{blog.author}</span>
                                    </div>
                                    <Link
                                        to={`/my-blogs/${blog.id}`}
                                        className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                    >
                                        Đọc thêm
                                        <svg
                                            className="ml-2 w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
