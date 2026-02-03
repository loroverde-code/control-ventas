const app = document.getElementById("app");

function pantallaLogin() {
  app.innerHTML = `
  <div class="card">
    <h3> Acceso</h3>
    <input id="pass" type="password" placeholder="Contraseña">
    <button onclick="entrar()">Entrar</button>
  </div>`;
}

function entrar() {
  if (login(pass.value)) menu();
  else alert("Contraseña incorrecta");
}

function menu() {
  app.innerHTML = `
  <div class="card">
    <button onclick="nuevaVenta()"> Nueva venta</button>
    <button class="secondary" onclick="historial()"> Historial</button>
    <button onclick="config()"> Configuración</button>
  </div>`;
}

function nuevaVenta() {
  app.innerHTML = `
  <div class="card">
    <h3>Nueva venta</h3>
    <input id="tipo" placeholder="Tipo de venta">
    <input id="total" type="number" placeholder="Total">
    <input id="ganancia" type="number" placeholder="Ganancia">
    <button onclick="guardar()">Guardar</button>
    <button onclick="menu()">⬅ Volver</button>
  </div>`;
}

function guardar() {
  let t = ahora();
  saveVenta({
    tipo: tipo.value,
    total: total.value,
    ganancia: ganancia.value,
    fecha: t.fecha,
    hora: t.hora
  });
  alert("Venta guardada");
  menu();
}

function historial() {
  app.innerHTML = `
  <div class="card">
    <input type="date" id="fecha" onchange="verDia()">
    <div id="lista"></div>
    <button onclick="menu()">⬅ Volver</button>
  </div>`;
}

function verDia() {
  let r = resumenDia(fecha.value);
  lista.innerHTML = `
    <p>Total: $${r.total}</p>
    <p>Ganancia: $${r.ganancia}</p>
  `;
  r.ventas.forEach(v => {
    lista.innerHTML += `
      <div class="card">
        ${v.hora}<br>
        ${v.tipo}<br>
        $${v.total}
      </div>`;
  });
}

function config() {
  app.innerHTML = `
  <div class="card">
    <h3>Cambiar contraseña</h3>
    <input id="old" type="password" placeholder="Actual">
    <input id="newp" type="password" placeholder="Nueva">
    <button onclick="cambiar()">Guardar</button>
    <button onclick="menu()">⬅ Volver</button>
  </div>`;
}

function cambiar() {
  if (changePassword(old.value, newp.value)) {
    alert("Contraseña cambiada");
    menu();
  } else alert("Error");
}

pantallaLogin();
