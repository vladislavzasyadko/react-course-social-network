import React from "react";
import pmodule from './Post.module.css';

import postAvatar from '../../../../img/avatar2.png';

const Post = (props) => {
  return (
    <div className={pmodule.item}>
      <img alt='#' src={postAvatar} />
      <div className={pmodule.post_text}>
        {props.message}
      </div>

      <div className={pmodule.likes}>
        {props.likeCount} likes
      </div>

    </div>
  );
};

export default Post;
