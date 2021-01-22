import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
    return (
        <div className="home-m">
            <h1 >
                Welcome to the Home Page!
            </h1>
            <Link to="/category-list" className="btn btn-primary">Category List</Link>
        </div>
    );
}

export default Home;