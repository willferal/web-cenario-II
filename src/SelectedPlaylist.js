import React from "react";
import "./SelectedPlaylist.css";
import { useParams } from "react-router-dom";
import playlists from "./Playlists.json"

const SelectedPlaylist = props => {
    function tocar(id){
        var a = document.getElementById('audio')
        var title = document.getElementById('title')
        var musica  = play.musicas.find(i => i.id == id)
        title.innerHTML = musica.nome
        console.log(musica.id+" "+musica.audio)
        a.src = musica.audio
        a.play()
    }
    
    
    
    const {id} = useParams();

    const play = playlists.find(p => p.id == id);
    const playMusic = play.musicas.map((m)=>
    
        <tr>
            <div className="music" onClick={e =>  tocar(m.id)}>
                <img className="playButton" src="/assets/images/play.png"></img>
                <h6>{m.nome}</h6>
            </div>
        </tr>
    
    )

    return(
        <div className="container-fluid">
            <div className="col-sm-2"></div>
                <div className="interface col-sm-8 well well-md">
                    <div className="row">
                        <img className="playlists" src={play.capa} alt={play.nome}></img>
                        <h3>{play.nome}</h3>
                    </div>
                    <div className="row">
                        <table className="album-list">
                            <tbody>
                                {playMusic}
                            </tbody>
                        </table>
                        <div className="playMusic">
                            <h3 id="title">    </h3>
                            <audio id="audio" preload="preload" controls>
                                <source src="" />
                            </audio>
                        </div>
                        
                    </div>
                </div>
        </div>

    )
}

export default SelectedPlaylist;