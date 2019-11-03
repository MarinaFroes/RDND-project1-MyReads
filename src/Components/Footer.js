import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import mylogo from '../icons/mylogo.svg'

function Footer() {
  return (
    <footer>
      <p>Page written by Marina Froes A. Costa</p>
      <div className='icon-container'>
        <a
          className='icon'
          href='https://github.com/MarinaFroes'
          target='_blank'
          rel='noopener noreferrer'
        >
          {<FaGithub />}
        </a>
        <a
          className='icon'
          href='https://www.linkedin.com/in/marina-froes-a-costa/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {<FaLinkedin />}
        </a>
        <a
          className='icon'
          href='mailto:facosta.marina@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          {<FaEnvelope />}
        </a>
        <a
          className='icon'
          href='https://marinafroes.github.io/Portfolio/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={mylogo} alt=''/>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
