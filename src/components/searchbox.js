import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa4">
      <input
        className="grow pa3 ba white b--light-purple bg-light-blue br-pill"
        type="search"
        placeholder="Search robots..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
