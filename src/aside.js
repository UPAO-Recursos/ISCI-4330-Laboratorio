const Aside = () => {
    return <aside>
        <form>
  <div class="form-group mt-5">
  <br/>
    <br/>
    <label for="exampleInputEmail1">¿Eres nuevo?, Regístrate en Tech-Phone y sé parte de esta comunidad</label>
    <br/>
    <br/>
    <label for="exampleInputEmail1">GMAIL</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Gmail"/>
    <small id="emailHelp" class="form-text text-muted">                                      </small>
  </div>
  <div class="form-group">
  <br/>
    <label for="exampleInputPassword1">CONTRASEÑA</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
  </div>
  <br/>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Aceptar las Políticas y Condiciones de Privacidad</label>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary">REGISTRAR</button>
</form>
    </aside>;
}
export default Aside;