import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <>
      

      <nav className="navbar navbar-expand-lg linecuttop01 linecutbt01 ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src="/img/favicon.ico" alt="logo" className='logo'/>
    </a>
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
      </ul>
      <span className="navbar-text">
      <button type="button" className="btn btn-primary mx-2 ">เข้าสู่ระบบ</button>

      <button type="button" className="btn btn-success mx-2">สมัครสมาชิก</button>
      
      </span>
    </div>
  </div>
</nav>


    </>
  )
}

export default Nav
