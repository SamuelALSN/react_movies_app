import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'
import SearchForm from './components/searchForm'
import {Movie} from './movie'
import MovieCard from "./components/movieCard";

const API_ENDPOINT = 'https://api.themoviedb.org/3/search/movie'
const API_KEY = 'd787cd7822a295775b64eeca8cf6d43a'


const useSemiPersistentState = (key: string, initialState: string):[string,(newValue:string)=>void] => {

    const [value, setValue] = useState(
        localStorage.getItem('Search') || initialState
    )

    useEffect(() => {
        localStorage.setItem('KEY', value)

    }, [key, value])

    return [value, setValue]
}

const App = () => {

    const [searchTerm, setSearchTerm] = useSemiPersistentState('Search', 'KUNGFU PANDA')

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`${API_ENDPOINT}?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
            .then(resolved => resolved.data)
            .then(response => setMovies(response.results))
            .catch(error => console.log(error))

    }, [searchTerm])


    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }
    const handleSearchSubmit = () => {

    }
    console.log('Component Mount')
    return (
        <div className="App">
            <header className="App-header">
                <h1> Welcome to World largest movies Database </h1>
            </header>
            <div className="container">
                <SearchForm
                    searchTerm={searchTerm}
                    onSearchInput={handleSearchInput}  /* the callback is used here */
                    onSearchSubmit={handleSearchSubmit}/>

                    <MovieCard list={movies}/>
            </div>
        </div>
    )
}

export default App
