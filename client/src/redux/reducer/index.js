import { CREATE_POKEMON, FILTER_BY_CREATED, FILTER_BY_TYPE, GET_ALL_POKEMONS, GET_POKEMON_BYNAME, GET_POKEMON_DETAIL, GET_TYPES, ORDER_BY_ATTACK, ORDER_BY_NAME } from "../actions";

const initialState = {
    pokemons: [],
    filtered: [],
    pokemonDetail: {},
    types: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            };
        case GET_POKEMON_BYNAME:
            return {
                ...state,
                pokemons: state.pokemons.filter((pokemon) => pokemon.name === action.payload.name)
            };
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
            };
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            };
        case CREATE_POKEMON:
            return {
                ...state
            };
        case FILTER_BY_TYPE:
            // state.pokemons.types.map(type => type.name)
            let byType = state.pokemons?.filter((pokemon) => pokemon.types.map((type) => type.name)?.includes(action.payload) || pokemon.types.includes(action.payload));
            if (action.payload === 'all') byType = state.pokemons;
            return {
                ...state,
                pokemons: byType
            };
        case FILTER_BY_CREATED:
            let byCreated = action.payload === 'created' ? state.pokemons.filter(pokemon => pokemon.custom === true) : state.pokemons.filter(pokemon => pokemon.custom === false);
            if (!byCreated.length) return alert ('Pokemons not founded');
            if (action.payload === 'all') byCreated = state.pokemons;
            return {
                ...state,
                pokemons: byCreated
            };
        case ORDER_BY_NAME:
            const byName = action.payload === 'A-Z' ? state.pokemons.sort((a,b) => {
                if(a.name > b.name) return 1
                if(a.name < b.name) return -1
                return 0
            }) : state.pokemons.sort((a,b) => {
                if(a.name < b.name) return 1
                if(a.name > b.name) return -1
                return 0
            });
            return {
                ...state,
                pokemons: byName
            };
        case ORDER_BY_ATTACK:
            const byAttack = action.payload === 'min' ? state.pokemons.sort((a,b) => {
                return a.attack - b.attack
            }) : state.pokemons.sort((a,b) => {
                return b.attack - a.attack
            });
            return {
                ...state,
                pokemons: byAttack
            }
                default:
            return {...state};
    }
}

export default rootReducer;