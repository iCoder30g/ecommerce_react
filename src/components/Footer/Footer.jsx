import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Kids</span>
          <span>Shows</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Shows</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit possimus aperiam quas? Ab inventore natus ipsa fugit distinctio veniam quae numquam eius placeat eos provident aliquam culpa ullam eum, a nobis. Laborum delectus vel quam pariatur, numquam voluptas dignissimos voluptate? Quidem omnis quos nulla. Nulla iusto nemo dolore sequi consectetur.</span>
        </div>
        <div className="item">
          <h1>Contacts</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nihil incidunt animi provident eaque officia velit iure, ab molestias voluptas, quibusdam rerum cum voluptatibus esse quo nemo. Aperiam sint assumenda vitae architecto tenetur amet corporis possimus tempore odio in optio dignissimos illum quod asperiores, eaque vero quas. Minima, fugiat reprehenderit.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Nilstore</span>
          <span className="copyright">	&copy; Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="img" /></div>
      </div>
    </div>
  )
}

export default Footer
