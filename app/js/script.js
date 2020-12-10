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
      else {
        const options = {
          type: "info",
          buttons: ["Cancelar", "Confirmar"],
          defaultId: 2,
          title: "Informações do arquivo",
          message: dados,
          //sidetail: 'It does not really matter',
          checkboxLabel: "Remember my answer",
          checkboxChecked: true,
        };

        let resposta = dialog.showMessageBox(
          null,
          options,
          (response, checkboxChecked) => {
            console.log(response);
            console.log(checkboxChecked);
          }
        );
      }
    });
  });
}

module.exports = ipcOn;
