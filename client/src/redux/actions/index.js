import axios from 'axios';
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMON_BYNAME = 'GET_POKEMON_BYNAME';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';
export const GET_TYPES = 'GET_TYPES';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const FILTER_BY_CREATED = 'FILTER_BY_CREATED';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_ATTACK = 'ORDER_BY_ATTACK';
export const DELETE_POKEMON = 'DELETE_POKEMON';


export const getAllPokemons = () => async dispatch => {
    try {
        const getPokemons = await axios.get('http://localhost:3001/pokemons');
            return dispatch({
                type: GET_ALL_POKEMONS,
                payload: getPokemons.data
            }); 
        // return await axios.get('http://localhost:3001/pokemons').then(response => dispatch({
        //     type: GET_ALL_POKEMONS,
        //     payload: response.data
        // }))
    } catch (error) { 
        throw new Error ("Cannot get all the pokemons");
    }
};

export const getPokemonByName = (name) => async dispatch => {
    const getPokemonsByName = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
    return dispatch({
        type: GET_POKEMON_BYNAME,
        payload: getPokemonsByName.data
    });
};

export const getPokemonDetail = (id) => async dispatch => {
    try {
        const details = await axios.get(`http://localhost:3001/pokemons/${id}`);
        return dispatch({
            type: GET_POKEMON_DETAIL,
            payload: details.data
        });
        // return await axios.get(`http://localhost:3001/pokemons/${id}`)
        // .then(response => dispatch({
        //     type: GET_POKEMON_DETAIL,
        //     payload: response.data
        // }))
    } catch (error) {
        throw new Error ("cannot get details");
    }
};

export const getTypes = () => async dispatch => {
    try { 
        const getType = await axios.get('http://localhost:3001/types');
        return dispatch({
            type: GET_TYPES,
            payload: getType.data
        });
        // return await axios.get('http://localhost:3001/types')
        // .then(response => dispatch({
        //     type: GET_TYPES,
        //     payload: response.data
        // }))
    } catch (error) {
        throw new Error ("Cannot get all types");
    }
};

export const createPokemon = (form) => async dispatch => {
try {
    await axios.post('http://localhost:3001/pokemons', form)
    return dispatch({
        type: CREATE_POKEMON
    })
} catch (error) {
        throw new Error ("cannot create pokemon");
    }
};

export const deletePokemon = (id) => async dispatch => {
    try {
        await axios.delete(`http://localhost:3001/pokemons/${id}`);
        return dispatch({
            type: DELETE_POKEMON
        })
    } catch (error) {
        throw new Error ("Cannot delete pokemon");
    }
};

export const filterByType = (payload) => dispatch => {
    return dispatch({
        type: FILTER_BY_TYPE,
        payload
    })
};

export const filterByCreated = (payload) => dispatch => {
    return dispatch({
        type: FILTER_BY_CREATED,
        payload
    })
};

export const orderByAttack = (payload) => dispatch => {
    return dispatch({
        type: ORDER_BY_ATTACK,
        payload
    })
};


export const orderByName = (payload) => dispatch => {
    return dispatch({
        type: ORDER_BY_NAME,
        payload
    })
}