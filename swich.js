let diaDeLaSemana = "Lunes";

switch (diaDeLaSemana) {
    case "Lunes":
        console.log("Es el primer dia de la semana")
        break;
    case "Miercoles":
    case "Viernes":
        console.log("Es un dia de trabajo")
    default:
        console.log("Es un dia de descanso");
        break;
}