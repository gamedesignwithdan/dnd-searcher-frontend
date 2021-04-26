import { useState } from 'react';

export default function SearchBar(props) {
    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        props.handleQuery(query)
        e.preventDefault();
    }

    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder={"search " + props.category}
                    alt="search"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
            </form>
        </div>
    )
}