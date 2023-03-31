import { useState } from "react";
import Blog from "./components/Blogs/Blog";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sitebar/Sidebar";

function App() {
  const [readTime, setReadTime] = useState(0);
  const [bookMarkItems, setBookMarkItems] = useState([]);
  return (
    <div className="App max-w-[1300px] mx-auto">
      <div className="header">
        <Header></Header>
      </div>
      <div className="main grid grid-cols-1 md:grid-cols-3">
        <div className="card col-span-2 w-11/12">
          <Blog
            readTime={readTime}
            setReadTime={setReadTime}
            bookMarkItems={bookMarkItems}
            setBookMarkItems={setBookMarkItems}
          ></Blog>
        </div>
        <div className="blogs col-span-1 pr-8">
          <Sidebar readTime={readTime} bookMarkItems={bookMarkItems}></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
