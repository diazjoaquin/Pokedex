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
                        return <span id="icon" className={type} key={type + id}><img src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type}.svg`} alt=""/></span>;
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
