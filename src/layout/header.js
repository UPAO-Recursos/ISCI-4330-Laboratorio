import { Link } from "react-router-dom";

const Header = () => {
    return <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Mis gatos</Link>
            </div>
        </nav>
    </header>;
}

export default Header;