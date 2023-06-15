function toquePom ()
{
    document.querySelector('#som_tecla_pom').play();
}

const listaTeclasSom = document.querySelectorAll('.tecla');

listaTeclasSom[0] = onclick = toquePom;