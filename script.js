
// codice aggiunto

var ComputerScore=0
var HumanScore=0


const numero=3
let contatore=0
for (contatore=1;contatore<=numero;contatore=contatore+1){


//fino qui
let getHumanChoice= prompt ("Sasso, Carta, Forbici- scrivi la tua scelta:");
   

function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    return randomElement;
}
const array = ["sasso","carta","forbici"];
const randomElement = getComputerChoice (array);
document.write ("PC selected:....", randomElement);


    if (randomElement=="sasso" && getHumanChoice.toLowerCase()=="forbici") { ComputerScore=ComputerScore+1
        document.write (":.....dear Human, you have lost !!! :-(")} 

        else if (randomElement=="forbici" && getHumanChoice.toLowerCase()=="carta") { ComputerScore=ComputerScore+1
            document.write (":.....dear Human, you have lost !!! :-(")} 

        else if (randomElement=="carta" && getHumanChoice.toLowerCase()=="sasso") { ComputerScore=ComputerScore+1
            document.write (":.....dear Human, you have lost !!! :-(")} 
        
    if (getHumanChoice.toLowerCase()=="sasso" && randomElement=="forbici") { HumanScore=HumanScore+1
                document.write (":.....dear PC, you have lost !!! :-)")} 
        
        else if (getHumanChoice.toLowerCase()=="forbici" && randomElement=="carta") { HumanScore=HumanScore+1
                    document.write (":.....dear PC, you have lost !!! :-)")} 
        
        else if (getHumanChoice.toLowerCase()=="carta" && randomElement=="sasso") { HumanScore=HumanScore+1
                    document.write (":.....dear PC, you have lost !!! :-)")} 

    if (getHumanChoice.toLowerCase()=="sasso" && randomElement=="sasso") { 
                        document.write (":.....dear PC, dear human, no winner!!! :-)")} 
                
        else if (getHumanChoice.toLowerCase()=="forbici" && randomElement=="forbici") { 
                            document.write (":.....dear PC, dear human, no winner!!!:-)")} 
                
        else if (getHumanChoice.toLowerCase()=="carta" && randomElement=="carta") { 
                            document.write (".....dear PC, dear human, no winner!!!:-)")}
                            

document.write("......Computer Score::", ComputerScore);
document.write("......Human Score:", HumanScore);

// codice aggiuntivo
}

