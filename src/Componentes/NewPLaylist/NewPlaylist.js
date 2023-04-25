import React from "react";
import { useRef } from 'react';
import "./NewPlaylist.css";
import axios from "axios";
import dados from "../../dados.json";



const NewPlaylist = props => {
    var musicList = [] // playlist vazia
    var input = useRef(null)
    var musicas = dados.musicas;
    var showMusic;


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

    // axios.get("http://localhost:3001/musicas")//nao consigo carregar as infortmações no musicas
    //     .then(function (response) {
    //         console.log(response.data)
    //         musicas = response.data
    //         showMusic = musicas.map((m) =>
    //             <tr>
    //                 <div id={m.id} className="music" onClick={e => marcar(m.id)}>
    //                     <img className="playButton" src="/assets/images/play.png"></img>
    //                     <h6>{m.nome}</h6>
    //                 </div>
    //             </tr>
    //         )
    //     })

    var showMusic = musicas.map((m) =>
        <tr id={"tr-" + m.id}>
            <div id={m.id} className="music" onClick={e => marcar(m.id)}>
                <img className="playButton" src="/assets/images/play.png"></img>
                <h4 id={"n-" + m.id}>{m.nome}</h4>
                <h8 id={"a-" + m.id} className="autor">{m.autor}</h8>
            </div>
        </tr>
    )

    function marcar(id) {
        var inside = false
        var m = document.getElementById(id)
        var nm = document.getElementById("n-" + id)
        var am = document.getElementById("a-" + id)
        for (let i = 0; i < musicList.length; i++) {
            if (musicList[i].id == id) {
                musicList.splice(i, 1)
                inside = true
                m.style.backgroundColor = "#2a3b5b"
                nm.style.color = "beige"
                am.style.color = "beige"
            }
        }
        if (!inside) {
            musicList.push(musicas.find(m => m.id == id))
            m.style.backgroundColor = "beige"
            nm.style.color = "#1B263B"
            am.style.color = "#1B263B"
        }
        console.log(musicList)
    }

    function submit() {
        console.log("hahah")
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
                            <input id="nomePLay" type="text" placeholder="Digite aqui."></input>
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