import React, { useState, useEffect } from 'react';
import FilterBubblesContainer from './FilterBubbles';
import FiltersContainer from './Filters';
import SortData from './SortData';
import SearchData from './SearchData';
import DisplayData from './DisplayData';
import { retrivedObj } from '../actions';

const AppContainer = () => {
  const [data, setData] = useState(retrivedObj);
  useEffect(() => {
    setData(retrivedObj);
  }, []);
  const search = searchValue => {
    const searchResults = [...data].filter( item => {
        return item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
    setData(searchResults);
  };
  const sort = sortName => {
    const sorted = [...data].sort((a,b) => {
      const isReversed = (sortName === 'asc') ? 1 : -1;
      return isReversed * a.name.localeCompare(b.name);
    });
    setData(sorted);
  };
  return (
    <React.Fragment>
      <div className="ui celled grid">
        <div className="row">
          <div className="three wide column stackable grid container">
            <div className="column">
              <div className="ui segment"><FiltersContainer /></div>
            </div>
          </div>
          <div id="result-wrapper" className="thirteen wide column stackable grid container">
            <FilterBubblesContainer />
            <div className="ui two column padded grid">
              <SearchData search={search} />
              <SortData sort = {sort}/>
            </div>
            <div className="ui four column doubling stackable grid">
            {
              data.map((data, index) => (
                <DisplayData key={`${index}-${data.id}`} tile={data} />
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  };
  
 export default AppContainer;