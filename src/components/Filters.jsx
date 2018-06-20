import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UserProfile from './UserProfile';

class Filters extends Component {

  render() {
    const {filters, onClose} = this.props;
    return (
      <div className='filters flex p-t-50 p-l-50 p-r-10 bg-white'>
        <span className='icon-close in-gray-500' onClick={onClose} />{
        Object.keys(filters).map((key, index, arr) => (
          <div className='p-r-40 p-b-40' key={key}>
            <p className='p-b-20 p-l-10 p-r-10 font-16 in-gray-400'>{key}</p>
            {
              key === 'manager'
                ? (
                  <div className='filters__section-avatar flex-wrap p-l-10 p-r-10'>{
                    filters[key].map(item => <UserProfile userPhoto={item.url} key={item.id}/>)
                  }</div>
                )
                : (
                  <ul className={classNames({'flex-wrap': !index})}>{
                    filters[key].map((item, index) => (
                      <li className='filters__item font-14 in-blue-500 m-r-20' key={item.name + item.count}>
                         <span className={classNames('filters__item__bg p-l-10 p-r-10 icon-close-fill', {'filters__active': index % 3})}>
                           {item.name}
                           <span className='p-l-10 in-gray-500'>{item.count}</span>
                         </span>
                      </li>
                    ))
                  }</ul>
                )
            }
          </div>
        ))
      }</div>
    );
  }
}

Filters.propTypes = {
  filters: PropTypes.object,
  onClose: PropTypes.func,
};

export default Filters
