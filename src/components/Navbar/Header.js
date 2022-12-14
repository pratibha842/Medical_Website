import { NavLink } from 'react-router-dom';
import {CgProfile} from 'react-icons/cg';
import {BsFillSquareFill} from 'react-icons/bs'


const Header = () => {
    const style = { color: "white", fontWeight:'bold'}
  return (
        <header>
            <nav>
            <ul>
                <li>
                    <NavLink ><BsFillSquareFill size={28}/></NavLink>
                </li>
                 <li>
                    <NavLink >Medical Darpan</NavLink>
                </li>

                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/distributors">Distributors</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li className='right'>
                    <NavLink to="/login"><CgProfile  size={28}/></NavLink>
                </li>
                <li className='right'>
                    <NavLink to="/login">Login</NavLink>
                    
                </li>
               
            </ul>
            </nav>
        </header>

  )
}

export default Header