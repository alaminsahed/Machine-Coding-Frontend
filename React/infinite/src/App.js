import { useCallback, useRef, useState } from "react"
import useBookSearch from "./customHooks/UseBookSearch";

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { books, hasMore, loading, error } = useBookSearch({ query, pageNumber });

  const observer = useRef();

  const lastBookElementRef = useCallback(node => {
    console.log("-----", observer.current);
  }, [])

  const handleInput = (e) => {
    setQuery(e.target.value);
    setPageNumber(1)
  }
  console.log(query);
  return (
    <div>
      <input type="text" value={query} onChange={handleInput} />
      {
        books.map((book, index) => {
          if (books.length === index + 1) {

          }
        })
      }
    </div>
  );
}

export default App;
