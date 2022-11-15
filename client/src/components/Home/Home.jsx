import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCreated, filterByType, getAllPokemons, getTypes, orderByAttack, orderByName } from '../../redux/actions';
import './Home.css';
import Nav from '../Nav/Nav.jsx';
import Card from '../Card/Card.jsx';
import Pagination from '../Pagination/Pagination.jsx';


export default function Home () {


    // pagination elements:
    const pokemons = useSelector(state => state.pokemons);
    const [ pokemonsPerPage ] = useState(12);
    const [ currentPage, setCurrentPage ] = useState(1);
    const last = currentPage * pokemonsPerPage;
    const first = last - pokemonsPerPage;
    const currentPokemons = pokemons.slice(first, last);
    // const pages = Math.ceil(pokemons.length / pokemonsPerPage);
    const pagination = (numberPage) => setCurrentPage(numberPage);

    //filtering & ordering:

    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const [order, setOrder] = useState('');

    useEffect(() => {
        dispatch(getAllPokemons());
        dispatch(getTypes());
    }, [])

    // filtering:

    const handleFilterByType = (event) => {
        dispatch(filterByType(event.target.value))
        setCurrentPage(1);
    }

    const handleFilterByCreated = (event) => {
        dispatch(filterByCreated(event.target.value))
        setCurrentPage(1);
    }

    // ordering:

    const handleOrderByName = (event) => {
        dispatch(orderByName(event.target.value));
        setOrder(event.target.value);
        setCurrentPage(1);
    }

    const handleOrderByAttack = (event) => {
        dispatch(orderByAttack(event.target.value));
        setOrder(event.target.value);
        setCurrentPage(1);
    }

    const handleReset = (event) => {
        event.preventDefault();
        dispatch(getTypes());
        dispatch(getAllPokemons());
        document.getElementById('order').value = 'order';
        document.getElementById('attack').value = 'attack';
        document.getElementById('created').value = 'all';
        document.getElementById('types').value = 'type';
        setCurrentPage(1);
        alert('Loading...');
    }


    return (
        <section>
            <Nav/>

            <div className='filters'>
                <select id='order' onChange={(event) => handleOrderByName(event)}>
                    <option value="order">Select the order</option>
                    <option value="A-Z">A - Z</option>
                    <option value="Z-A">Z - A</option>
                </select>
                <select id='attack' onChange={(event) => handleOrderByAttack(event)}>
                    <option value="attack">Order by attack</option>
                    <option value="min">Min</option>
                    <option value="max">Max</option>
                </select>
            </div>
            <div className='order'>
                <select id='types' onChange={(event) => handleFilterByType(event)}>
                    <option value="type">Select the type</option>
                    <option value="All">All</option>
                    {types.map((type) => {
                        return <option key={type.id} value={type.name}>{type.name}</option>
                    })}
                </select>
                <select id='created' onChange={(event) => handleFilterByCreated(event)}>
                    <option value="All">All</option>
                    <option value="created">Customized</option>
                    <option value="not-created">Not Customized</option>
                </select>
            </div>
            <div>
                <button type='submit' className='reset-button' onClick={(event) => handleReset(event)}>Reset</button>
            </div>

            {currentPokemons.length > 0 && pokemons.length > 12 ? 
            <Pagination pokemonsPerPage={pokemonsPerPage} pokemons={pokemons.length} pagination={pagination} currentPage={currentPage}/> : 
            null }
            <div className='pokemons-grid'>
                    {
                        pokemons.map((pokemon) => {
                            return (
                            <Card
                            id={pokemon.id}
                            name={pokemon.name}
                            attack={pokemon.attack}
                            img={pokemon.imgUrl}
                            key={pokemon.id}
                            types={pokemon.types}
                            />)
                        })
                    }
            </div>
        </section>
    );
};