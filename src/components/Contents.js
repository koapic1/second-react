import axios from "axios";
import Movie from "./Movie";
import { useState, useEffect } from "react";

export default function Contents() {
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(function () {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1`).then(function (res) {
            //console.log(res.data.results);
            setMovies(res.data.results);
        });
    }, []);
    return (
        <div id="contents" className="contents">
            <div className="container">
                <h2 className="subTitle">
                    popular <strong>movie</strong>
                </h2>
                <ul className="movieList">
                    {movies.map(function (item, idx) {
                        return <Movie info={item} key={idx} />;
                    })}
                </ul>
            </div>
            {/* <p>{count}</p>
            <button
                onClick={function () {
                    setCount(count + 1);
                }}
            >
                click
            </button> */}
        </div>
    );
}
