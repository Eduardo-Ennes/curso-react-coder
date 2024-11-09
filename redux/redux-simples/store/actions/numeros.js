export function AlterarNumeroMin(novoNumero){
    return{
        type: "NUM_MIN_ALTERADO",
        payload: novoNumero
    }
}


export function AlterarNumeroMax(novoNumero){
    return{
        type: "NUM_MAX_ALTERADO",
        payload: novoNumero
    }
}