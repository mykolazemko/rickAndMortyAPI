import './characters.scss'
import { Link } from 'react-router-dom';

const Characters = ({ character, ...props }) => {

    const handleClick = (id) => {
        props.handleCharacterId(id)
    }
  
    let name = character.map((ch) =>
        <Link style={{ textDecoration: 'none' }} onClick={() => handleClick(ch.id)} to={`/${ch.id}`}>
            <div className="char-card" key={ch.id}>
                <img alt='' className="char-card__avatar" src={ch.image} />
                <p className="char-card__name">{ch.name}</p>
            </div>
        </Link>
    );
    return (
        <div className="container">
            {name}
        </div>
    )
}

export default Characters