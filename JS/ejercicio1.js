
var numcharacters = 0 + " caracteres "


function countChars(num_characters){
    numcharacters = num_characters.value;
 }


$(".button_add").click(function(){
    if(numcharacters >=0 |  numcharacters <=0 ){
        console.log(document.getElementById("character_num").innerHTML = "Numero")
    }
    else{
        console.log(document.getElementById("character_num").innerHTML = "Texto")
    }
    
    })
    

