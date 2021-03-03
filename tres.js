function mostrar()
{
	let nombre;
	let obraSocial;
	let edad;
	let temperatura;
	let sexo;
	let seguir;
	const PRECIO = 600;
	let contPasajeros = 0;

	//punto a
	let contOsde = 0;
	//punto b
	let nombreMujerJovenPami;
	let edadMujerJovenPami;
	let temperaturaMujerJovenPami;
	let flagMujerJovenPami = 1;
	//punto c
	let precioSinDescuento;
	//punto D
	let contPAMI = 0;
	let precioConDescuento;

	do {
		nombre = prompt("ingrese el nombre del pasajero");
		obraSocial = prompt("ingrese su obra social(PAMI, OSDE o OTRAS)");
		while (obraSocial != 'PAMI' && obraSocial != 'OSDE' && obraSocial != 'OTRAS') {
			obraSocial = prompt("Error. ingrese su obra social (PAMI, OSDE o OTRAS)");
		}
		edad = parseInt(prompt("ingrese su edad"));
		while (isNaN(edad) || edad < 17) {
			edad = parseInt(prompt("Error. ingrese su edad(Tiene que ser mayor a 17 años)"));
		}
		temperatura = parseFloat(prompt("ingrese su temperatura"));
		while (isNaN(temperatura) || temperatura < 1) {
			temperatura = parseFloat(prompt("Error. ingrese su temperatura (tiene que ser en numero )"));
		}
		sexo = prompt("Ingrese su sexo(f/m)").toLowerCase();
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Error. Ingrese tipo de cursada (f/m)").toLowerCase();
		}
		contPasajeros++;

		//punto a
		if (obraSocial == 'OSDE' && edad > 60) {
			contOsde++;
		}
		//punto b
		if ((flagMujerJovenPami == 1 || edadMujerJovenPami > edad) && sexo == 'f') {
			nombreMujerJovenPami = nombre;
			edadMujerJovenPami = edad;
			temperaturaMujerJovenPami = temperatura;
			flagMujerJovenPami = 0;
		}
		//punto d
		if (obraSocial == 'PAMI') {
			contPAMI++;
		}

		seguir = prompt("¿desea ingresar otro pasajero?").toLowerCase();
	} while (seguir == 's' || seguir == 'si')

	precioSinDescuento = contPasajeros * PRECIO;

	//punto a
	if (contOsde != 0) {
		console.log("A_ la cantidad de personas con OSDE de mas de 60 años es " + contOsde);
	}
	else {
		console.log("A_ no hay viudos de mas de 60 años");
	}
	//punto b
	if (flagMujerJovenPami == 0) {
		console.log("b_ La mujer mas joven con pami se llama " + nombreMujerJovenPami + " y su temperatura es " + temperaturaMujerJovenPami);
	}
	else {
		console.log("b_ no ingresaron ninguna mujer que tenga pami");
	}
	//punto c
	console.log("C_ El viaje sin descuento sale " + precioSinDescuento);
	
	//punto d
	if (contPAMI >= contPasajeros / 2) {
		precioConDescuento = precioSinDescuento - precioSinDescuento * 0.25;
		console.log("D_ el precio con descuento es de " + precioConDescuento);
	}
	else {
		console.log("D_ no se aplica ningun descuento");
	}
	
}
