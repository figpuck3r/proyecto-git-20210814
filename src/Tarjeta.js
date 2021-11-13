//Funcion 1
function numeroDoble(numero){
    return 2 * numero; 
}

//Funcion 2
function Titulo(){
    return <div> <h1> Titulo 1 </h1> </div>;
}

//Funcion 3
const SubTitulo = () => <div> Subtitulo 1 </div>;


//Funcion 4
function Tarjeta () {
    return(
        <div>
            <Titulo></Titulo>
            <SubTitulo></SubTitulo>
        </div>
    );
}

export default Tarjeta;