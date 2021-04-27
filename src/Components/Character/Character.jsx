import React, { useState, useEffect } from 'react';
import store from '../../Store/store';
import { observer } from 'mobx-react';
import Characters from './Characters/Characters'
import Pagination from './Pagination/Pagination';
import CharacterCard from './CharacterCard/CharacterCard'
import {Switch, Route } from 'react-router-dom';
import './character.scss'

const Character = observer ((props) => {
    const { url } = store;

    const [character, setCharacter] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [characterId, setCharacterId] = useState(1)
    const [page, setPage] = useState(1)
   
    const getCharacter = async () => {
        let r = await fetch(`${url}?page=${page}`)
        let api = await r.json();
        setCharacter(api.results);
    }

    const generatePages = async () => {
        let r = await fetch(url)
        let api = await r.json();
        setPageCount(api.info.pages)
    }
    const handlePage = (p) => {
        p < 1 || p > pageCount ? console.log('no-no-no') : setPage(p)
    }
    const handleCharacterId = (id) => {

        setCharacterId(id)
    }

    useEffect(() => {
        getCharacter()
        generatePages()
    }, [page]);
    const ch = character.map((ch) => <li>{ch}</li>);

    return (
        <div className="content">
            <Switch>
                <Route exact path="/">
                    <Characters character={character} handleCharacterId={handleCharacterId} />
                    <Pagination page={page} pageCount={pageCount} handlePage={handlePage} />
                </Route>
                <Route path={`/${characterId}`}>
                    <CharacterCard characterId={characterId} url={url} />
                </Route>
            </Switch>
        </div>

    )
})

export default Character