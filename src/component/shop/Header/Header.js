import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='Heder_style'>
        <div className="nav">
            <div className="logo">
                <h1>CAR HOUSE</h1>
            </div>
            <div className="nav_bar">
                <div>Home</div>
                <div>Shop</div>
                <div>Contact</div>
            </div>
        </div>
    </div>
  )
}

export default Header