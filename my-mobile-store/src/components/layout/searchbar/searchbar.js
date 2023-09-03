import Input from '../../ui/input/Input';
import BreadCrumb from '../breadcrumb/breadcrum';
import classes from './searchbar.module.css';
import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button'

const SearchBar = (props) => {
  const searchInputRef = useRef();
  const [searchIsValid, setSearchIsValid] = useState(true)

  const submitHandler = event => {
    event.preventDefault();
    const enteredSearch = searchInputRef.current.value;
    if (enteredSearch.trim().length === 0) {
      setSearchIsValid(false)
      return;
    }
    //call to the search event
  }
  return (
    <>
      <div className={classes.searchBar}>
        <BreadCrumb />
        <form className={classes.form} onSubmit={submitHandler}>
          <Input label=''
            ref={searchInputRef}
            input={{
              id: 'search_' + props.id,
              type: 'string',
              defaultValue: '',
              className: classes.input
            }}
          />
          <Button type='submit'>Search</Button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
