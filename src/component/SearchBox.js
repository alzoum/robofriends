import React from "react";
const SearchBox = ({ searchChange }) => {
    return (
        <input className="pa3 ba b--green bg-light-blue"
            type="search"
            placeholder="searchRobot"
            onChange={searchChange}
        />
    );
}

export default SearchBox; 