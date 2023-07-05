import React, {useEffect} from 'react'

function Home() {

    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/11?api_key=abb4f6428bc3f6a5ee5f4d7de2c21bc3")
      .then(res => res.json())
      .then(data => console.log(data))
    }, [])
    
  return (
    <div>
        Home Page
    </div>
  )
}

export default Home