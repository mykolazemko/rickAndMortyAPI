import {useEffect} from 'react';
import Header from './Components/Header/Header';
import Character from './Components/Character/Character';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    useEffect(() => {
        document.title = "Rick & Morty API"
     }, []);
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Character />
            </div>
        </BrowserRouter>

    );
}

export default App;
