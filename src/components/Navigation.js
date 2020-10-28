import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <h1>Hacker NewsReader</h1>
            <nav>
                <Link to={"/"}>Home</Link>
            </nav>
        </div>
    );
};

export default Navigation;