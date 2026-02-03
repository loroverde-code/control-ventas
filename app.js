const app=document.getElementById("app");
let usuarioActual="admin";

function loginPantalla(){
  app.innerHTML=`
  <div class="card">
    <input id="u" placeholder="Usuario">
    <input id="p" type="password" placeholder="Contraseña">
    <button class="primary" onclick="entrar()">Entrar</button>
  </div>`;
}

function entrar(){
  if(login(u.value,p.value)){
    usuarioActual=u.value;
    menu();
  } else alert("Error");
}

function menu(){
  app.innerHTML=`
  <div class="card">
    <button class="primary" onclick="nuevaVenta()">➕ Venta</button>
    <button onclick="verReporte()">📊 Reporte</button>
    <button onclick="alert(analisisIA())">🧠 Análisis</button>
    <button onclick="exportarRespaldo()">📂 Respaldo</button>
  </div>`;
}

function nuevaVenta(){
  let f=now();
  let v={usuario:usuarioActual,tipo:"General",total:100,ganancia:30,...f};
  saveVenta(v);
  alertaGanancia(v.ganancia);
  imprimirTicket(v);
  alert("Venta guardada");
}

loginPantalla();
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
