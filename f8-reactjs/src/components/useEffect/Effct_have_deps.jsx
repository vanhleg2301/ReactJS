import React, { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

const Effct_have_deps = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
          key={tab}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      <br />
      <input
        type="type"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Effct_have_deps;
