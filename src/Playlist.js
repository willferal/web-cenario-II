import React from "react";
import "./Playlist.css"
import { Link } from "react-router-dom";
import playlists from "./Playlists.json"

const Playlist = props => {

    const list_playlists = playlists.map(
        (p) => 
            <li>

                <Link to={"/SelectedPlaylist/"+p.id}>
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