
var elementos= [];
var topo = -1; //indica que a posição começa um nível abaixo da posição zero//
const Max = 10 // Tamanho máximo da pilha

function push (num){

    if (topo <Max){ // Se topo for menor que o tamanho, então topo recebe um elemento e o aloca na posição zero

        topo = topo+1;
        elementos[topo]= num;// Os elementos na posição topo receberam o número que desejamos
        
    }
     else {
 console.log("Pilha cheia")
 }

}

function pop(){
    if (topo !=-1) {
        let num= elementos[topo];
        topo= topo-1;
        return num;
    }
    
    else{
    console.log("Pilha vazia");
}
}

///Usando o código produzido//

push(10);
push(20);
push(30);

console.log(elementos);

console.log(pop()); //Desenpilha//