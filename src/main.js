import Carousel from 'react-bootstrap/Carousel';


const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const Main = () => {
    return <main>
        <button className="btn btn-primary">
            <i data-feather="save"></i>
            Guardar
        </button>
        <p>main</p>

        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </main>;
}

export default Main;