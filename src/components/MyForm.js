import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} />
                </div>
                <label>
                    <span>E-mail</span>
                    <input type="email" name='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value='enviar' />
            </form>
        </div>
    )
}

export default MyForm