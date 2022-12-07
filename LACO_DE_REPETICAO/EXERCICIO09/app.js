function Tabuada(){
    let contador = 0
    let n = document.getElementById("numero").value   
    document.getElementById("resposta").innerHTML = ""
   while (contador <=10) {
   document.getElementById("resposta").innerHTML += n + "X" + contador + "=" + contador * n + <br>
   contador = contador + 1}
   }
