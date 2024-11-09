export default {
    Mega_Cena(params) {
        var megaCena = []
        var lista = []
        var qtdJogos = params
        var qtd = 0
        while (qtd < qtdJogos) {
            var qtdSorteio = 1
            while (qtdSorteio <= 7) {
                var num = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
                if(megaCena.includes(num)){
                    console.log(`O número ${num} já está na lista.`)
                }
                else{
                    megaCena.push(num)
                    qtdSorteio += 1
                }
            }
            megaCena.sort()
            lista.push(megaCena)
            megaCena = []
            qtd += 1
        }

        return lista
    }
}




/*  

const ListaLoteria = function SortearJogos() {
        var megaCena = []
        var lista = []
        var qtdJogos = document.getElementById("Jogos").value
        var qtd = 0
        while (qtd < qtdJogos) {
            var qtdSorteio = 1
            while (qtdSorteio <= 7) {
                var num = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
                if(megaCena.includes(num)){
                    console.log(`O número ${num} já está na lista.`)
                }
                else{
                    megaCena.push(num)
                    qtdSorteio += 1
                }
            }
            megaCena.sort()
            lista.push(megaCena)
            megaCena = []
            qtd += 1
        }

        return lista
    }

    console.log(ListaLoteria)



*/