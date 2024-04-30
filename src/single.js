import Gatos from './data/gatos.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const gato = Gatos.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{gato.name}</h1>
        <hr></hr>
        <img src={gato.picture}></img>
        <p>{gato.description}</p>
    </>);
}

export default Single;