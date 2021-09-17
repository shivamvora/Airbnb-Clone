import React, { useState } from 'react'
import './Search.css';
import { DateContainerType, DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Button } from '@material-ui/core';
import { PeopleIcon } from '@material-ui/icons/People';

const Search = () => {
    const [startDate, setStartDate] = useState( new Date() )
    const [endtDate, setEndDate] = useState( new Date() )
    const selectionRange = {
        startDate: startDate,
        endtDate: endtDate,
        key: "selection",
    }
    function handleSelect( ranges ) {
        setStartDate( ranges.selection.startDate );
        setEndDate( ranges.selection.endtDate );
    }
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>Number of guests</h2>
            <input type="number" min={0} defaultValue={2} />
            <Button>Search Airbnb</Button>

        </div>
    )
}

export default Search
