"use Client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footerbar() {
  return (
      <>  
     
    <div className="x-button-actions" id="account-actions-mobile">
      <div className="-outer-wrapper">
        <div className="-left-wrapper">
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block">
                <a href="#">เข้าสู่ระบบ</a>
              </span>
              <Link href="#">
                <Image src="/img/all/login01.png" width={100} height={100} alt="" />
              </Link>
            </span>
          </span>
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block">
                <a href="#">สมัครสมาชิก</a>
              </span>
              <a href="#">
              <Image src="/img/all/register01.png" width={100} height={100} alt="" />
              </a>
            </span>
          </span>
        </div>
        <span className="-center-wrapper js-footer-lobby-selector js-menu-mobile-container">
          <div className="-selected">
         
          <Link href="/" ><img src="/logo.ico" alt="" /></Link>
          </div>
        </span>
        <div className="-fake-center-bg-wrapper">
        
        </div>
        <div className="-right-wrapper">
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block">
                <a href="">แนะนำเพื่อน</a>
              </span>
              <Image src="/img/all/fff.png" width={100} height={100} alt="" />

            </span>
          </span>
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block">
                <a href="#">ติดต่อเรา</a>
              </span>
              <a href="#">
              <Image src="/img/all/lineneon.png" width={100} height={100} alt="" />
              </a>
            </span>
          </span>
        </div>
        <div className="-fully-overlay js-footer-lobby-overlay"></div>
      </div>
    </div>
    <Image src="/favicon.ico" width={100} height={100} alt="" />
    </>
  );
}

export default Footerbar;
