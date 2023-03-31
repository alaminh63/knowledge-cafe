import { useState } from "react";
import Blog from "./components/Blogs/Blog";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sitebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App max-w-[1200px] mx-auto">
      <div className="header">
        <Header></Header>
      </div>
      <div className="main grid grid-cols-1 md:grid-cols-3">
        <div className="card col-span-2">
          <Blog></Blog>
        </div>
        <div className="blogs col-span-1">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
