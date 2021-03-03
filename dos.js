function mostrar() {
  let nombre;
  let situacionLaboral;
  let cantDeMaterias;
  let sexo;
  let notaProm;
  let edad;

  //punto a
  let flagMejorPromEstudiante = 1;
  let mejorPromEstudiante;
  let mejorPromEstudianteNombre;

  //punto b
  let flagMasViejoEstudiante = 1;
  let nombreMasViejoEstudiante;
  let edadMasViejoEstudiante;

  //punto c
  let cantNotaBuscando = 0;
  let cantNotaTrabajando = 0;
  let cantNotaSoloEstudiante = 0;
  let contNotaBuscando = 0;
  let contNotaTrabajando = 0;
  let contNotaSoloEstudiante = 0;
  let promNotaBuscando = 0;
  let promNotaTrabajando = 0;
  let promNotaSoloEstudiando = 0;
  let respuestaC = "C_ "

  //Punto D
  let flagMenosCantMateriaBJ = 1;
  let edadenosMateriaBJ = edad;
  let nombreMenosMateriaBJ = nombre;
  let cantidadMenosMateriaBJ;

  do {
    nombre = prompt("ingrese su nombre");
    situacionLaboral = prompt("Ingrese su situacion laboral(buscando, trabajando o solo estudiante)").toLowerCase();
    while (situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "solo estudiante") {
      situacionLaboral = prompt("Error. Ingrese su situacion laboral(buscando, trabajando o solo estudiante)").toLowerCase();
    }
    cantDeMaterias = parseInt(prompt("Ingrese la cantidad de materias (max. 8)"));
    while ((cantDeMaterias < 1 || cantDeMaterias > 8) || isNaN(cantDeMaterias)) {
      cantDeMaterias = prompt("Error. Ingrese la cantidad de unidades (max. 8)");
    }
    sexo = prompt("Ingrese tipo su genero(femenino, masculino o no binario)").toLowerCase();
    while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario") {
      sexo = prompt("Error. Ingrese tipo su genero (femenino, masculino o no binario)").toLowerCase();
    }
    notaProm = parseInt(prompt("Ingrese el promedio de nota(entre 0 y 10)"));
    while ((notaProm < 0 || notaProm > 10) || isNaN(notaProm)) {
      notaProm = prompt("Error. Ingrese el promedio de nota (entre 0 y 10)");
    }
    edad = parseInt(prompt("ingrese su edad"));
    while (isNaN(edad) || edad < 1) {
      edad = parseInt(prompt("Error. ingrese su edad"));
    }

    //punto a
    if ((flagMejorPromEstudiante || mejorPromEstudiante < notaProm) && situacionLaboral == 'solo estudiante') {
      mejorPromEstudiante = notaProm;
      mejorPromEstudianteNombre = nombre;
      flagMejorPromEstudiante = 0;
    }

    //punto b
    if ((flagMasViejoEstudiante == 1 || edadMasViejoEstudiante < edad) && situacionLaboral == 'solo estudiante') {
      flagMasViejoEstudiante = 0;
      nombreMasViejoEstudiante = nombre;
      edadMasViejoEstudiante = edad;
    }

    //punto c
    switch (situacionLaboral) {
      case ("buscando"):
        cantNotaBuscando += notaProm;
        contNotaBuscando++;
        break
      case ("trabajando"):
        cantNotaTrabajando += notaProm;
        contNotaTrabajando++;
        break
      case ("solo estudiante"):
        cantNotaSoloEstudiante += notaProm;
        contNotaSoloEstudiante++;
        break
    }

    //punto d
    if ((flagMenosCantMateriaBJ == 1 || cantidadMenosMateriaBJ < cantDeMaterias) && situacionLaboral == 'buscando') {
      flagMenosCantMateriaBJ = 0;
      edadenosMateriaBJ = edad;
      nombreMenosMateriaBJ = nombre;
      cantidadMenosMateriaBJ = cantDeMaterias;

    }




    seguir = prompt("¿desea ingresar otro alumno?").toLowerCase();
  } while (seguir == 's' || seguir == 'si')



  //formulando respuesta de la c
  if (contNotaBuscando != 0) {
    promNotaBuscando = cantNotaBuscando / contNotaBuscando;
    respuestaC += " el promedio de notas que estan buscando trabajo es de " + promNotaBuscando;
  }
  else {
    respuestaC += " no ingreso ninguna nota del buscando trabajo "
  }
  if (contNotaTrabajando != 0) {
    promNotaTrabajando = cantNotaTrabajando / contNotaTrabajando;
    respuestaC += ", el promedio de notas de situacion laboral trabajando " + promNotaTrabajando;
  }
  else {
    respuestaC += ", no ingreso ninguna nota de un alumno en situacion laboral trabajando "
  }
  if (contNotaSoloEstudiante != 0) {
    promNotaSoloEstudiando = cantNotaSoloEstudiante / contNotaSoloEstudiante;
    respuestaC += ", el promedio de notas solo estudiante es de " + promNotaSoloEstudiando;
  }
  else {
    respuestaC += ", no ingreso ninguna nota del  solo estudiante "
  }

  //imprimiendo los informe
  //punto a
  if (flagMejorPromEstudiante == 0) {
    console.log("A_ el mejor promedio que no trabaja ni esta buscando se llama " + mejorPromEstudianteNombre + " y su promedio es " + mejorPromEstudiante);
  }
  else {
    console.log("A_ No ingresaron la nota de ninguna persona que solo estudie");
  }
  //respuesta b
  if (flagMasViejoEstudiante == 0) {
    console.log("b_  El alumno mas viejo que solo estudia se llama  " + nombreMasViejoEstudiante + " y su edad es " + edadMasViejoEstudiante);
  }
  else {
    console.log("b_ No ingresaron ningun alumno que solo estudie");
  }
  //punto c
  console.log(respuestaC);
  //punto d
  if (flagMenosCantMateriaBJ == 0) {
    console.log("d_ el alumno con menos materia que esta en situacion laboral buscando se llama " + nombreMenosMateriaBJ + " y su edad es " + edadenosMateriaBJ);
  }
  else {
    console.log("d_ Ningun alumno se ingreso como que esta buscando trabajo");
  }





}
