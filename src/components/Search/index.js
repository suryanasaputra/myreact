import { useState } from "react";
import './Search.css';

function Search({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleOnChange = event => {
    const value = event.target.value;

    setKeyword(value);
    onSearch(value);
  }

  return (
    <div>
      <label className="search-label" for="search">Cari Mahasiswa:</label>
      <input
        className="search-input"
        name="search"
        value={keyword}
        onChange={handleOnChange}
        placeholder="John Cena"
      />
    </div>
  )
}

export default Search;