import React from "react";
import './EditPlaylist.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditPlaylist = ({ usuario, setUsuario }) => {
    const { id } = useParams();
    var showMusic;
    const navigate = useNavigate();
    const [play, setPlay] = useState(usuario.playlists[id]);
    const [musicas, setMusicas] = useState([]);
    const [musicList, setMusicList] = useState(play.musicas);

    /*axios.get(`http://localhost:3001/usuarios/${usuario.id}`)
        .then(function (response) {
            setPlay(response.data.playlists[id])
            
            setMusicList(response.data.playlists[id].musicas)
        }
    )*/

    if (musicas.length == 0) {
        axios.get("http://localhost:3001/musicas")
            .then(function (response) {
                setMusicas(response.data);
            })
    }

    showMusic = musicas.map((m) =>
        <tr id={"tr-" + m.id}>
            <div id={m.id} className="music" onClick={e => marcar(m.id)} 
            style={musicList.find(x => x.id === m.id)? {backgroundColor:"beige"}:{backgroundColor:"1B263B"} }>
                <img className="playButton" src="/assets/images/play.png" alt=""></img>
                <h4 id={"n-" + m.id} 
                style={musicList.find(x => x.id === m.id)? {color:"#1B263B"}:{color:"beige"} }>{m.nome}</h4>
                <h8 id={"a-" + m.id} 
                style={musicList.find(x => x.id === m.id)? {color:"#1B263B"}:{color:"beige"} } className="autor">{m.autor}</h8>
            </div>
        </tr>
    )

    /*for (let i = 0;  i < musicas.length; i++) {não funfou
        const e = musicas[i];
        if (musicList.find(x => x.id === e.id)) {
            var m = document.getElementById(e.id)
            var nm = document.getElementById("n-" + e.id)
            var am = document.getElementById("a-" + e.id)
            console.log(m,nm,am)
            if (m && nm && am) {
                m.style.backgroundColor = "beige"
                nm.style.color = "#1B263B"
                am.style.color = "#1B263B"
            }
        }

    }*/




    function procurar(input) {
        var text = input.toLowerCase()
        for (var i = 0; i < musicas.length; i++) {
            var m = musicas[i]
            if (m.nome.toLowerCase().includes(text) || m.autor.toLowerCase().includes(text)) {
                document.getElementById("tr-" + m.id).style.visibility = "visible"
            } else {
                document.getElementById("tr-" + m.id).style.visibility = "collapse"
            }
        }

    }

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
        var newPLay = {
            id: play.id,
            nome:play.nome,
            capa:play.capa,
            musicas:musicList
        }
        var updatedUser = {
            id: usuario.id,
            userName: usuario.userName,
            lastName: usuario.lastName,
            email: usuario.email,
            numCelular: usuario.numCelular,
            password: usuario.password,
            playlists: usuario.playlists.map(m => m.id == newPLay.id? newPLay:m)
        }
        setUsuario(updatedUser)
        axios.put(`http://localhost:3001/usuarios/${usuario.id}`, updatedUser)
        navigate("/SelectedPlaylist/" + id, { replace: true });
        

    }


    return (
        <div className="baixa container-fluid">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="interface col-sm-8 well well-md">
                    <div className="row"><Link className="backButton" to={"/SelectedPlaylist/" + id}>voltar</Link></div>
                    <div className="row">
                        <img className="playlists" src={play.capa} alt={play.nome}></img>
                        <h3>{play.nome}</h3>
                    </div>
                    <div className="row">
                        <button className="submitEdit" onClick={submit}>Editar</button>
                    </div>
                    <div className="row">
                        <div className="search well well-sm">
                            <h4 from="musicSearch">Procure uma música</h4><br />
                            <input id="musicSearch" type="text" onInput={e => procurar(e.target.value)} placeholder="Digite aqui."></input>
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
        </div>
    )
}

export default EditPlaylist