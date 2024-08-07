
// codice aggiunto

var ComputerScore=0
var HumanScore=0


const numero=5
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
document.write("<br>")
document.write ("PC selected:....\n", randomElement);
;

    if (randomElement=="sasso" && getHumanChoice.toLowerCase()=="forbici") { ComputerScore=ComputerScore+1
        document.write("<br>")
        document.write (":.....dear Human, you have lost !!!")} 

        else if (randomElement=="forbici" && getHumanChoice.toLowerCase()=="carta") { ComputerScore=ComputerScore+1
            document.write("<br>")
            document.write (":.....dear Human, you have lost !!!\n")} 

        else if (randomElement=="carta" && getHumanChoice.toLowerCase()=="sasso") { ComputerScore=ComputerScore+1
            document.write("<br>")
            document.write (":.....dear Human, you have lost !!!\n")} 
        
    if (getHumanChoice.toLowerCase()=="sasso" && randomElement=="forbici") { HumanScore=HumanScore+1
            document.write("<br>")
            document.write (":.....dear PC, you have lost !!!\n")} 
        
        else if (getHumanChoice.toLowerCase()=="forbici" && randomElement=="carta") { HumanScore=HumanScore+1
            document.write("<br>")
            document.write (":.....dear PC, you have lost !!!\n")} 
        
        else if (getHumanChoice.toLowerCase()=="carta" && randomElement=="sasso") { HumanScore=HumanScore+1
            document.write("<br>")
            document.write (":.....dear PC, you have lost !!!\n")} 

    if (getHumanChoice.toLowerCase()=="sasso" && randomElement=="sasso") { 
            document.write("<br>")
            document.write (":.....dear PC, dear human, no winner!!!\n")} 
                
        else if (getHumanChoice.toLowerCase()=="forbici" && randomElement=="forbici") { 
            document.write("<br>")
            document.write (":.....dear PC, dear human, no winner!!!\n")} 
                
        else if (getHumanChoice.toLowerCase()=="carta" && randomElement=="carta") { 
            document.write("<br>")
            document.write (".....dear PC, dear human, no winner!!!\n")}
                            
        }  

// codice aggiuntivo




setTimeout(()=>{document.write("<br>")
    document.write("Computer Score:", ComputerScore);},10000);
setTimeout(()=>{document.write("<br>")
    document.write("Your Score:", HumanScore);},10000);

setTimeout(()=>{
    
    if (ComputerScore>HumanScore) {document.write("<br>")
        document.write("Computer is the WINNER !")}},5000);
    
setTimeout(()=>{
    
    if(HumanScore>ComputerScore) {
        document.write ("You are the WINNER !")}},5000)

  