import React from "react";
import { useRef } from 'react';
import "./NewPlaylist.css";
import axios from "axios";
import { useState } from "react";

//obs: definir a logica de setar o id e a o album

const NewPlaylist = props => {
    //var musicList = [] // playlist vazia
    var input = useRef(null);
    var showMusic;

    const [musicas, setMusicas] = useState([]);
    const [novaPlaylist, setNovaPlaylist] = useState("");
    const [musicList, setMusicList] = useState([]);


    function procurar() {
        var text = input.current.value.toLowerCase()
        for (var i = 0; i < musicas.length; i++) {
            var m = musicas[i]
            if (m.nome.toLowerCase().includes(text) || m.autor.toLowerCase().includes(text)) {
                document.getElementById("tr-" + m.id).style.visibility = "visible"
            } else {
                document.getElementById("tr-" + m.id).style.visibility = "collapse"
            }
        }

    }

    axios.get("http://localhost:3001/musicas")
        .then(function (response) {
            setMusicas(response.data);
        }
        )

    showMusic = musicas.map((m) =>
        <tr id={"tr-" + m.id}>
            <div id={m.id} className="music" onClick={e => marcar(m.id)}>
                <img className="playButton" src="/assets/images/play.png" alt=""></img>
                <h4 id={"n-" + m.id}>{m.nome}</h4>
                <h8 id={"a-" + m.id} className="autor">{m.autor}</h8>
            </div>
        </tr>
    )

    function marcar(id) {
        // var inside = false
        var m = document.getElementById(id)
        var nm = document.getElementById("n-" + id)
        var am = document.getElementById("a-" + id)

        var music = musicList.find(x => x?.id === id)
        if (!music) {
            setMusicList([...musicList, musicas.find(x => x.id === id)])
            m.style.backgroundColor = "beige"
            nm.style.color = "#1B263B"
            am.style.color = "#1B263B"
        } else {
            setMusicList(musicList.filter(x => x.id !== id));
            m.style.backgroundColor = "#2a3b5b"
            nm.style.color = "beige"
            am.style.color = "beige"
        }
    }

    function submit(e) {
        e.preventDefault();
        console.log(musicList);
        axios.get(`http://localhost:3001/playlists?nome=${novaPlaylist}`)
            .then(response => {
                if (response.data[0] !== undefined) {
                    alert("a playlist com o nome de " + novaPlaylist + " ja existe!");
                    return;
                } else if (musicList.length === 0) {
                    alert("Nao tenho musicas para criar essa playlist");
                    return;
                } else if (novaPlaylist === "") {
                    alert("Digite um nome para sua playlist");
                    return;
                }
                
                axios.post(`http://localhost:3001/playlists`,{
                    id:"11",
                    nome:novaPlaylist,
                    capa:"/assets/images/logo_colorido_semFundo.png",
                    musicas:musicList
                })
            })

    }


    return (
        <div className="baixa container-fluid">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="interface col-sm-8 well well-md">
                    <div className="row">
                        <h3>Criar Playlist</h3>
                    </div>
                    <div className="row">
                        <form className="formPlay" onSubmit={submit}>
                            <h8 for="nomePLay">Nome da Playlist</h8><br />
                            <input id="nomePLay" type="text" onChange={e => setNovaPlaylist(e.target.value)} placeholder="Digite aqui."></input>
                            <input id="inputPlay" type="submit" value="Criar"></input>
                        </form>

                    </div>
                    <div className="row">
                        <div className="search well well-sm">
                            <h4 from="musicSearch">Procure uma música</h4><br />
                            <input ref={input} id="musicSearch" type="text" onInput={procurar} placeholder="Digite aqui."></input>
                        </div>
                    </div>
                    <div className="row">
                        <table className="album-list">
                            <tbody id="lista">
                                {showMusic}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">

            </div>
        </div>

    )


}

export default NewPlaylist