import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
    const style = {
        textAlign: 'center',
        color: 'red',
        backgroundColor: '#fbf9f9',
        margin: '0px',
        paddingTop: '20px'
    }
    return (
        <div style={style}>
            <h1 >
                Welcome to the Home Page!
            </h1>
            <Link to="/category-list" className="btn btn-primary">Category List</Link>
        </div>
    );
}

export default Home;