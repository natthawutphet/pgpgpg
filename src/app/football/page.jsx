"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
  
  const AddPage = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); 
  const [headline, setHeadline] = useState(''); 
  const [img, setImg] = useState(''); 
  const [youtube, setYoutube] = useState('');
  const [ppp, setPPP] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('/api/getPosts');
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('api/addPost', {
        title, content, headline, img, youtube, ppp, // ส่งข้อมูล title, content, headline, img, youtube ไปยังเซิร์ฟเวอร์
      });
      alert('Data added successfully');
      setPosts([...posts, data]);
      setTitle('');
      setContent(''); // รีเซ็ต state สำหรับ content
      setHeadline(''); // รีเซ็ต state สำหรับ headline
      setImg(''); // รีเซ็ต state สำหรับ img
      setYoutube(''); // รีเซ็ต state สำหรับ youtube
      setPPP('');
    } catch (error) {
      alert('Error adding data');
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`api/delete/${id}`);
      alert('Post deleted successfully');
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      alert('Error deleting post');
      console.error(error);
    }
  };

  return (
    <>
      <div className="container text-center">  
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className='form-control mb-3' required />
          <input value={content} onChange={e => setContent(e.target.value)} placeholder="Content" className='form-control mb-3' required />
          <input value={headline} onChange={e => setHeadline(e.target.value)} placeholder="Headline" className='form-control mb-3' required />
          <input value={img} onChange={e => setImg(e.target.value)} placeholder="Image URL" className='form-control mb-3' />
          <input value={youtube} onChange={e => setYoutube(e.target.value)} placeholder="YouTube Link" className='form-control mb-3' />
          <input value={ppp} onChange={e => setPPP(e.target.value)} placeholder="PPP" className='form-control mb-3' required />
          <button type="submit" className='btn btn-success'>Submit</button>
        </form>

        <br /><br />
        <Link href="https://img.servermanagerads.com/" target='_blank' className='m-3'> เว็บฝากรูป </Link>
     
        <br /><br />

        <div>
          {posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.headline}</p>
              <p>{post.content}</p>
              <img src={post.img} alt={post.title} style={{ width: '100px', height: 'auto' }} />
              <p>YouTube: {post.youtube}</p>
              <p>PPP: {post.ppp}</p>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div> 
          ))}
        </div>
      </div>
    </>
  );
};

export default AddPage;
