
import { userRegistration } from '../controller/register-controller.js';

export default () => {
  const viewRegister = `
  <header>
  <h1>Petlandia</h1>
  <a href="#/">
  <figure class="imagenHeader">
    <img
      src="../imagenes/image.png"
      class="logoHeader"
      alt="imagenPetlandia"
      width="400px"
      height="auto"
    />
  </figure>
</a>
</header>
  <section class="register-container">
  <section class="registerForm-container">
    <p>Regístrate</p>
    <form id="signUp-form">
    <section class="msg-alert-reg">
      <input
        class="input-register validity"
        id="nameUser"
        type="text"
        pattern="([a-zA-ZÁÉÍÓÚñáéíóúÑ]{1,30}\\s*)+"
        placeholder="Nombre de usuario"
        required
      />
      <span class="error-msg">Solo letras</span>
    </section>
    <section class="msg-alert-reg">
      <input
        class="input-register validity"
        id="emailSignUp"
        type="email"
        pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
        placeholder="e-mail"   
        autocomplete="on" 
        required
      />
      <span class="error-msg">Ingrese un e-mail valido</span>
    </section>
    <section class="msg-alert-reg">
      <input
        class="input-register validity"
        id="passwordSignUp"
        type="password"
        placeholder="contraseña"
        minlength="8"
        maxlength="15"
        pattern="[A-Za-z0-9]{6,30}$"

        autocomplete="on"

        required
      />
      <span class="error-msg">Tamaño mínimo de 6 caracteres</span>
    </section>
    <input type="submit" class="bttonSudmitt" id="submit-buttomRegister" value="Crear Cuenta" />
    </form>
    </section>
  
  <p>
    ¿Ya tienes una cuenta?.<a
      href="#/signIn"
      style="color: blue"
      class="text-init-session"
      id="btnViewLogIn"
    >
      Inicia sesión</a
    >
  </p>
  </section>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewRegister;

  const btonLogUp = divElemt.querySelector('#signUp-form');

  // Evento para registrar usuario
  btonLogUp.addEventListener('submit', userRegistration);

  return divElemt;
};
