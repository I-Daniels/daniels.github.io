import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
        <div className='navbar'>
          <Link to='/about'>О сайте</Link>
          <Link to='/posts'>Публикации</Link>
        </div>
      </div>
    )
}

export default Navbar