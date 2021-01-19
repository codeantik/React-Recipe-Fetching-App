import './App.css';
import React, { useState, useEffect } from 'react';
import Receipe from './components/Receipe';

function App() {

  const APP_ID = 'a9f21243'
  const APP_KEY = 'a2bce13b76cd8646a3b224e54726a3c9'
  // const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [receipes, setReceipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getReceipes()
  }, [query])

  const getReceipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    
    setReceipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }
 
  return (
    <div className='App'>
      <h1 className='head-title'>Recipe Heaven</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input type='text' placeholder='Search recipe' className='search-bar' value={search} onChange={updateSearch} />
        <button type='text' className='search-button'>Search</button>
      </form>
      <div className='recipe'>
      { receipes.map(receipe => (
        <Receipe 
        key={receipe.recipe.label}
        title={receipe.recipe.label} 
        calories={receipe.recipe.calories} 
        image={receipe.recipe.image}
        ingredients={receipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
