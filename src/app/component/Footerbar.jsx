"use Client"

import React from 'react';

function Footerbar() {
  return (

    
    <div className="x-button-actions" id="account-actions-mobile">
      <div className="-outer-wrapper">
        <div className="-left-wrapper">
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block">
                <a href="#">เข้าสู่ระบบ</a>
              </span>
              <a href="#">
                <img
                  width="300"
                  height="300"
                  src="/img/all/login01-300x300.png"
                  className="image wp-image-5207 attachment-medium size-medium"
                  alt=""
                  decoding="async"
                  loading="lazy"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  srcSet="/img/all/login01-300x300.png 300w, /img/all/login01-150x150.png 150w, /img/all/login01-768x768.png 768w, /img/all/login01.png 859w"
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </a>
            </span>
          </span>
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block">
                <a href="#">สมัครสมาชิก</a>
              </span>
              <a href="#">
                <img
                  width="300"
                  height="300"
                  src="/img/all/register01-300x300.png"
                  className="image wp-image-5208 attachment-medium size-medium"
                  alt=""
                  decoding="async"
                  loading="lazy"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  srcSet="/img/all/register01-300x300.png 300w, /img/all/register01-150x150.png 150w, /img/all/register01-768x768.png 768w, /img/all/register01.png 859w"
                  sizes={"(max-width: 300px) 100vw, 300px"}/>
              </a>
            </span>
          </span>
        </div>
        <span className="-center-wrapper js-footer-lobby-selector js-menu-mobile-container">
          <div className="-selected">
            <h2 className="widgettitle">
              <a href="#">เข้าเล่น</a>
            </h2>
            <a href="#">
              <img
                width="380"
                height="295"
                src="img/all/ezgif-4-605b28d0c8-1.gif"
                className="image wp-image-5209 attachment-full size-full"
                alt=""
                style={{ maxWidth: '100%', height: 'auto' }}
                title="เข้าเล่น"
                decoding="async"
                loading="lazy"
              />
            </a>
          </div>
        </span>
        <div className="-fake-center-bg-wrapper">
        
        </div>
        <div className="-right-wrapper">
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block">
                <a href="https://google.com/">แนะนำเพื่อน</a>
              </span>
              <img
                width="300"
                height="300"
                src="/img/all/icon111-768x768-1-300x300.png"
                className="image wp-image-5211 attachment-medium size-medium"
                alt=""
                decoding="async"
                loading="lazy"
                style={{ maxWidth: '100%', height: 'auto' }}
                srcSet="img/all/icon111-768x768-1-300x300.png /img/all/icon111-768x768-1-150x150.png 150w, /img/all/icon111-768x768-1.png"
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </span>
          </span>
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block">
                <a href="#">ติดต่อเรา</a>
              </span>
              <a href="#">
                <img
                  width="500"
                  height="500"
                  src="/img/all/lineneon.png"
                  className="image wp-image-5212 attachment-full size-full"
                  alt=""
                  decoding="async"
                  loading="lazy"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  srcSet="/img/all/lineneon.png 500w, /img/all/lineneon-300x300.png 300w, /img/all/lineneon-150x150.png 150w"
                />
              </a>
            </span>
          </span>
        </div>
        <div className="-fully-overlay js-footer-lobby-overlay"></div>
      </div>
    </div>
  );
}

export default Footerbar;
