"use client"

// ค่าเริ่มต้นควรเป็น array ว่าง
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const AddPage = () => {
  const [posts, setPosts] = useState([]); 
  const [title, setTitle] = useState('');
  const [hLine, setHLine] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [youtube, setYoutube] = useState('');
  const [ppp, setPPP] = useState('');

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  


  useEffect(() => {
    // ดึงข้อมูลโพสต์
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://api.pgbet-168.com/api');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
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
          h_line: hLine, 
          img: imageUrl, 
          youtube, 
          ppp,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      alert('Data added successfully');
      setPosts([...posts, data]); // Update the post list after adding new data
      // Reset state after adding data
      setTitle('');
      setHLine('');
      setImageUrl('');
      setYoutube('');
      setPPP('');
    } catch (error) {
      console.error('Error adding data:', error);
      alert('Error adding data');
    }
  };
  
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://api.pgbet-168.com/deletePost?id=${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      alert('Post deleted successfully');
      setPosts(posts.filter(post => post.id !== id)); // Update the post list after deletion
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error deleting post');
    }
  };


  return (
    <div className="container text-center mt-5 w-50">  
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className='form-control mb-3' required />
      <input value={hLine} onChange={e => setHLine(e.target.value)} placeholder="Head Line" className='form-control mb-3' required />
      <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Image URL" className='form-control mb-3' required />
      <input value={youtube} onChange={e => setYoutube(e.target.value)} placeholder="YouTube Link" className='form-control mb-3'  />
      <input value={ppp} onChange={e => setPPP(e.target.value)} placeholder="PPP" className='form-control mb-3' required />
      <button type="submit" className='btn btn-success' >Submit</button>
    
      </form>
      <br /><br />
      <Link href="https://img.servermanagerads.com/" target='_blank' className='m-3'> เว็บฝากรูป </Link>
     
      <br /><br />

 <div>






{posts?.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.hLine}</p>
          {/* Display other post details */}
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>


))}
      
    </div>     </div></div>
  );
};

export default AddPage;
