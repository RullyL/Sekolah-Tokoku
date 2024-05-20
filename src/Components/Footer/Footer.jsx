import React from 'react';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <>
    <footer className='flex bg-[#E6F1FF] gap-[315px] px-[116px] py-5' >
      <div className='flex gap-[130px]'>
        <div>
          <h2>Informasi Kontak</h2>
          <br />
          <p><EnvironmentOutlined />  Jalan Soreang, Kota Soreang</p>
          <p><MailOutlined />  Tokoku@mail.com</p>
          <p><PhoneOutlined />  (123) 456-7890</p>
        </div>
        <div>
          <h2>Tautan Terkait</h2>
          <br />
          <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/tentang">Tentang Kami</a></li>
            <li><a href="/produk">Produk</a></li>
          </ul>
        </div>
        <div>
          <h2>Media Sosial</h2>
          <br />
          <div className='flex gap-3'>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className='w-[25px]' src="./logo/ig-icon.png" alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className='w-[25px]' src="./logo/fb-icon.png" alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className='w-[25px]' src="./logo/twiter-icon.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className='w-[350px]'>
        <div className='w-full h-[135px] bg-white'></div>
        <div className='w-[350px] p-4  flex gap-4'>
          <div className='w-full bg-white h-7'></div>
          <div className='w-full bg-white h-7'></div>
        </div>
      </div>
      {/* <div className='text-center mt-16'>Copyright:Tokoku-2023-YASO</div> */}
    </footer>
    </>
  )
}

export default Footer;
