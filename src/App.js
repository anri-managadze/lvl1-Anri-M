import './App.css';
import Logo from "./component/Logo";
import './itunes/style.css';
import Search from "./itunes/Search";
import Nav from "./component/Nav";
import Itunes from "./itunes/itunes";
import {useState} from "react";

function App() {
    const [query,setQuery]=useState('m');
  return (
    <div>
        <header>
            <Logo />
            <Search search={query} onSubmit={(newQuery)=>{setQuery(newQuery)}} />
        </header>
        <main>
            <div>
                <Nav />
            </div>
            <div>
                <Itunes search={query}/>
            </div>
        </main>
    </div>
  );
}

export default App;
