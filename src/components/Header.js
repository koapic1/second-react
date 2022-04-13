import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    //const title = "Movie App";
    // Hook, Component, 데이터 전달, 화면랜더링()
    //console.log(useState());
    const [title, setTitle] = useState("Movie App");
    // const list = [
    //     { name: "one", nickName: "oonneee" },
    //     { name: "장혁", nickName: "혁장" },
    //     { name: "장성호", nickName: "짱난다" },
    //     { name: "오징어", nickName: "문어" },
    // ];
    // list.map(function (item, idx) {
    //     console.log(item.name, "===", idx.nickName);
    // });
    return (
        <>
            <header id="header" className="header">
                <h1>
                    <Link to="/">{title}</Link>
                </h1>
                <div id="search">
                    <input type="text" />
                    <button>Search</button>
                </div>
            </header>
            {/* <ul>
                {list.map(function (item, idx) {
                    return (
                        <li>
                            <span>{item.name} </span>
                            <span>{item.nickName} </span>
                        </li>
                    );
                })}
            </ul> */}
            {/* <button
                onClick={function () {
                    setTitle(title === "Movie App" ? "MOOOOOVIEE APPP" : "Movie App");
                }}
            >
                title change
            </button> */}
        </>
    );
}
export default Header;
