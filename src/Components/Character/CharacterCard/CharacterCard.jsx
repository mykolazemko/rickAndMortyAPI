import React, { useState, useEffect } from 'react';
import './character-card.scss'

const CharacterCard = ({ characterId, url }) => {
    const [character, setCharacter] = useState([])
    const renderCharacter = async () => {
        let r = await fetch(`${url}/${characterId}`)
        let api = await r.json();
        setCharacter(api);
    }
    useEffect(() => {
        renderCharacter()
    }, [character]);    
    return (
        <div className="character-card">
            <img alt='' className="character-card__avatar" src={character.image} />
            <span className="character-card__info">
                <p><b>name:</b> {character.name}</p>
                <p><b>id:</b> {character.id}</p>
                <p><b>status:</b> {character.status}</p>
                <p><b>species:</b> {character.species}</p>
                <p><b>gender:</b> {character.gender}</p>
                <p><b>created:</b> {character.created}</p>
            </span>
        </div>
    )
}

export default CharacterCard