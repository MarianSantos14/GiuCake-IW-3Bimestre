const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');
const modoNome = document.getElementById('nomeDoModo');

// Carregar preferências salvas
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo) {
  elemento.setAttribute('data-bs-theme', temaSalvo);
  inputCheck.checked = temaSalvo === 'dark';
  modoNome.textContent = temaSalvo === 'dark' ? 'Modo noturno' : 'Modo claro';
}

// Quando o usuário alternar o tema
inputCheck.addEventListener('click', () => {
  const modo = inputCheck.checked ? 'dark' : 'light';
  elemento.setAttribute('data-bs-theme', modo);
  localStorage.setItem('tema', modo);

  modoNome.textContent = modo === 'dark' ? 'Modo noturno' : 'Modo claro';
});
