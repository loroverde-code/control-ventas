function ventasPorFecha(fecha) {
  return getVentas().filter(v => v.fecha === fecha);
}

function resumenDia(fecha) {
  let ventas = ventasPorFecha(fecha);
  let total = 0;
  let ganancia = 0;

  ventas.forEach(v => {
    total += Number(v.total);
    ganancia += Number(v.ganancia);
  });

  return { ventas, total, ganancia };
}
