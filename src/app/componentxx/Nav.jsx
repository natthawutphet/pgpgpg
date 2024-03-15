"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Nav() {
  return (
    <>
      

      <nav className="navbar navbar-expand-lg linecut">
  <div className="container-fluid">
  <Link href="" target='_blank' >
    <Image  src="/img/favicon.ico" alt="logo" width={60} height={60}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" id='pgnav' aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" id='pgnav' href="/slot">สล็อตออนไลน์</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" id='pgnav' href="/posts">posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='pgnav' href="/casino">casino</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='pgnav' href="/football">ฟุตบอล</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='pgnav' href="/sport">กีฬา</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='pgnav' href="/fish">ยิงปลา</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='pgnav' href="/lottery">หวย</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='pgnav' href="/contact">  ติดต่อเรา </Link>
        </li>
     
        <li className="nav-item">
          <Link className="nav-link" id='pgnav' href="/home">  homez </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='pgnav' href="/">   </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='pgnav' href="/">   </Link>
        </li>
      </ul>
      <span className="navbar-text">
   
    
      <Link href="https://www.pgbet-168.com" target='_blank' >
    <Image src="/img/login.png" width={200} height={50} alt="" /> </Link>

    <Link href="" target='_blank' >
    <Image src="/img/btn.png" width={200} height={50} alt="" /> </Link>
      
      </span>
    </div>
  </div>
</nav>


    </>
  )
}

export default Nav
