const { dialog } = require("electron");
const percorrer = (dados) => {
  if (dados === undefined) return;

  let linhas = dados.split(/\n/);
  //Percorrer linha por linha do arquivo.
  linhas.forEach((linha) => {
    const options = {
      type: "info",
      title: "Informações do arquivo",
      message: linha,
    };

    dialog.showMessageBox(options);
  });
};
module.exports = { percorrer };
