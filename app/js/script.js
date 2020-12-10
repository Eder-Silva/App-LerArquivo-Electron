//carregar a biblioteca(módulo) electron
const electron = require("electron");
const fs = require("fs");
const { app, ipcMain, dialog } = electron;

function ipcOn(mainWindow) {
  this.mainWindow = mainWindow;
  ipcMain.on("teste", async (event) => {
    let filePath = await dialog.showOpenDialog(mainWindow, {
      properties: ["openFile"],
    });
    if (filePath.canceled == true) return;
    let caminho = filePath.filePaths;

    fs.readFile(caminho.toString(), { encoding: "utf-8" }, (erro, dados) => {
      if (erro) console.log("Aconteceu um erro!");
      else console.log(dados);
    });
  });
}

module.exports = ipcOn;
