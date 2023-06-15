function toquePom ()
{
    document.querySelector('#som_tecla_pom').play();
}

const listaTeclasSom = document.querySelectorAll('.tecla');

let i =0;

while(i<9)
{
    listaTeclasSom[i] = onclick = toquePom;
    i++;
}