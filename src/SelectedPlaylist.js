import React from "react";
import "./SelectedPlaylist.css";
import { useParams } from "react-router-dom";
import playlists from "./Playlists.json"

const SelectedPlaylist = props => {
    var musicId = null

    function tocar(id){
        
        var musica = null
        
        for(var i = 0;i<play.musicas.length;i++){
            let music = play.musicas[i]
            if(music.id == id){
                document.getElementById(music.nome).style.backgroundColor = "darkgray"
                musica = music
                musicId = id
            }else{
                document.getElementById(music.nome).style.backgroundColor = "#2a3b5b"
            }
        }
        if(musica != null){
            var a = document.getElementById('audio')
            var title = document.getElementById('title')
            
            title.innerHTML = musica.nome

            a.src = musica.audio
            a.play()
            a.onended = function(){
                tocar(id+1)
            }
        }
    }
    
    function passa(i){
        if(musicId != null){
            musicId+=i
            tocar(musicId)
        }
    }

    const {id} = useParams();

    const play = playlists.find(p => p.id == id);
    const playMusic = play.musicas.map((m)=>
    
        <tr>
            <div id={m.nome} className="music" onClick={e =>  tocar(m.id)}>
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
                            <h3 id="title">...</h3>
                            <img className="butao" src="/assets/images/left.png" onClick={e => passa(-1)}></img>
                            <audio id="audio" preload="preload" controls>
                                <source src="" />
                            </audio>
                            <img className="butao" src="/assets/images/right.png" onClick={e => passa(1)}></img>
                        </div>
                        
                    </div>
                </div>
        </div>

    )
}

export default SelectedPlaylist;