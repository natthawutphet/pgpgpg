"use Client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footerbar() {
  return (
      <>  

<div className="fixed-bottom" id='bar'>
  <div className="text-bg-dark linecuttop">
<div className="text-center"> 

  <div className="d-flex justify-content-around">
     <Link href="/" type="button" className="btn">
      <Image src="/img/all/login01.png" width={50} height={50} alt="" />
      <p className="flokx">เข้าสู่ระบบ</p>
      </Link>



    <Link href="/" type="button" className="btn">
      <Image src="/img/all/register01.png" width={50} height={50} alt="" />
      <p className="flokx">สมัครสมาชิก</p>
      </Link>


    <Link href="/" type="button" className="btn"><Image src="/img/homes.png" width={70} height={70} alt="" /></Link>


    <Link href="/" type="button" className="btn"><Image src="/img/all/lineneon.png" width={50} height={50} alt="" />
    <p className="flokx">ติดต่อเรา</p></Link>

    <Link href="/" type="button" className="btn"><Image src="/img/all/fff.png" width={50} height={50} alt="" />
    <p className="flokx">แนะนำเพื่อน</p>
    </Link>
     
    </div>
  </div>
  </div>
</div>


 



   </>
  );
}

export default Footerbar;
