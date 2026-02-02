function getVentas() {
  return JSON.parse(localStorage.getItem("ventas") || "[]");
}

function saveVenta(venta) {
  let ventas = getVentas();
  ventas.push(venta);
  localStorage.setItem("ventas", JSON.stringify(ventas));
}

function ahora() {
  let d = new Date();
  return {
    fecha: d.toISOString().slice(0, 10),
    hora: d.toLocaleTimeString()
  };
}
