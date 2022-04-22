import React from 'react'
import '../styles/Nav.css'

function Nav() {
  return (
    <div>
      <header>
        <nav>
          <div className="items-logo">
            <h1 className='logo'>Leo<h1 className='amaral'>Amaral</h1></h1>
            <div className='items-nav'>
              <a className='items' href="">Home</a>
              <a className='items' href="">Project</a>
              <a className='items' href="">About</a>
              <a className='items' href="">Skills</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav