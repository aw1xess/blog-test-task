import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import BlogItem from "../components/BlogItem";
import BlogModal from "../components/BlogModal";

interface Post {
  id: number;
  title: string;
  body: string;
}

const POSTS_PER_PAGE = 10;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  input,
  textarea {
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem;
    background-color: #0077cc;
    color: white;
    border: none;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoadMoreButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  display: block;
  background-color: #0077cc;
  color: white;
  border: none;
  cursor: pointer;
`;

const Blog = () => {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalPost, setModalPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setAllPosts(data);
      setVisiblePosts(data.slice(0, POSTS_PER_PAGE));
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: allPosts.length + 1,
      title,
      body,
    };

    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    alert("Post created!");
    const updatedPosts = [newPost, ...allPosts];
    setAllPosts(updatedPosts);
    setVisiblePosts([newPost, ...visiblePosts]);
    setTitle("");
    setBody("");
  };

  const loadMorePosts = () => {
    const currentLength = visiblePosts.length;
    const morePosts = allPosts.slice(
      currentLength,
      currentLength + POSTS_PER_PAGE
    );
    setVisiblePosts([...visiblePosts, ...morePosts]);
  };

  return (
    <div>
      <h1>Blog</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" disabled={!title || !body || loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </Form>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <>
          <BlogList>
            {visiblePosts.map((post) => (
              <BlogItem
                key={post.id}
                post={post}
                onClick={() => setModalPost(post)}
              />
            ))}
          </BlogList>
          {visiblePosts.length < allPosts.length && (
            <LoadMoreButton onClick={loadMorePosts}>Load More</LoadMoreButton>
          )}
        </>
      )}

      {modalPost && (
        <BlogModal post={modalPost} onClose={() => setModalPost(null)} />
      )}
    </div>
  );
};

export default Blog;
