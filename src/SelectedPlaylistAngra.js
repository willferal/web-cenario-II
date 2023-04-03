import React from "react";
import "./Home.css";
import Angra from "./assets/images/angra.png";
// import A7x from "./assets/images/a7x.png";
// import Racionais from "./assets/images/racionais.jpg";

const SelectedPlaylistAngra = props => {
    const musicas = [{
        nome:"Temple of Hate",
        capa: Angra ,
        audio: "/assets/musics/temple-of-hate.mp3"
    },{
        nome:"Spread your fire",
        capa: Angra,
        audio: ""
    }
]


    const playAngra = musicas.map((musicas)=>
    <ul>
        <li>
            <div className="play well well-sm">
                <img className="playlists" src={musicas.capa} alt={musicas.nome} />
                <h6>{musicas.nome}</h6>
                <audio id="audio" src="{musicas.audio}" preload="preload"></audio>
                <button onclick="document.getElementById('audio').play()">Tocar</button>
            </div>
        </li>
    </ul>
    )

    return(
        <section>
            <div>
                <h2>Basta clickar e escutar!!</h2>
                <ul class="album-list">
                    {playAngra}
                    {/* <li>
                        <a target="_blank" rel="noreferrer" href="https://pt.wikipedia.org/wsiki/Nada_como_um_Dia_ap%C3%B3s_o_Outro_Dia" alt="Nada como um dia após o outro dia - Racionais">
                            <img src={Racionais} alt="Racionais"/>
                    </a>
                    </li> */}
                </ul>
                
                </div>
            </section>
    )
}

export default SelectedPlaylistAngra;