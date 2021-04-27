import React, { useState } from 'react'
import { observer } from 'mobx-react';
import store from '../../Store/store';
import './header.scss'
import { Link } from 'react-router-dom';


const Header = observer(() => {
    const { url, characterName, setSearchValue, renderCharacter } = store;
    const [character, setCharacter] = useState([]);
    const render = async() => {
        let r = await fetch(`${url}?name=${characterName}`)
        let api = await r.json();
        setCharacter(api.results);
        console.log(api.results)
        console.log(character)
    }
    return(
        <div className='header'>
            <Link style={{ textDecoration: 'none' }} to="/">
                <span className='header__logo'>
                    <h3>Characters</h3>
                </span>
            </Link>
            <input placeholder='Enter Character Name' value={store.characterName} onChange={setSearchValue}></input>
            <button onClick={render}>Search</button>
        </div>
    )
})

export default Header