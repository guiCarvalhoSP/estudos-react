import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState(user ? user.bio : "");

    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulario");
        console.log(name, email, bio, role);

        setEmail("");
        setName("");
        setBio("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={handleName}
                        value={name}
                    />
                </div>
                <label>
                    <span>E-mail</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>

                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição do usuario" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                <label>
                    <span>Função:</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuario</option>
                        <option value="admin">Administrador</option>
                        <option value="other">Outros</option>

                    </select>
                </label>
                <input type="submit" value="enviar" />
            </form>
        </div>
    );
};

export default MyForm;
