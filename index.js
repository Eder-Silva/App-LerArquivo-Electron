//carregar a biblioteca(módulo) electron
const electron = require("electron");
const fs = require("fs");
let ipcon = require("./app/js/script");

//processo principal da aplicação
//ipcMain Comunica de forma assíncrona o processo principal aos processos de renderização.
const { app, BrowserWindow, ipcMain, dialog } = electron;

//evento para quando o elemento app estiver pronto
app.on("ready", () => {
  //criar uma janela principal
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  //carregar a url index.html que está no diretorio atual
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  ipcon(mainWindow);
});
