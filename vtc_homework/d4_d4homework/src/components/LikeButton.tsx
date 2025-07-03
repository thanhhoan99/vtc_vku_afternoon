import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const LikeButton = () => {
  return (
    <div style={{ fontSize: 18 }}>
      <FaThumbsUp style={{ marginRight: 8 }} />
      Click like if this post is useful to you !
    </div>
  );
};

export default LikeButton;
