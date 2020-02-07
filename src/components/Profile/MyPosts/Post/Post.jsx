import React from "react";
import pmodule from './Post.module.css';

import postAvatar from '../../../../img/angry.jpeg';

const Post = () => {
  return (
     <div className={pmodule.item}>
       <img src={postAvatar}/> Post 1</div>
  );
};

export default Post;
