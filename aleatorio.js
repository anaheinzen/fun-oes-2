export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.lengh);
    return lista(posicao);
}