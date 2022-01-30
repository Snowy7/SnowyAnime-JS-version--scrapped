import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ( {collapsed, toggle} ) => {
    return (
        <div onClick={toggle} className={collapsed ? "hidden" : "grid grid-row-4 text-center items-center bg-yellow-500"}>
            <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/animes">Animes</Link>
                <Link className="p-4" to="/recommendations">Recommendations</Link>
                <Link className="p-4" to="/top">Top</Link>
        </div>
    )
}

export default Dropdown
