import React from "react";

const Posts = () => {
  return (
    <section class="container">
      <h1 class="large text-primary">Forum</h1>

      <div class="posts">
        <div class="post bg-white my-1 p-1">
          <div>
            <img
              class="round-img"
              src="https://us.123rf.com/450wm/photollurg/photollurg1803/photollurg180300027/97512047-cute-pitbull-dog.jpg?ver=6"
              alt="avatar"
            />
            <h4>John Doe</h4>
          </div>

          <div>
            <p class="my-1">This Is where people were put their posts</p>
            <button class="btn">
              <i class="fas fa-thumbs-up" />
              <span>5</span>
            </button>
            <button class="btn">
              <i class="fas fa-thumbs-down" />
            </button>
            <a href="post.html" class="btn btn-primary">
              Discussion
            </a>
          </div>
        </div>
      </div>

      <div class="posts">
        <div class="post bg-white my-1 p-1">
          <div>
            <img
              class="round-img"
              src="https://us.123rf.com/450wm/photollurg/photollurg1803/photollurg180300027/97512047-cute-pitbull-dog.jpg?ver=6"
              alt="avatar"
            />
            <h4>John Doe</h4>
          </div>

          <div>
            <p class="my-1">This Is where people were put their posts</p>
            <button class="btn">
              <i class="fas fa-thumbs-up" />
              <span>5</span>
            </button>
            <button class="btn">
              <i class="fas fa-thumbs-down" />
            </button>
            <a href="post.html" class="btn btn-primary">
              Discussion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
