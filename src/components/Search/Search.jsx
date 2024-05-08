import "./Search.css";

const Search = () => {
    return (
        <section className="search__container">
            <input id="search"
                   className="search__bar"
                   type="text"
                   name="search"
                   placeholder="Buscar..." />
            
            <button type="button" className="search__button">
                <span className="material-symbols-outlined">search</span>
            </button>
        </section>
        
    );
}

export default Search;
