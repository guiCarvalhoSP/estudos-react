import { useState } from "react";

const ListRender = () => {

    const [list] = useState(['João', 'Lucas', 'José']);
    const [users] = useState([
        {id: 1 , name: 'nome 1'},
        {id: 2 , name: 'nome 2'},
        {id: 3 , name: 'nome 3'},

    ])
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
        </div>
    )
}

export default ListRender