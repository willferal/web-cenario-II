import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './EditProfile.css'
import axios from "axios";




const EditProfile = ({ usuario, setUsuario }) => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState(usuario.userName);
    const [lastName, setLastName] = useState(usuario.lastName);
    const [numCelular, setNumCelular] = useState(usuario.numCelular);


    function submit(e) {
        e.preventDefault();
        axios.get(`http://localhost:3001/usuarios?numCelular=${numCelular}`).then(response => {
            if (response.data[0] && response.data[0].numCelular !== numCelular) {
                alert("numero de celular já cadastrado!")
                return;
            }
            var updatedUser = {
                id: usuario.id,
                userName: userName,
                lastName: lastName,
                email: usuario.email,
                numCelular: numCelular,
                password: usuario.password,
                playlists: usuario.playlists
            }
            setUsuario(updatedUser)
            axios.put(`http://localhost:3001/usuarios/${usuario.id}`, updatedUser)
            navigate('/playlist', { replace: true });
        })
    }



    return (
        <div className="container-fluid">
            <div className="col-sm-2"></div>
            <div className="interface col-sm-8 well well-md">
                <div className="rowVoltar row"><Link className="backButton" to={'/Playlist'}>voltar</Link></div>
                <div className="row">
                    <form className="editForm" onSubmit={e => submit(e)}>
                        <h5>Nome</h5>
                        <input className="texInputEdit"
                            type="text" value={userName}
                            onChange={e => setUserName(e.target.value)}
                            required
                            name="nome">
                        </input>
                        <h5>Sobrenome</h5>
                        <input className="texInputEdit"
                            type="text" value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            required>
                        </input>
                        <h5>Email</h5>
                        <input className="texInputEdit"
                            type="text" value={usuario.email}
                            disabled>
                        </input>
                        <h5>Celular</h5>
                        <input className="texInputEdit"
                            type="text" value={numCelular}
                            onChange={e => setNumCelular(e.target.value)}
                            required>
                        </input><br />
                        <input className="submitEdit" type="submit" value={"Concluir"}></input>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default EditProfile;