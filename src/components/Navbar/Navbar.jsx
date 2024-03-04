/* import { useEffect, useState } from 'react' */
import { NavLink } from 'react-router-dom'
import MenuLink from './MenuLink'
/* import DropdownLink from '.DropdownLink'
import { FaBars } from 'react-icons/fa6'
import { IoCloseSharp } from 'react-icons/io5'
import * as MdIcons from 'react-icons/md' */


const links = [
    { path: '/', label: 'Home' },
    { path: '/playground', label: 'Playground' },
    { path: '/notes', label: 'Notes' },
    { path: '/users', label: 'Users' },
]

const Navbar = () => {
    /* const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme ? JSON.parse(savedTheme) : true
    })

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640 && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
    }, [isMenuOpen])

    useEffect(() => {
        const element = document.documentElement
        if (isDarkMode) {
            element.classList.add('dark')
            localStorage.setItem('theme', JSON.stringify(true))
        } else {
            element.classList.remove('dark')
            localStorage.setItem('theme', JSON.stringify(false))
        }
    }, [isDarkMode]) */

    return (
        <nav className="m-4 flex h-16 items-center  justify-between rounded-lg bg-white/20 p-4 ">
            <NavLink to="/">
                <img className="h-auto w-16" src="./public/tailwindicon.png" alt="" />
            </NavLink>
            <ul className="flex gap-4">
               {/*  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="hidden text-2xl text-teal-500 sm:block"
                >
                    {isDarkMode ? (
                        <MdIcons.MdDarkMode />
                    ) : (
                        <MdIcons.MdLightMode />
                    )}
                </button> */}

                {links.map((link) => {
                    return (
                        <li key={link.path}>
                            <MenuLink path={link.path}>{link.label}</MenuLink>
                        </li>
                    )
                })}
            </ul>

            {/* <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-2xl text-teal-500 sm:hidden"
            >
                {isDarkMode ? <MdIcons.MdDarkMode /> : <MdIcons.MdLightMode />}
            </button>

            <button
            onClick={toggleMenu}
            className='text-4xl text-teal-500 sm:hidden'
            >
                {isMenuOpen ? <IoCloseSharp /> :
                <FaBars />}

            </button> */}
        </nav>
    )
}

export default Navbar
