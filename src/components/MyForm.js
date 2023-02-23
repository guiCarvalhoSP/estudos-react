import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulario");
        console.log(name, email, bio);

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

                <label htmlFor="">
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição do usuario" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                <input type="submit" value="enviar" />
            </form>
        </div>
    );
};

export default MyForm;
