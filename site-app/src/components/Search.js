import React from 'react';
import 'C:/Users/nikol/OneDrive/Рабочий стол/Демон/site-app/src/style/Search.css';

const Search = () => {
    return (
        <div className="search">
            <input type="text" name="example" list="exampleList1" className="search-input" />
            <datalist id="exampleList1">
                <option value="A"></option>
                <option value="B"></option>
            </datalist>
            <input type="text" name="example" list="exampleList2" className="search-input" />
            <datalist id="exampleList2">
                <option value="A"></option>
                <option value="B"></option>
            </datalist>
            <input type="text" name="example" list="exampleList3" className="search-input" />
            <datalist id="exampleList3">
                <option value="A"></option>
                <option value="B"></option>
            </datalist>
            <button className="search-button">Search</button>
        </div>
    );
}

export default Search;
