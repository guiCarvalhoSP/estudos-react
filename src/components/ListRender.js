import { useState } from "react";

const ListRender = () => {

    const [list] = useState(['João', 'Lucas', 'José']);
    const [users, setUsers] = useState([
        {id: 1 , name: 'nome 1'},
        {id: 2 , name: 'nome 2'},
        {id: 3 , name: 'nome 3'},

    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber);
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    }
    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender