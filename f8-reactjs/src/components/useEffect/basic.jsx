// Events: Add/ remove event listener
// Observer pattern: Subscribe / unsubscribe
// Cloure
// Timers: setInterval, setTimeout, ClearInterval, ClearTimeout
// UseState
// mounted, unmounted
// ===
// Call API

/**
 * 1. Update DOM
 * 2. Call API
 * 3. Listenten DOM events
 *  - Scroll
 *  - Resize
 * 4. Cleanup
 *  - Remove listener / Unsubcribe
 *  - Clear timer
 *
 *  useEffect(callback)
 * - Gọi callback sau khi component thêm element vào DOM
 *  useEffect(callback, [])
 * - Chỉ gọi component mounted
 *  useEffect(callback, [deps])
 * - Callback sẽ đc gọi lại mỗi khi deps thay đổi
 * ------------
 * Ly thuyet chung
 * - callback luon dc goi sau khi component mounted
 */

import React, { useEffect, useState } from "react";

const Basic = () => {
  //

  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      <input
        type="type"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Basic;
