import { ReactChild, ReactChildren, SetStateAction } from "react"

export type ChildrenType = {
    children: ReactChild | ReactChildren
}

export type HeaderProps = {
    isSignedIn: boolean,
    setIsSignedIn: (boolean: boolean) => SetStateAction<boolean>,
    children: ChildrenType
}

export type MovieInfoDetail = {
    title_long: string,
    description_full: string,
    medium_cover_image: string,
    date_uploaded: string,
    genres: [],
    torrents: { url: string }[],
    year: string
}

export type MovieInfo = {
    movieInfo: MovieInfoDetail,
    setIsModalOpen: React.Dispatch<React.SetStateAction<Boolean>>
}

export type SearchTypes = {
    setFilteredMovieQuery: (searchQuery: string) => SetStateAction<string>,
    setIsSpinnerLoading: (bool: boolean) => SetStateAction<boolean>
}

export type DashboardProps = {
    movies: MovieList,
    user: Record<string,string>,
    isSpinnerLoading: boolean
  };
  
export type MovieList = {
    movies: {
        large_cover_image: string,
        title: string
    }[],  
}

export type LoginDetailType = {
    email: string,
    name: string,
    token: string,
    _id: string
}

export type MovieActionType = {
    type: string,
    payload: any
}