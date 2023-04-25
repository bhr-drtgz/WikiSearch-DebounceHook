import React, { useState } from "react"
import SearchInput from "./component/SearchInput"
import List from "./component/List"
import useDebounce from "./hooks/useDebounce"

function App() {
  const [searchValue, setSearchValue] = useState("")

  const debouncedSerachValue = useDebounce(searchValue, 1000)

  return (
    <div className="container">
      <div>
        <h1>Wiki Search</h1>
      </div>
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <List searchTerm={debouncedSerachValue} />
    </div>
  )
}

export default App
