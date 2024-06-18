import { Link } from "react-router-dom";
import { getCarrito } from "../store/local";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    const [carrito, setCarrito] = useState([])

    setInterval(() => {
        setCarrito(getCarrito())
    }, 1000);

    return <header>
        <nav className="navbar navbar-nav navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mis gatos</Link>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span className="badge rounded-pill text-bg-danger">
                            {carrito.length}
                        </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {carrito.map((element, idx) => {
                            return <Dropdown.Item key={idx}>
                                <div class="card mb-3">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={element.picture} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{element.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    </header>;
}

export default Header;