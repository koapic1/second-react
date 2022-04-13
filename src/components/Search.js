import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    return (
        <div id="search">
            <input
                type="text"
                placeholder="Search Movie"
                value={search}
                onChange={function (e) {
                    setSearch(e.target.value);
                    console.log(search);
                }}
                onKeyDown={function (e) {
                    if (e.key === "Enter") {
                        navigate(`/search?movie=${search}`);
                    }
                }}
            />
            <Link to={`/search?movie=${search}`}>SEARCH</Link>
        </div>
    );
}
