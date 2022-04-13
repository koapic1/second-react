import { Link } from "react-router-dom";

export default function Movie({ info }) {
    //console.log(info);
    //https://image.tmdb.org/t/p/w200
    //id 값을 받아서
    return (
        <li>
            <Link to={`/detail/${info.id}`}>
                <div className="imgBox">
                    <img src={`https://image.tmdb.org/t/p/w200/${info.poster_path}`} alt="" />
                    <p className="point">{info.vote_average}</p>
                </div>
                <div className="info">
                    <div className="titleBox">
                        <h3>{info.title}</h3>
                        <p>{info.original_title}</p>
                        <p className="date">{info.release_date}</p>
                    </div>
                    <div className="overview">
                        <p>{info.overview}</p>
                    </div>
                    <div className="vote">{/* <p>{info.vote_count}</p> */}</div>
                </div>
            </Link>
        </li>
    );
}
