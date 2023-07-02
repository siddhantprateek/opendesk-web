import React from 'react';
import './header.styles.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="left">
        <h2>0pendesk</h2>
      </div>
      <div className="middle">
        <ul className='mid-nav'>
          <li>
            <a href="/solution">
              Solution
            </a>
          </li>
          <li>
            <a href="/dashboard">
              Pricing
            </a>
          </li>
          <li>
            <a href="/">
              Example
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className='right-nav'>
          <li>
            <a href="/login">
              Log in
            </a>
            </li>
          <li>
            <a href="/try-for-free">
              Try for free
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header