import { useState } from "react";
import { getCarrito } from "../../store/local";

const Carrito = () => {
    const [carrito, setCarrito] = useState([])

    setTimeout(() => {
        setCarrito(getCarrito())
    }, 0);

    return <>
        <h1>Bienvenido a carrito</h1>

        {
            carrito.map(element => <>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={element.picture} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{element.name}</h5>
                                <h5 class="card-title">{element.tamano}</h5>
                                <h5 class="card-title">{element.category}</h5>
                                <h5 class="card-title">{element.description}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
        }
    </>
};

export default Carrito;