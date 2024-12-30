import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import Main from './Main';
import MyBlogs from "../src/Component/Myblogs/MyBlogs"; // Tạo trang My Blogs
import AboutMe from "../src/Component/Aboutme/AboutMe"; // Tạo trang About Me
import BlogDetails from "../src/Component/Myblogs/BlogDetails";
import PageNotFound from '../src/Component/Notfound/404';
function App() {
  useEffect(() => {
    // Hàm chặn sự kiện lăn chuột khi nhấn Ctrl
    const handleWheel = (event) => {
      // Kiểm tra nếu người dùng nhấn Ctrl và lăn chuột
      if (event.ctrlKey) {
        event.preventDefault(); // Ngừng hành động phóng to/thu nhỏ
      }
    };

    // Thêm sự kiện lắng nghe lăn chuột
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/nguyenhuuluan" element={<Main />} />
        <Route path="/nguyenhuuluan/my-blogs" element={<MyBlogs />} />
        <Route path="/nguyenhuuluan/about-me" element={<AboutMe />} />
        <Route path="/nguyenhuuluan/my-blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
