const { app, BrowserWindow } = require("electron");
//carregar o ipc.js
const IPC = require("./public/javascript/backend/ipc.js");

app.on("ready", () => {
  //criar uma janela principal
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  //carregar a url index.html que está no diretorio atual
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
