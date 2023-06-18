
export const diaSelectores = [];
const fechaActual = new Date();
let mes = fechaActual.getMonth() + 1; // Sumamos 1 porque los meses en JavaScript son de 0 a 11

if (mes < 10) {
  mes = mes.toString().padStart(2, "0");
}

for (let dia = 1; dia <= 31; dia++) {
  const diaFormateado = dia < 10 ? `0${dia}` : `${dia}`;
  const fecha = `${diaFormateado}/${mes}`;
  diaSelectores.push(fecha);
}

export const horaSelector = [];

for (let hora = 10; hora <= 21; hora++) {
  for (let minutos = 0; minutos <= 30; minutos += 30) {
    const horaFormateada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    horaSelector.push(horaFormateada);
  }
}