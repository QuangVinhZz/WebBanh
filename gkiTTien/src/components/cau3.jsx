import React, { useState, useEffect } from "react";
import "./cau3.css"; // Import CSS cho style

const PostList = () => {
  const [posts, setPosts] = useState([]); // State để lưu dữ liệu từ API
  const [loading, setLoading] = useState(true); // State để hiển thị trạng thái loading
  const [currentPage, setCurrentPage] = useState(1); // State để lưu trang hiện tại
  const postsPerPage = 10; // Số bài viết trên mỗi trang

  // Sử dụng useEffect để gọi API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data); // Lưu dữ liệu vào state
        setLoading(false); // Tắt trạng thái loading
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Chỉ chạy một lần khi component được mount

  // Tính toán dữ liệu cho trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Hàm chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading...</p>; // Hiển thị khi đang tải dữ liệu
  }

  return (
    <div className="post-list">
      <h1>Posts</h1>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id} className="post-item">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

// Component Pagination
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PostList;
