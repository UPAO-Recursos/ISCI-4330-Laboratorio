const Header = () => {
  return <header>
<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'grey', paddingLeft: '50px'}}>
<a className="display-3" class="navbar-brand text-white font-weight-bold" href="#">TECH-PHONE</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
    <a class="nav-item nav-link active text-white" href="#">Inicio<span class="sr-only"></span></a>
    <a class="nav-item nav-link text-white" href="#">Celulares</a>
    <a class="nav-item nav-link text-white" href="#">Carrito de Compras</a>
    <a class="nav-item nav-link text-white" href="#">Método de Pago</a>
    <a class="nav-item nav-link disabled text-white" href="#">Contacto</a>
  </div>
</div>
</nav>
  </header>;
}
export default Header;