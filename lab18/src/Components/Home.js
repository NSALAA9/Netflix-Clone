/*import axios from 'axios';
import { useEffect, useState } from 'react'
import MovieList from './MovieList';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';



function Home() {

    const [movieData, setMovieData] = useState([])

    const getTrendingMovies = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;

        fetch(serverURL)
         .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setMovieData(data);

                })
            })
    }


    useEffect(()=>{
        getTrendingMovies()
    },[])

    return (
        <>
        
        <MovieList dataInHome={movieData}/>
        </>
    );
}

export default Home;*/







import { useEffect, useState } from 'react';
import MovieList from './MovieList';

function Home() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const serverURL = `${process.env.REACT_APP_serverURL}/trending`;
      const response = await fetch(serverURL);
      const data = await response.json();
      setMovieData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MovieList dataInHome={movieData} />
    </>
  );
}

export default Home;


