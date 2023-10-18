import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = ({
  inputSearch,
  handleInputChange,
  handleSearch,
 // searchResults, 
}) => {
  return (
    <>
      <header>
        <h1>Hyyy</h1>
        <input
          type="text"
          id="search"
          value={inputSearch}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Form">Form</Link>
            </li>
            <li>
              <Link to="List">List</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Display the search results */}
      <div>
        {/*searchResults.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))*/}
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
