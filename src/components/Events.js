const Events = () => {

    const handleMyEvent= (e) => {
        console.log(e);
        console.log('Ativou o evento');
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou no segundo botão')}>Clique aqui também</button>
            </div>
        </div>
    )
};

export default Events;