"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const AddPage = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [headline, setHeadline] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [youtube, setYoutube] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.pgbet-168.com/api');
        const data = await response.json(); // Corrected to parse JSON from response
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.pgbet-168.com/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          headline,
          img: imageUrl,
          youtube,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const newPost = await response.json(); // Assuming the response contains the new post
      alert('Data added successfully');
      setPosts([...posts, newPost]); // Correctly update the post list
      // Reset form fields
      setTitle('');
      setHeadline('');
      setImageUrl('');
      setYoutube('');
      setContent('');
    } catch (error) {
      console.error('Error adding data:', error);
      alert('Error adding data');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://api.pgbet-168.com/delete/${id}`, { // Corrected to use path parameter
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      alert('Post deleted successfully');
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error deleting post');
    }
  };

  return (
    <>  
      <div className="container text-center mt-5 w-50">
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <form onSubmit={handleSubmit}>
     
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className='form-control mb-3' required />
      <input value={headline} onChange={e => setHeadline(e.target.value)} placeholder="Head Line" className='form-control mb-3' required />
      <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Image URL" className='form-control mb-3' required />
      <input value={youtube} onChange={e => setYoutube(e.target.value)} placeholder="YouTube Link" className='form-control mb-3'  />
      <input value={content} onChange={e => setContent(e.target.value)} placeholder="content" className='form-control mb-3' required />
     
    
     
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
          <Link href="https://img.servermanagerads.com/" target="_blank" rel="noopener noreferrer">เว็บฝากรูป</Link>
          <div>
            {posts?.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.headline}</p>
                {/* Display other post details */}
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPage;
