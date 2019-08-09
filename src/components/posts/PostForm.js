import React, { Fragment } from "react";

const PostForm = () => {
  return (
    <Fragment>
      <h2 class="lead">
        <i class="fas fa-comment-alt" /> Guidelines:
      </h2>

      <div class="post-form-header ">
        <h3>
          <ul>
            <li>Be Kind.</li>
            <li>
              Do not provide any medical advice, always consoult your doctor.
            </li>
          </ul>
        </h3>
      </div>
      <form class="form my-1">
        <textarea cols="30" rows="5" placeholder="Create a post" />
        <input type="submit" value="Submit" class="btn btn-dark my-1" />
      </form>
    </Fragment>
  );
};

export default PostForm;
