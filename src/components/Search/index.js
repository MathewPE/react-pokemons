'use client';

import './style.css';

const Search = ({ btnText, onChange, onClick }) => {
  const onHandleInput = (event) => {
    const text = event.target.value;
    if (onChange) {
      onChange(text);
    }
  }

  const onSearch = () => {
    if (onClick) {
      onClick()
    }
  };
  return (
    <div className='search'>
      <input placeholder='Buscar Pokemón' className='searchInput' onChange={onHandleInput} />
      <button className='searchBtn' onClick={onSearch}>
        {btnText}
      </button>
    </div>
  )
}

export default Search