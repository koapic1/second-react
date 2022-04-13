import { useState, useEffect } from "react";
// life cycle (component)  mount -> update -> unmount
export default function Effect() {
    const [count, setCount] = useState(100);
    const [name, setName] = useState("원");
    // useEffect(function () {
    //     // 화면이 갱신 될때마다 실행되는 함수
    //     console.log("나는 화면이 랜더링되면 호출되는 함수");
    // }, []); // 함수뒤에 빈 배열을 던지면 초기 한번만 호출
    useEffect(
        function () {
            console.log("나는 name이 바뀌면 호출되는 함수");
            return function () {
                // cleal up 함수
                console.log("나는 화면에서 사라질때 호출되는 함수");
            };
        },
        [name] // 배열에 변수를 던지면 해당 변수가 화면에 바뀔때만 호출됨. 배열안에 , 를 사용해 여러개의 변수를 던질 수 있음.
    );
    useEffect(
        function () {
            console.log("나는 count가 바뀌면 호출되는 함수");
        },
        [count] // 변수가 다르면 중복으로도 사용 가능
    );
    return (
        <div>
            <span style={{ fontSize: "30px", color: "white" }}>{count}</span>
            <button
                onClick={function () {
                    setCount(count + 1);
                    console.log(count);
                }}
            >
                count update
            </button>
            <hr />
            <input
                type="text"
                value={name}
                onChange={function (e) {
                    setName(e.target.value);
                    console.log(name);
                }}
            />
        </div>
    );
}
