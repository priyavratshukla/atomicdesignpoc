import React, { useState } from "react";
import { retrivedObj, APP_CONSTANTS  } from '../actions';
import { css } from 'emotion';

const SortData = function(props){
    const [sortName, setSortName] = useState("asc");
    const [data] = useState(retrivedObj);
    console.log('sortName', sortName);
    console.log('data in sortdata', data);
    const callSortFunction = (sortName) => {
        setSortName(sortName);
        props.sort(sortName);
    }
    return (
        <>
            <div className="column">
                <div className="ui segment">
                    <label htmlFor="search">{APP_CONSTANTS.sortLabel}</label><br/>
                    <select className={css`
                        height: 38px;
                        padding: .5em;
                        border: 1px solid rgba(34,36,38,.15);
                        visibility: visible;
                        width: 100%;
                    `}
                    id="myList" onChange={(e) => callSortFunction(e.target.value)}>
                        <option value="asc">{APP_CONSTANTS.ascending}</option>
                        <option value="desc">{APP_CONSTANTS.descending}</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default SortData;