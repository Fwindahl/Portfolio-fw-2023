import './Layout.scss'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import HeroBgAnimation from '../HeroBgAnimation/index'

const Layout = () => {
  return (
    <div className="App">
      {/* <div className="wip-cont">
        <h1 className="work-in-progress">WORK IN PROGRESS</h1>
        <p>
          <span className="contact-arrow">↙️</span> If you want to reach out,
          connect with me on{' '}
          <a
            className="linked"
            href="https://www.linkedin.com/in/filip-windahl-98930317a/"
          >
            Linkedin
          </a>
        </p>
      </div> */}
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <HeroBgAnimation />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="body-bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
