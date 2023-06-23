function toque (idElementoSom)
{
    document.querySelector(idElementoSom).play();
}

const listaTeclasSom = document.querySelectorAll('.tecla');

let i =0;

while(i<listaTeclasSom.length)
{
    const tecla = listaTeclasSom[i];
    const teclado = tecla.classList[1];
    const idSom = `#som_${teclado}`;
    listaTeclasSom[i].onclick = function()
    {
        toque(idSom);
    }
    i++;
}