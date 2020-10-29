import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="header-title">Digital Pokemon Roll-a-dex </h1>
                <ul className='nav'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list" >List</Link>
                        
                    </li>
                    <li>
                        <Link to="/fetch" >Fetch</Link>
                        
                    </li>
            </ul>
            </div>
        )
    }
}