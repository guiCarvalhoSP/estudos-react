const TemplateExpressionsComponent = () => {

    const name = 'Guilherme';
    const objeto = {
        name: 'Name',
        job: 'Developer'
    }

    return (
        <div>
            <h1>Olá { name }!</h1>
            <p>{objeto.job}</p>
            <p>{5+4}</p>
        </div>
    )
};

export default TemplateExpressionsComponent;