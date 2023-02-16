import { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(true);

    const [name] = useState("João");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim</p>}
            {!x && <p>Agora x é falso</p>}

            <h1>If ternário</h1>
            {name === 'João' ? (
            <div>
                <p>Nome é joão</p>
            </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
                )}
        </div>
    )
}

export default ConditionalRender