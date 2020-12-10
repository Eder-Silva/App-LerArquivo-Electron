const { ipcRenderer } = require("electron");

document.querySelector("#btn").addEventListener("click", (event) => {
  //inibir o comportamento padrão de envio do formulário
  event.preventDefault();

  ipcRenderer.send("teste");
});
