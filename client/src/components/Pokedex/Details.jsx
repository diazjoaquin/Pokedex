import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePokemon, getPokemonDetail, clearDetail } from '../../redux/actions/index.js';
import './Details.css';
import Nav from "../Nav/Nav.jsx";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import ProgressBar from "@ramonak/react-progress-bar";


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
            <div className="mother-cont">
                <div className="detail-cont">
                    <div className="left">
                        <h2>{detail.name}</h2>
                        <span className="pokemon-img-cont"><img src={detail.imgUrl} alt=""/></span>
                        <div className="type-cont">{detail.types?.map((type) => {
                            return <span id="icon" className={type} key={type + id}><img src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type}.svg`} alt=""/></span>;
                            })
                        }
                        </div>
                    </div>
                    <div className="stats-cont">
                        <div>HP: </div><ProgressBar completed={(detail.hp)} maxCompleted={400} height="25px" bgColor="#F00400" className="stat"/>
                        <div>Attack: </div><ProgressBar completed={(detail.attack)} maxCompleted={350} height="25px" bgColor="#FAA016" className="stat"/>
                        <div>Defense: </div><ProgressBar completed={(detail.defense)} maxCompleted={400} height="25px" bgColor="#F0D11F" className="stat"/>
                        <div>Speed: </div><ProgressBar completed={(detail.speed)} maxCompleted={100} height="25px" bgColor="#FC0D88" className="stat"/>
                        <div>Height: </div><ProgressBar completed={(detail.height)} maxCompleted={150} height="25px" bgColor="#7B37DB" className="stat"/>
                        <div>Weight: </div><ProgressBar completed={(detail.weight)} maxCompleted={300} height="25px" bgColor="#AB2DFC" className="stat"/>
                    </div>
                    { detail.custom ? <div className="delete-cont"><button className="delete-button" onClick={(e) => handleDelete(e)}>delete</button></div> : null}
                </div>
            </div>
            <Footer/>
        </section>
        )
}
