

document.addEventListener("DOMContentLoaded", function(event) {
    //Constantes
    const result = document.getElementById('result');
    const caracteresToAdd = document.getElementsByClassName("caracterToAdd")
    const resultButton = document.getElementById('reset')
    const send = document.getElementById('send');
    const deleteButton = document.getElementById('delete');
    let reg = new RegExp("^[\\d\\W]+$"); 

    //Events Listener
    Array.prototype.forEach.call(caracteresToAdd, caracter =>{
        caracter.addEventListener('click', element => {
            addCaracter(caracter.innerHTML);
        })
        
    })

    deleteButton.addEventListener("click", element => {
        deleteLastCaracter();
    })

    resultButton.addEventListener("click", element =>{
        reset();
    })

    send.addEventListener("click", element =>{
        calculate();
    })

    document.addEventListener('keyup', key => {
        console.log(key);
        switch (key.key) {
            case "enter":
                calculate();
                break;
            case "delete":
                reset();
                break;
            case "backspace" :
                deleteLastCaracter();    
            default:
                if(reg.test(key.key)) {
                    addCaracter(key.key);
                }
                break;
        }
    })




    //Fonctions
    function addCaracter(newCaracter){
        result.value += newCaracter;
    }

    function reset(){
        result.value = "";
    }

    function calculate(){
        result.value = eval(result.value);
    }

    function deleteLastCaracter (){
        result.value = result.value.slice(0, -1)
    }
});