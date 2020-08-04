import _ from 'lodash';
import React from 'react';
import { addFilter, removeFilter, setPage, entryAttr  } from '../actions';
import { connect } from 'react-redux';
import { css } from 'emotion';

const Filters = class Filters extends React.Component {

  updateFilter(name, e) {
      if (e.target.checked) {
        this.props.addFilter(name, e.target.value);
      } else {
        this.props.removeFilter(name, e.target.value);
      }
      this.props.resetPage();
    }
    render() {
      let filterParam = JSON.parse(localStorage.getItem("filterLabels"));
      console.log('filters===', filterParam);
      return (
        <React.Fragment>
          <div className="column">
            <div className="ui segment">
              <h2>Filters</h2>
              <div>
                {Object.keys(entryAttr)
                .filter(attr => attr !== "name")
                .map((attr, i) => {
                  return (
                    <div key={`filter-${i}`} className={css`
                    border: #ccc solid 1px;
                    display: inline-block;
                    margin: 10px 0 10px 10px;
                    padding: 10px;
                    width: 90%;
                    ul{
                      margin: 0;
                      padding: 0;
                      li{
                        list-style-type: none;
                        input[type="checkbox"]{
                          margin-right: 5px;
                        }
                      }
                    }
                  `}>
                      <ul>
                        {entryAttr[attr].map((attrValue, attrValueKey) => {
                          const inputId = _.snakeCase(attr + attrValue);
                          const checked = this.props.filters[attr]
                            ? this.props.filters[attr].includes(attrValue.toString())
                            : false;
                          return (
                            <li key={`${attrValue}-${attrValueKey}`}>
                              <input
                                type="checkbox"
                                id={inputId}
                                value={attrValue}
                                name={attrValue}
                                checked={checked}
                                onChange={
                                  e => { this.updateFilter(attr, e) }
                                }
                              />
                              <label htmlFor={inputId}>{attrValue}</label>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                  })}
                </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  };
  
  const FiltersMapStateToProps = state => {
    return {
      filters: state.filters.filters
    };
  };
  
  const FiltersMapDispatchToProps = dispatch => {
    return {
      addFilter: (name, value) => {
        dispatch(addFilter(name, value));
      },
      removeFilter: (name, value) => {
        dispatch(removeFilter(name, value));
      },
      resetPage: () => {
        dispatch(setPage(1));
      }
    };
  };
  
  const FiltersContainer = connect(
    FiltersMapStateToProps,
    FiltersMapDispatchToProps
  )(Filters);

  export default FiltersContainer;

