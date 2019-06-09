import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../components/Scroll'

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <Scroll type="id" element="two">
              <li>
                <a href="#two">My Stacks</a>
              </li>
              </Scroll>
              <Scroll type="id" element="three">
              <li>
                <a href="/Elements">Elements</a>
              </li>
              </Scroll>
              <li>
                <a href="https://www.linkedin.com/in/tnathalang/" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.instagram.com/itsdrunksushi/" target="_blank">Instagram</a>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
