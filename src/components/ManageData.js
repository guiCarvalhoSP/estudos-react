import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(12);

    return (
        <div>
            <div>
                Valor: {someData}
            </div>
            <div>
                <button onClick={() => (someData = 15)}>Mudar variável</button>
            </div>
            <div>
                Valor dinâmico: {number}
            </div>
            <div>
                <button onClick={() => setNumber(25)}>Mudar variável dinâmica</button>
            </div>
        </div>
    )
}

export default ManageData;