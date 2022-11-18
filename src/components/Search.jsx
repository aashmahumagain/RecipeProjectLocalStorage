import React from "react";
import styled from "styled-components";

const Search = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <SearchComponent>
      <div className="search-section">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </div>
    </SearchComponent>
  );
};

export default Search;
const SearchComponent = styled.div`
  .search-section {
    display: grid;
    justify-content: flex-end;
    margin: 10px;
  }
`;
