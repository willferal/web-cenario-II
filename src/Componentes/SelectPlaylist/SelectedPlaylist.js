import React from "react";
import { useRef } from 'react';
import "./SelectedPlaylist.css";
import { useParams } from "react-router-dom";
import dados from "../../dados.json";
import Player from "../Player/Player";
import axios from "axios";
import { useState } from "react";

const SelectedPlaylist = props => {
    var musicId = null; // endereço dentro do vetor musicas da playlist
    const audio = useRef(null);
    const title = useRef(null);
    const { id } = useParams();
    var playMusic;
    var play = dados.playlists.find(p => p.id === id)


    // const [play, setPlay] = useState("")
    // axios.get(`http://localhost:3001/playlists?id=${id}`)
    //     .then(function (response) {
    //         setPlay(response.data);
    //     })

    playMusic = play.musicas.map((m) =>
        <tr>
            <div id={m.nome} className="music" onClick={e => tocar(m.id)}>
                <img className="playButton" src="/assets/images/play.png"></img>
                <h6>{m.nome}</h6>
            </div>
        </tr>
    )


    function tocar(id) {

        var musica = null

        for (var i = 0; i < play.musicas.length; i++) {
            let music = play.musicas[i]
            if (music.id == id) {
                document.getElementById(music.nome).style.backgroundColor = "darkgray"
                musica = music
                musicId = i
            } else {
                document.getElementById(music.nome).style.backgroundColor = "#2a3b5b"
            }
        }
        if (musica != null) {
            title.current.innerHTML = musica.nome

            audio.current.src = musica.audio
            audio.current.play()
            audio.current.onended = function () {
                passar(1)
            }
        }
    }

    function passar(i) {

        if (musicId != null) {
            var prox_musica = play.musicas[musicId + i]
            if (prox_musica != null) {
                musicId = prox_musica.id
                console.log(musicId)
                tocar(musicId)
            }
        }
    }

    return (
        <div className="baixa container-fluid">
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


                </div>
            </div>
            {Player(audio, title, passar)}
        </div>

    )
}

export default SelectedPlaylist;