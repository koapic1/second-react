import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import SearchResult from "./components/SearchResult";
// import Effect from "./components/Effect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter basename="/movie">
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Contents />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/search" element={<SearchResult />} />
                    {/* <Contents />
                    <Detail /> */}
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
