//cachipum.js
/*necesito una jugada y el valor de la jugada es piedra, papel o tijera*/

var jugadaUser;
var jugadaCompu;

var jugadaUser = prompt ("¿piedra, papel o tijera?");
console.log(jugadaUser);

var numRandom = Math.random()*2;
var numRedondo = Math.round(numRandom);
console.log(numRedondo);

alert ("Ahora le toca jugar a la compu!");

/*0:piedra, 1 tijera, 2 papel*/

if (numRedondo = 0){
	jugadaCompu = "piedra";
}else if (numRedondo = 1){
	jugadaCompu = "tijera";
}else {
	jugadaCompu = "papel";
} 

alert ('el computador eligio:'  + jugadaCompu);

if (jugadaUser === "piedra"){
	if(jugadaCompu === "piedra"){
		alert("Empate");
	}else if (jugadaCompu === "papel"){
		alert("la compu gana");
	}else{
		alert("Tu ganas!");
	}

}else if(jugadaUser === "papel"){
	if(jugadaCompu === "papel"){
		alert("es un empate");
	}else if (jugadaCompu === "piedra"){
		alert("tu ganas");
	} else {
		alert("la compu gana");
	 }
}else {
	if(jugadaCompu === "tijera"){
		alert("es un empate");
	}else if(jugadaCompu ==="papel"){
		alert("tu ganas!");
	}else{
		alert("gana la compu");
	}
}