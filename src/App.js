import "./App.css";
import IndexComponent from "./pages/IndexComponent";
import Result from './pages/Result';
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
    <Routes>
      <Route path = '/' element = {<IndexComponent/>} />
      <Route path = '/result' element = {<Result/>} />
    </Routes>
    );
}

export default App;
