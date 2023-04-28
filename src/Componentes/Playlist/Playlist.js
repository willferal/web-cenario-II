import React from "react";
import "./Playlist.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Playlist = ({ usuario }) => {

    var list_playlists;

    const [playlists, setPlaylists] = useState([])

    if (usuario) {
        axios.get(`http://localhost:3001/usuarios/${usuario.id}`)
            .then(response => {
                setPlaylists(response.data.playlists)
            })
    } else {
        axios.get("http://localhost:3001/playlists")
            .then(function (response) {
                setPlaylists(response.data);
        })
    }


    list_playlists = playlists.map(
        (p) =>
            <li>
                <Link to={"/SelectedPlaylist/" + p.id}>
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
                    <div className="row rowcenter">

                        <div className="col-sm-12">
                            <ul className="rowcenter">
                                {usuario && <li>
                                    <Link to="/NewPlaylist">
                                        <div className="play well well-sm">
                                            <img className="add" src="/assets/images/add.png" alt="add" />
                                            <h4>Nova Playlist</h4>
                                        </div>
                                    </Link>
                                </li>}
                                {list_playlists}
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div >
    )
}

export default Playlist