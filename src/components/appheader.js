import React from 'react';
import {Link} from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className='App-header'>
            <h1 className='App-header-logo'>NewsOasis</h1>
            <Link to="/settings">Réglages</Link>
            <div className='App-header-toolbar'>
                <label>Source: </label>

                <select value="noop">
                    <option value="noop">Source 1</option>
                    <option value="test">Source 2</option>
                </select>
            </div>
        </header>
    )
}

export default AppHeader;