import React from "react";
import { Link } from "react-router-dom";
import './Card.css';


export default function Card ({id, name, types, img}) {

    return (
        <Link to={`/details/${id}`}>
            <div className="card-cont">
                <div className="id-cont" key={id}><h3>{id}</h3><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" alt=""/></div>
                <div className="name-cont"><h3 className="card-name">{name}</h3></div>
                <div className="img-cont"><img src={img} alt="imagen"/></div>
                <div className="types-cont">
                    {
                        types?.map((type) => {
                            // return <div className="type-cont"><img src={`${type}.png`}/></div>;
                            switch(type){
                                case "normal":
                                    return <span key={type + id}><img className="normal" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/1024px-Pok%C3%A9mon_Normal_Type_Icon.svg.png" alt="NF"/></span>;
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
                                    return <span key={type + id}><img className="fire" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1024px-Pok%C3%A9mon_Fire_Type_Icon.svg.png" alt=""/></span>;
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
            </div>
        </Link>
    )
}