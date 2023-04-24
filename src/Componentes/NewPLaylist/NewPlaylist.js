import React from "react";
// import musicas from "../../musicas.json"
import "./NewPlaylist.css";
import axios from "axios";



const NewPlaylist = props => {
    var musicList = [] // playlist vazia

    var musicas = [];
    var showMusic;
    
    axios.get("http://localhost:3001/musicas")//nao consigo carregar as infortmações no musicas
        .then(function (response) {
            console.log(response.data)
            musicas = response.data
            showMusic = musicas.map((m) =>
                <tr>
                    <div id={m.id} className="music" onClick={e => marcar(m.id)}>
                        <img className="playButton" src="/assets/images/play.png"></img>
                        <h6>{m.nome}</h6>
                    </div>
                </tr>
            )
        })

        // var showMusic = musicas.map((m) =>
        //         <tr>
        //             <div id={m.id} className="music" onClick={e => marcar(m.id)}>
        //                 <img className="playButton" src="/assets/images/play.png"></img>
        //                 <h6>{m.nome}</h6>
        //             </div>
        //         </tr>
        //     )

    function marcar(id) {
        var inside = false
        var m = document.getElementById(id)
        for (let i = 0; i < musicList.length; i++) {
            if (musicList[i].id == id) {
                musicList.splice(i, 1)
                inside = true
                m.style.backgroundColor = "#2a3b5b"
            }
        }
        if (!inside) {
            musicList.push(musicas.find(m => m.id == id))
            m.style.backgroundColor = "darkgray"
        }
        console.log(musicList)
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
                        <table className="album-list">
                            <tbody>
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