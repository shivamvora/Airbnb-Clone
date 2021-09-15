import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Banner.css';
import Search from './Search';

const Banner = () => {
    const [showSearch, setShowSearch] = useState( false );
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button variant="outlined" className="banner__searchButton" onClick={() => setShowSearch( !showSearch )}>Search Dates</Button>
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getway to uncover the hidden gems near you</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
