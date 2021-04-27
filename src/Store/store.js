import { action, makeObservable, observable } from 'mobx'


class state {
    constructor() {
        makeObservable(this)
    }
    @observable character;
    @observable url = "http://rickandmortyapi.com/api/character";   
    @observable characterName = "";

    @action setSearchValue = (e) => {
        e.preventDefault();
        this.characterName = e.target.value
    } 
    renderCharacter = async() => {
        let r = await fetch(`${this.url}?name=${this.characterName}`)
        let api = await r.json();
        this.character = await api.results;
        console.log(api.results)
        console.log(this.character)

    }
}

const store = new state();
export default store;