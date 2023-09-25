import { useEffect, useState } from "react"
import axios from 'axios';

const useBookSearch = ({ query, pageNumber }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    console.log("+++", query);
    useEffect(() => {
        setLoading(true);
        setError(false);
        axios.get("http://openlibrary.org/search.json", {
            params: {
                q: query,
                page: pageNumber
            }
        }).then(res => {
            setBooks(...books, res.data.docs.map(data => data.title))
        }).catch(e => console.log({ e }))
    }, [query, pageNumber])
    console.log("books", books);
    return { loading, error, books, hasMore }
}

export default useBookSearch;