import React from "react";

function SearchBox(props) {
  return (
    <div className="col">
      <input
        className="form-control"
        value={props.value}
        onChange={(event)=>props.setSearchValue(event.target.value)}
        placeholder="type to search"
      ></input>
    </div>
  );
}

export default SearchBox;
