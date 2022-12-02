import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePokemon, getPokemonDetail, clearDetail } from '../../redux/actions/index.js';
import './Details.css';
import Nav from "../Nav/Nav.jsx";
import { Link, useHistory } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

export default function Details (props) {

    const id = props.match.params.id;
    const dispatch = useDispatch();
    const detail = useSelector(state => state.pokemonDetail);
    const history = useHistory();


    useEffect(() => {
        dispatch(getPokemonDetail(id))
        return () => {dispatch(clearDetail())}
    }, [dispatch, id])

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deletePokemon(id));
        alert("Pokemon deleted");
        history.push("/home");
    }
    
    return (
        <section className="details-section">
            <Nav/>
            <Link to={'/home'}>
                <div className="back-home-container"><button className="back-home-butt">Back Home</button></div>
            </Link>
            <div className="mother-cont">
                <div className="detail-cont">
                    <h2>{detail.name}</h2>
                    <span className="pokemon-img-cont"><img src={detail.imgUrl} alt=""/></span>
                    <div className="type-cont">{detail.types?.map((type) => {
                                switch(type){
                                    case "normal":
                                        return <span key={type + id}><img className="normal" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/1024px-Pok%C3%A9mon_Normal_Type_Icon.svg.png" alt=""/></span>;
                                        case "fighting":    
                                        return <span key={type + id}><img className="fighting" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/1024px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png" alt=""/></span>;
                                    case "flying":
                                        return <span key={type + id}><img className="flying" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/1024px-Pok%C3%A9mon_Flying_Type_Icon.svg.png" alt=""/></span>;
                                    case "poison":
                                        return <span key={type + id}><img className="poison" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/1024px-Pok%C3%A9mon_Poison_Type_Icon.svg.png" alt=""/></span>;
                                    case "ground":
                                        return <span key={type + id}><img className="ground" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/1024px-Pok%C3%A9mon_Ground_Type_Icon.svg.png" alt=""/></span>;
                                    case "rock":
                                        return <span key={type + id}><img className="rock" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/1024px-Pok%C3%A9mon_Rock_Type_Icon.svg.png" alt=""/></span>;
                                    case "bug":
                                        return <span key={type + id}><img className="bug" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/1024px-Pok%C3%A9mon_Bug_Type_Icon.svg.png" alt=""/></span>;
                                    case "ghost":
                                        return <span key={type + id}><img className="ghost" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/1024px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png" alt=""/></span>;
                                    case "steel":
                                        return <span key={type + id}><img className="steel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/1024px-Pok%C3%A9mon_Steel_Type_Icon.svg.png" alt=""/></span>;
                                    case "fire":
                                        return <span key={type + id}><img  className="fire" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1024px-Pok%C3%A9mon_Fire_Type_Icon.svg.png" alt=""/></span>;
                                    case "water":
                                        return <span key={type + id}><img className="water" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1024px-Pok%C3%A9mon_Water_Type_Icon.svg.png" alt=""/></span>;
                                    case "grass":
                                        return <span key={type + id}><img className="grass" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/1024px-Pok%C3%A9mon_Grass_Type_Icon.svg.png" alt=""/></span>;
                                    case "electric":
                                        return <span key={type + id}><img className="electric" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png" alt=""/></span>;
                                    case "psychic":
                                        return <span key={type + id}><img className="psychic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/1024px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png" alt=""/></span>;
                                    case "ice":
                                        return <span key={type + id}><img className="ice" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/1024px-Pok%C3%A9mon_Ice_Type_Icon.svg.png" alt=""/></span>;
                                    case "dragon":
                                        return <span key={type + id}><img className="dragon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/1024px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png" alt=""/></span>;
                                    case "dark":
                                        return <span key={type + id}><img className="dark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/1024px-Pok%C3%A9mon_Dark_Type_Icon.svg.png" alt=""/></span>;
                                    case "fairy":   
                                        return <span key={type + id}><img className="fairy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/1024px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png" alt=""/></span>;
                                    default:
                                        return null;
                                }
                            })
                        }
                    </div>
                    <div className="stats-cont">
                        <div className="heart">HP: {detail.hp}</div>
                        <div className="attack">ATTACK: {detail.attack}</div>
                        <div className="defense">DEFENSE: {detail.defense}</div>
                        <div className="speed">SPEED: {detail.speed}</div>
                        <div className="height">HEIGHT: {detail.height}</div>
                        <div className="weight">WEIGHT: {detail.weight}</div>
                    </div>
                    { detail.custom ? <div className="delete-cont"><button className="delete-button" onClick={(e) => handleDelete(e)}>delete</button></div> : null}
                </div>
            </div>
            <Footer/>
        </section>
        )
}
