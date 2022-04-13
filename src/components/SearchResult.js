import axios from "axios";
import qs from "qs";
import Movie from "./Movie";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchResult() {
    const location = useLocation();
    console.log(location.search);
    const [movies, setMovies] = useState([]);
    const query = qs.parse(location.search, { ignoreQueryPrefix: true }).movie;
    console.log(query);
    useEffect(function () {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=ko-KR&page=1`).then(function (res) {
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
        </div>
    );
}
