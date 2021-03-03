
function mostrar() {
	let producto;
	let precio;
	let unidades;
	let categoria;
	let fabricante;

	//punto a
	let promAlcohol;
	let promIac;
	let promQuat;
	let cantAlcohol = 0;
	let cantIac = 0;
	let cantQuat = 0;
	let contAlcohol = 0;
	let contIac = 0;
	let contQuat = 0;
	let respuestaA = "A_ ";

	//punto b
	let categoriaConMasUnidades;
	let cantBactericida = 0;
	let cantDesinfectante = 0;
	let cantDetergente = 0;
	let CantUnidadesMax = 0;

	//punto c
	let CantDetergentesMenor200 = 0;

	//puinto d
	let flagCaroCategoria = 1;
	let categoriaMasCaroFabricante;
	let categoriaMasCaroPrecio;



	for (let i = 0; i < 5; i++) {
		//pido las variables
		producto = prompt("Ingrese tipo de producto (ALCOHOL,IAC O QUAT)");
		while (producto != "ALCOHOL" && producto != "IAC" && producto != "QUAT") {
			producto = prompt("Error. Ingrese tipo de producto (ALCOHOL,IAC O QUAT)");
		}
		precio = parseInt(prompt("Ingrese el precio(debe ser entre 100 y 300)"));
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseInt(prompt("Error. Ingrese el precio (debe ser entre 100 y 300)"));
		}
		unidades = parseInt(prompt("Ingrese la cantidad de unidades (max. 1000)"));
		while ((unidades < 1 || unidades > 1000) || isNaN(unidades)) {
			unidades = prompt("Error. Ingrese la cantidad de unidades (max. 1000)");
		}
		categoria = prompt("Ingrese la categoria (desinfectante, bactericida, detergente)").toLowerCase();
		while (categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente") {
			categoria = prompt("Error. Ingrese la categoria (desinfectante, bactericida, detergente)").toLowerCase();
		}
		fabricante = prompt("Ingrese la marca del producto");

		//ejercio a
		switch (producto) {
			case ("ALCOHOL"):
				cantAlcohol += unidades;
				contAlcohol++;
				break
			case ("IAC"):
				cantIac += unidades;
				contIac++;
				break
			case ("QUAT"):
				cantQuat += unidades;
				contQuat++;
				break
		}

		//ejercio b
		switch (categoria) {
			case ("bactericida"):
				cantBactericida += unidades;
				break

			case ("desinfectante"):
				cantDesinfectante += unidades;
				break

			case ("detergente"):
				cantDetergente += unidades;
				//punto c
				if (precio >= 200) {
					CantDetergentesMenor200 += unidades;
				}

				break
		}

		//punto d
		if (flagCaroCategoria || categoriaMasCaroPrecio < precio) {
			flagCaroCategoria = 0;
			categoriaMasCaroFabricante = fabricante;
			categoriaMasCaroPrecio = precio;
			categoriaMasCaro = categoria;
		}



	}//cierre del for



	//resolucion ejercio a
	if (contAlcohol != 0) {
		promAlcohol = cantAlcohol / contAlcohol;
		respuestaA += " el promedio de alcohol es " + promAlcohol;
	}
	else {
		respuestaA += " No se compro ningun producto con alcohol";
	}
	if (contIac != 0) {
		promIac = cantIac / contIac;
		respuestaA += ", El promedio de iac es:" + promIac;
	}
	else {
		respuestaA += ", No se compro ningun producto con iac";
	}
	if (contQuat != 0) {
		promQuat = cantQuat / contQuat;
		respuestaA += ", El promedio de quat es:" + promQuat;
	}
	else {
		respuestaA += ", No se compro ningun producto con quat";
	}

	//resolucion del b
	if (cantBactericida > cantDesinfectante && cantBactericida > cantDetergente) {
		categoriaConMasUnidades = " bactericida";
		CantUnidadesMax += cantBactericida;

	} else if (cantDesinfectante >= cantBactericida && cantDesinfectante > cantDetergente) {
		categoriaConMasUnidades = "desinfectante";
		CantUnidadesMax += cantDesinfectante
	} else {
		categoriaConMasUnidades = "detergente";
		CantUnidadesMax += cantDetergente;
	}



	//respuesta
	console.log(respuestaA);

	console.log("B_ la categoria con mas unidades es " + categoriaConMasUnidades + " con una cantidad de " + CantUnidadesMax);

	if (CantDetergentesMenor200 != 0) {
		console.log("C_ la cantidad de uniades de IAC es " + CantDetergentesMenor200 + " en total");
	}
	else {
		console.log("C_ No se agrego ninguna unidad de IAC con un precio menor a 200");
	}
	console.log("D_ La categoria mas cara es " + categoriaMasCaro + " su fabricante es " + categoriaMasCaroFabricante + " y su precio es " + categoriaMasCaroPrecio);
}


