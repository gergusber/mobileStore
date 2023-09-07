// import Input from '../../ui/input/Input';
import BreadCrumb from '../breadcrumb/breadcrum';
import classes from './searchbar.module.css';
import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// Define a regular expression pattern for text and numbers
const pattern = /^[a-zA-Z0-9\s]*$/;

const SearchBar = (props) => {
  const { searchMobiles } = props;

  const searchInputRef = useRef();
  const [searchIsValid, setSearchIsValid] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (!pattern.test(value)) {
      setSearchValue(value);
      setSearchIsValid(false);
      return;
    }

    setSearchValue(value);
    setSearchIsValid(true);
    searchMobiles(value);
  };

  return (
    <>
      <div className={classes.searchBar}>
        <span></span>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
          <TextField
            inputProps={{
              style: {
                height: '10px',
              },
            }}
            type='text'
            error={!searchIsValid}
            id={'search_' + props.id}
            value={searchValue}
            ref={searchInputRef}
            onChange={handleInputChange}
          />
        </Box>
      </div>
    </>
  );
};

export default SearchBar;
