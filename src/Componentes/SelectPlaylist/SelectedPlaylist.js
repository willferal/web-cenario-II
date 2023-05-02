import React from "react";
import { useRef } from 'react';
import "./SelectedPlaylist.css";
import { useParams } from "react-router-dom";
// import dados from "../../dados.json";
import Player from "../Player/Player";
import axios from "axios";
import { useState } from "react";
import { useNavigate , Link} from 'react-router-dom';





const SelectedPlaylist = ({ usuario, setUsuario }) => {
    const navigate = useNavigate();
    const audio = useRef(null);
    const title = useRef(null);
    const { id } = useParams();
    var playMusic;
    // var play = dados.playlists.find(p => p.id === id)

    const [musicas, setMusicas] = useState([])
    const [play, setPlay] = useState([])
    const [prevID, setPrevID] = useState();
    const [compMusic, setCompMusic] = useState();

    if (musicas.length == 0) {
        if (usuario) {
            axios.get(`http://localhost:3001/usuarios/${usuario.id}`).then(response => {
                var user = response.data
                let playlist = user.playlists[id]
                setPlay(playlist)
                setMusicas(playlist.musicas)
            })
        } else {
            axios.get(`http://localhost:3001/playlists?id=${id}`)
                .then(function (response) {
                    setPlay(response.data[0]);
                    setMusicas(response.data[0].musicas)
                })
        }
    }



    playMusic = musicas.map((m, index) =>
        <tr>
            <div id={index} className="music" onClick={e => tocar(index)}>
                <img className="playButton" src="/assets/images/play.png" alt=""></img>
                <h6>{m.nome}</h6>
            </div>
        </tr>
    )


    function del() {
        var r = window.confirm("tem certeza que quer excluir?");
        if (r) {
            axios.get(`http://localhost:3001/usuarios/${usuario.id}`).then(response => {
                var user = response.data
                var playlists = user.playlists.filter(x => x.id !== play.id)
                var updatedUser = {
                    id: user.id,
                    userName: user.userName,
                    lastName: user.lastName,
                    email: user.email,
                    numCelular: user.numCelular,
                    password: user.password,
                    playlists: playlists
                }
                setUsuario(updatedUser)
                axios.put(`http://localhost:3001/usuarios/${usuario.id}`, updatedUser)
            })
            navigate('/playlist', { replace: true });
        }
    }

    function edit() {
        navigate('/EditPlaylist/' + id, { replace: true });
    }


    function tocar(id) {
        var musica;
        var compMusica = document.getElementById(id)

        if (compMusica) {
            if (compMusic) {
                compMusic.style.backgroundColor = "#2a3b5b"
            }
            setPrevID(id)
            setCompMusic(compMusica)
            compMusica.style.backgroundColor = "darkgray"
            musica = musicas[id]
            title.current.innerHTML = musica.nome
            audio.current.src = musica.audio
            audio.current.play()
            audio.current.onended = function () {
                passar(1, id)
            }
        }
    }

    function passar(i = 1, idMusic = null) {

        if (idMusic !== null) {
            setPrevID(idMusic)
            document.getElementById(idMusic).style.backgroundColor = "#2a3b5b"
            tocar(idMusic + i)
        } else if (prevID + i >= 0 || prevID < musicas.length) {
            tocar(prevID + i)
        }
    }

    return (
        <div className="baixa container-fluid">
            <div className="col-sm-2"></div>
            <div className="interface col-sm-8 well well-md">
            <div className="row"><Link className="backButton" to={"/Playlist"}>voltar</Link></div>
                <div className="row">
                    <img className="playlists" src={play.capa} alt={play.nome}></img>
                    <h3>{play.nome}</h3>
                    {usuario && <div className="row">
                        <button className="botaoDelEdit" onClick={del}>deletar</button>
                        <button className="botaoDelEdit" onClick={edit}>edit</button>
                    </div>}
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