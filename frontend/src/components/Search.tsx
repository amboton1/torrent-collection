import React, { ChangeEvent, FormEvent, SetStateAction, useState } from "react"

type SearchTypes = {
    setFilteredMovieQuery: (searchQuery: string) => SetStateAction<string>,
    setIsSpinnerLoading: (bool: boolean) => SetStateAction<boolean>
}

const Search = (props: SearchTypes) => {
  const { setFilteredMovieQuery, setIsSpinnerLoading } = props;
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFilteredMovieQuery(searchValue);
    setIsSpinnerLoading(true);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value);

  return (
    <form onSubmit={(event) => handleSubmit(event)} className="relative mr-7 w-max">
        <input onChange={(event) => handleChange(event)} type="search" className="peer cursor-pointer transition duration-800 relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none border-indigo-600 focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </form>
  )
}
export default Search