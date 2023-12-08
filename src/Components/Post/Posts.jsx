import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = ({ handleBookmarks, handleMarks }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('Posts.json')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="col-span-4">
      {posts.map((post) => (
        <Post
          key={post.id}
          item={post}
          handleBookmarks={handleBookmarks}
          handleMarks={handleMarks}
        />
      ))}
    </div>
  );
};

Posts.propTypes = {
  handleBookmarks: PropTypes.func.isRequired,
  handleMarks: PropTypes.func.isRequired,
};

export default Posts;
