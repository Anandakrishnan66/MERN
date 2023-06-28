import React from 'react'
import './styles/Header.css'
import './About'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import About from './About';

export default function Header() {
  return (
    <div className='header'>

    <div className='header_logo'>
         <h1>Anandal</h1>
    </div>
     <nav>
         <ul>
            <div className='closed' >
                <CancelPresentationIcon className='close'/>


            </div>

            <li>

              <Link to={'/'}>
                Home
              </Link>
            </li>
            <li>
              <Link to={<About/>}>
                ABout
              </Link>
              </li>

              <li>
              <Link to={'/'}>
                Portfolio
              </Link>
              </li>
              <li>
              <Link to={'/'}>
                Blog
              </Link>
              </li>

              <li>
              <Link to={'/'}>
                Contact
              </Link>

            </li>
         </ul>
     </nav>


 <div className='changer'>
  <MenuBookIcon className="menu"/>
 </div>


    </div>
  )
}
