import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
const NavBar = () => {
    const themes = {
        winter: 'winter',
        darcula: 'dracula',
    };

    const fetchThemeData = () => {
        const savedTheme = localStorage.getItem('theme-data') || themes.winter;
        document.documentElement.setAttribute("data-theme", savedTheme);
        return savedTheme;
    };

    const [theme, setTheme] = useState(fetchThemeData);

    const handleTheme = () => {
        const { winter, darcula } = themes;
        const newTheme = theme === winter ? darcula : winter;
        document.documentElement.setAttribute("data-theme", newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        localStorage.setItem('theme-data', theme);
    }, [theme]);
const numItemsInCart = useSelector((state)=>state.stateReducer.numItemsInCart)
console.log(numItemsInCart);
    return (
        <nav className='bg-base-200'>
            <div className='navbar align-element'>
                <div className='navbar-start'>
                    <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center'>
                        C
                    </NavLink>
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                            <FaBars className='h-6 w-6' />
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
                        >
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal'>
                        <NavLinks />
                    </ul>
                </div>
                <div className='navbar-end'>
                    <label className='swap swap-rotate'>
                        <input type='checkbox' onChange={handleTheme} checked={theme === themes.darcula} />
                        <BsSunFill className='swap-on h-4 w-4' />
                        <BsMoonFill className='swap-off h-4 w-4' />
                    </label>
                    <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                        <div className='indicator'>
                            <BsCart3 className='h-6 w-6' />
                            <span className='badge badge-sm badge-primary indicator-item'>
                                {numItemsInCart}
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
