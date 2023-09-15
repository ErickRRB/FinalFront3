import React from 'react'

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
        <div className='icon-footer'>
          <img className='icons' src='./images/ico-facebook.png' alt='Logo-Facebook'/>
          <img className='icons' src='./images/ico-instagram.png' alt='Logo-Instagram'/>
          <img className='icons' src='./images/ico-tiktok.png' alt='Logo-Tiktok'/>
          <img className='icons' src='./images/ico-whatsapp.png' alt='Logo-Whatsapp'/>
        </div>
    </footer>
  )
}

export default Footer
