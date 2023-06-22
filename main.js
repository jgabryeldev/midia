function toque (idElementoSom)
{
    document.querySelector(idElementoSom).play();
}

const listaTeclasSom = document.querySelectorAll('.tecla');

let i =0;

while(i<listaTeclasSom.length)
{
    listaTeclasSom[i] = onclick = function()
    {
        toque('#som_tecla_pom');
    }
    i++;
}