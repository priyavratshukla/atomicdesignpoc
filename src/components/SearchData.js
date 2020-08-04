import React, { useState } from "react";
import { APP_CONSTANTS  } from '../actions';

const SearchData = (props) => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleSearchInputChanges = (e) => {
      setSearchValue(e.target.value);
    }
  
    const resetInputField = () => {
      setSearchValue("")
    }
  
    const callSearchFunction = (e) => {
      e.preventDefault();
      props.search(searchValue);
      resetInputField();
    }
  
    return (
        <div className="column">
            <div className="ui segment">
                <form className="ui form">
                    <label htmlFor="search">{APP_CONSTANTS.searchLabel}</label><br/>
                    <div className="ui icon input">
                        <input type="text" 
                        placeholder="Search..."
                        value={searchValue}
                        onChange={handleSearchInputChanges}
                        />
                        <i aria-hidden="true" onClick={callSearchFunction} className="search circular inverted link icon"></i>
                    </div>
                </form>
            </div>
        </div>
      );
  }

  export default SearchData;