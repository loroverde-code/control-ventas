function getVentas() {
  return JSON.parse(localStorage.getItem("ventas") || "[]");
}

function saveVenta(venta) {
  let ventas = getVentas();
  ventas.push(venta);
  localStorage.setItem("ventas", JSON.stringify(ventas));
}

function ahora() {
  const d = new Date();

  const año = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");

  return {
    fecha: `${año}-${mes}-${dia}`, // FECHA LOCAL CORRECTA
    hora: d.toLocaleTimeString()
  };
}
