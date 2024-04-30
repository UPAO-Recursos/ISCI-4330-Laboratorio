import Carousel from 'react-bootstrap/Carousel';


const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const Main = () => {
    return <main>
        <Carousel>
            <Carousel.Item>
                <img className='w-100 dark-image' src='https://s1.eestatic.com/2020/05/18/como/gatos-mascotas-trucos_490961518_152142875_1706x960.jpg'></img>
                <Carousel.Caption>
                    <h3>Gato</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </main>;
}

export default Main;