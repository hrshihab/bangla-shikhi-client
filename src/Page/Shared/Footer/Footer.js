import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-100 text-white mx-auto flex  justify-evenly border-t-4 md:border-t-4   border-rose-600  rounded-t-3xl lg:rounded-t-full  shadow-inner px-1">
    
      <div className="mr-8">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={logo} alt='logo'/>
          </div>
        </div>
        <p>Learn Bangla Language<br/>Providing reliable tech since 1992</p>
      </div> 
      <div className="flex flex-col">
        <span className="footer-title mb-2">Services</span> 
        <Link to='' className="link link-hover">Branding</Link> 
        <Link to='' className="link link-hover">Design</Link> 
        <Link to='' className="link link-hover">Marketing</Link> 
        <Link to='' className="link link-hover">Advertisement</Link>
      </div> 
      <div className="flex flex-col">
        <span className="footer-title mb-2">Company</span> 
        <Link to='' className="link link-hover">About us</Link> 
        <Link to='' className="link link-hover">Contact</Link> 
        <Link to='' className="link link-hover">Jobs</Link> 
        <Link to='' className="link link-hover">Press kit</Link>
      </div> 
      <div className="flex flex-col">
        <span className="footer-title mb-2">Legal</span> 
        <Link to='' className="link link-hover">Terms of use</Link> 
        <Link to='' className="link link-hover">Privacy policy</Link> 
        <Link to='' className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
