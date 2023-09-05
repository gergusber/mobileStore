// import Input from '../../ui/input/Input';
import BreadCrumb from '../breadcrumb/breadcrum';
import classes from './searchbar.module.css';
import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';

// Define a regular expression pattern for text and numbers
const pattern = /^[a-zA-Z0-9]*$/;

const SearchBar = (props) => {
  const searchInputRef = useRef();
  const [searchIsValid, setSearchIsValid] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (pattern.test(value)) {
      setSearchValue(value);
      setSearchIsValid(false)
    }
    else {
      setSearchValue(value);
      setSearchIsValid(true)
    }
  };

  const submitHandler = event => {
    event.preventDefault();

    if (searchValue.trim().length === 0) {
      setSearchIsValid(true)
      return;
    }
    //call to the search event


  }
  return (
    <>
      <div className={classes.searchBar}>
        <BreadCrumb />
        <form className={classes.form}  onSubmit={submitHandler}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent:'space-between' }}>
            <TextField
              inputProps={{
                style: {
                  height: "10px",
                },
              }}
              type='text'
              defaultValue={''}
              error={searchIsValid}
              id={'search_' + props.id}
              value={searchValue}
              ref={searchInputRef}
              onChange={handleInputChange} />

            <Button type='submit' disabled={searchIsValid}>Search</Button>
          </Box>

        </form>
      </div>
    </>
  );
};

export default SearchBar;
