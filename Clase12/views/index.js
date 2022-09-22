const socket = io.connect();
function renderProducts(data) {
  const html = data.map(
    (product) =>
      `<tr>
        <th scope="row">${product.id}</th>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td><img
        rel="icon"
        src="${product.image}"
        style="width: 30px; height: 30px;"
        />
        </td>
      </tr>`
  );
  document.getElementById("products").innerHTML = html;
}
function renderMessage(data) {
  const html = data
    .map(
      (msg) => `<li class="clearfix">
  <div class="message-data">
    <span class="message-data-time">${msg.autor}</span>
  </div>
  <div class="message my-message">${msg.msj}</div>
  </li>`
    )
    .join(" ");

  document.getElementById("message").innerHTML = html;
}

function enviarMensaje(event) {
  const name = document.getElementById("name").value;
  const msj = document.getElementById("chat_message").value;
  document.getElementById("chat_message").value = "";
  socket.emit("new_msg", { autor: name, msj: msj });
  return false;
}

socket.on("mensajes", (data) => {
  console.log(data);
  renderMessage(data);
});

socket.on("products", (data) => {
  console.log(data);
  renderProducts(data);
});
