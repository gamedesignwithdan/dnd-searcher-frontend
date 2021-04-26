import { useEffect, useState } from 'react';
import SearchBar from '../navigation/SearchBar';
// utilities
import Utils from '../../utilities/Utils';

const SearchPage = (props) => {
    const [results, setResults] = useState("");
    const [page, setPage] = useState(props.category)

    useEffect(() => {
        updatePage();
        console.log(page)
    })

    const updatePage = () => {
        setPage(props.category)
    }

    const handleQuery = async (query) => {
        setResults(await Utils.fetchMeThis(props.category, query));
    }

    const displayResults = () => {
        let list = results.map(result => {
            return (
                <tr key={result.slug}>
                    <td>
                        {result.name}
                    </td>
                </tr>
            )
        })

        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {list}

                </tbody>
            </table>
        )
    }

    return (
        <>
            <SearchBar handleQuery={handleQuery} category={props.category}/>
            <div className="table-div">
                {
                    results.length > 0 ?
                        <>
                            {displayResults()}
                        </>
                    :
                        <>
                            ...results
                        </>
                }
                    
            </div>
        </>
    )
}

export default SearchPage;