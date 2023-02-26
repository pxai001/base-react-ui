import './App.css';
import '@icon-park/react/styles/index.css';
import {HashRouter} from "react-router-dom";
import Home from "./page/home/Home";

function App() {
    return (
        <div>
            <HashRouter>
               <Home/>
            </HashRouter>
        </div>
    );
}

export default App;
