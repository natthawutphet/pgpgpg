"use client"

import { useEffect, useState } from 'react';
const AdsPage = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      const response = await fetch('https://api.pgbet-168.com/api');
      const adsData = await response.json();
      setAds(adsData);
    };

    fetchAds().catch(console.error);
  }, []);

  return (
    <div>
      <div className="container text-center">
        <h1>PG เว็บตรง</h1>
      </div>
      {ads.length > 0 && ads.map(ad => (
        <div key={ad.id} className="container text-center">
          <div className="card mb-3">
            <div className="title h2">{ad.title}</div>
            {ad.img ? (
              <img src={ad.img} alt={ad.title} style={{ maxWidth: '100%', height: 'auto' }} className="card-img-top" />
            ) : ad.youtube ? (
              <iframe
                className='vdo'
                src={`https://www.youtube.com/embed/${ad.youtube}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={ad.title}
              ></iframe>
            ) : (
              <p>No image or video available.</p>
            )}
            <div className="card-body">
              <h2 className="card-title">{ad.h_line}</h2>
              <p className="card-text">{ad.ppp}</p>
              <p className="card-text"><small className="text-body-secondary">{ad.time}</small></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdsPage;


   
   