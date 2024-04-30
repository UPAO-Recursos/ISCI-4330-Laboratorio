import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Gatos from './data/gatos.json'

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);



const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return <main>
        <Carousel>
            {
                Gatos.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                            <button className="btn btn-primary" >Ver detalle</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>
    </main >;
}

export default Main;