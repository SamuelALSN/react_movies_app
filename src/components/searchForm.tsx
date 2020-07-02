import React from 'react';
import InputWithLabel from "./inputWithLabel";

type searchFormProps = {
    searchTerm: string;
    onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
const SearchForm = ({searchTerm, onSearchInput, onSearchSubmit}: searchFormProps) => {

    return (
        <form onSubmit={onSearchSubmit} className='form'>
            <InputWithLabel
                id="query"
                value={searchTerm}
                isFocused
                onInputChange={onSearchInput}
            >
                <strong> Enter Movies Names : </strong>
            </InputWithLabel>
            <button type="submit" className='button'>Search</button>
        </form>
    );
};

export default SearchForm;