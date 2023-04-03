import React from "react";
import "./Playlist.css"
import { Link } from "react-router-dom";

import Angra from "./assets/images/angra.png";
import A7x from "./assets/images/a7x.png";
import Racionais from "./assets/images/racionais.jpg";
// import playlists from "./Playlists.json"

const playlists = [{
    nome: "Racionais",
    capa: Racionais,
    musicas: ["nome"]
},
{
    nome: "a7x",
    capa: A7x,
    musicas: ["nome"]
},
{
    nome: "angra",
    capa: Angra,
    musicas: ["nome"]
}]

const Playlist = props => {

    const list_playlists = playlists.map(
        (p) => 
            <li>

                <Link to="/SelectedPlaylistAngra">
                    <div className="play well well-sm">
                        <img className="playlists" src={p.capa} alt={p.nome} />
                        <h4>{p.nome}</h4>
                    </div>
                </Link>
            </li>
    )

    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="interface col-sm-8 well well-md">
                    <div className="row">
                        <h1>Playlist</h1>
                    </div>
                    <div className="row" id="rowcenter">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-7">
                            <ul>
                                {list_playlists}
                            </ul>
                        </div>

                    </div>
                    <div className="col-sm-2"></div>
                </div>

            </div>
        </div >
    )
}

export default Playlist