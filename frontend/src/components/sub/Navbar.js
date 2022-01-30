import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ( {toggle} ) => {
    return (
        <nav className="flex font-mono relative navbar
        h-16 shadow-sm items-center justify-between font-bold text-2xl" role="navigation">
            <Link to="/" className="pl-8"><div className="logo-1">Snowy</div><div className="logo-2">Anime</div></Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg className="w-6 h-6" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>

            <div className="pr-8 md:block hidden">
                <Link className="nav-item p-4" to="/">Home</Link>
                <Link className="nav-item p-4" to="/animes">Animes</Link>
                <Link className="nav-item p-4" to="/recommendations">Recommendations</Link>
                <Link className="nav-item p-4" to="/top">Top</Link>
            </div>
        </nav>
    );
}

export default Navbar;