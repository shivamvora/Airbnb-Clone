import React, { useState } from 'react'
import './Search.css';
import { DateContainerType, DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

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
        </div>
    )
}

export default Search
