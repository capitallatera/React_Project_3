import React from 'react'
import { useGlobalContext } from "../context";

export const SearchForm=()=>{
    const { setSearchTerm }=useGlobalContext()
    const searchValue=React.useRef()
    
    React.useEffect(()=>{
        searchValue.current.focus()
    },[])

    const handlesubmit=(e)=>{
        e.preventDefault()
    }
    
    const searchCocktail=()=>{
        setSearchTerm(searchValue.current.value)
    }

    return (
    <section className="section search">
        <form className="search-form" onSubmit={handlesubmit}>
            <div className="form-control">
                <label htmlFor="name">search your favourite cocktail</label>
                <input 
                type="text"
                id="name"
                ref={searchValue}
                onChange={searchCocktail}
                />
            </div>
        </form>
    </section>   
    )
}
