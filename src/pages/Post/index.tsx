import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  hLine: string;
  img: string;
  youtube: string;
  ppp: string;
}

const AddPage: React.FC<{ posts: Post[] }> = ({ posts: initialPosts }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [title, setTitle] = useState('');
  const [hLine, setHLine] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [youtube, setYoutube] = useState('');
  const [ppp, setPPP] = useState('');

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get('/api/getPosts');
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/addPost', {
        title,
        hLine,
        img: imageUrl,
        youtube,
        ppp,
      });
      alert('Data added successfully');
      setPosts([...posts, data]);
      setTitle('');
      setHLine('');
      setImageUrl('');
      setYoutube('');
      setPPP('');
    } catch (error) {
      alert('Error adding data');
      console.error('Error adding data:', error);
    }
  };

  const handleDeletePost = async (postId: number) => {
    try {
      await axios.delete(`/api/deletePost/${postId}`);
      alert('Post deleted successfully');
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      alert('Error deleting post');
      console.error('Error deleting post:', error);
    }
  };

  return (
    <>
      <div className="container text-center">
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
            className="form-control mb-3"
            required
          />
          <input
            value={hLine}
            onChange={e => setHLine(e.target.value)}
            placeholder="Head Line"
            className="form-control mb-3"
            required
          />
          <input
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            placeholder="Image URL"
            className="form-control mb-3"
            required
          />
          <input
            value={youtube}
            onChange={e => setYoutube(e.target.value)}
            placeholder="YouTube Link"
            className="form-control mb-3"
            required
          />
          <input
            value={ppp}
            onChange={e => setPPP(e.target.value)}
            placeholder="PPP"
            className="form-control mb-3"
            required
          />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
        <br />
        <br />
        <Link href="https://img.servermanagerads.com/" target="_blank" className="m-3">
          เว็บฝากรูป
        </Link>
        <br />
        <br />
      </div>

      <div className="posts-body">
        <h1 className="posts-body-heading">Top 20 posts</h1>
        {posts?.length > 0 ? (
          <ul className="posts-list">
            {posts.map(post => (
              <li key={post.id} className="post-item">
                <div className="post-item-details">
                  <h2>{post.title}</h2>
                  <p>{post.hLine}</p>
                </div>
                <div className="post-item-actions">
                  <a href={`/posts/${post.id}`}>Edit</a>
                  <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="posts-body-heading">Ooops! No posts...</h2>
        )}
      </div>
    </>
  );
};

export default AddPage;
