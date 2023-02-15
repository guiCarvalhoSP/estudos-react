const Events = () => {

    const handleMyEvent= (e) => {
        console.log(e);
        console.log('Ativou o evento');
    }

    const renderSomething = (arg) => {
        if(arg) {
            return <h3>Retorna isso</h3>
        } else {
            return <h3>Retorna isso também</h3>

        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou no segundo botão')}>Clique aqui também</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
};

export default Events;