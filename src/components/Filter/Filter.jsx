import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'components/redux/selectors';
import { changeFilter } from 'components/redux/filterSlice';

const Filter = () => {
  
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };
    return (
      <div>
        <h4>Find contacts by name</h4>
        <input onChange={onChange} value={value} placeholder='Contact name'/>
      </div>
    );
  }

export default Filter;
