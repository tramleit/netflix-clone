import { useState, useEffect } from "react"
import { VideosAndGenresRequest } from "../libs/interfaces"
import { getMovieImagesAndVideos, getVideosAndGenres } from "../services"
import { HeroContent } from "../libs/types"

const useContentRetriever = () => {
  const [collections, setCollections] = useState<VideosAndGenresRequest | undefined>(undefined) 
  const [heroContent, setheroContent] = useState<HeroContent | undefined>(undefined)

  const movies = collections?.videos.find(vid => vid.type === "movies") 
  const shows = collections?.videos.find(vid => vid.type === "shows")

  useEffect(() => {
    getVideosAndGenres().then(req => { 
      setCollections(req)
    })
  }, [])

  useEffect(() => {
    if (movies !== undefined && heroContent === undefined) {
      getMovieImagesAndVideos(movies.topRated[0].id).then(req => {
        setheroContent({
          logo: req.images.logos[0].file_path,
          overview: movies.topRated[0].overview,
          backdrop: movies.topRated[0].backdrop_path
        })
      })
    }
  }, [movies, heroContent])

  return {
    movies,
    shows,
    heroContent 
  }
}

export default useContentRetriever
