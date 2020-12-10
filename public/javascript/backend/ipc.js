const { ipcMain, dialog } = require("electron");

//getPth é uma função para pegar o caminho(filePath) do arquivo
const { getPath } = require("./getPath.js");
//getFileContent é uma função para pegar o conteúdo do arquivo
const { getFileContent } = require("./getFileContent.js");
//percorrer é uma função do arquivo showTextByLine para percorrer e retornar o conteúdo do arquivo
const { percorrer } = require("./showTextByLine.js");

ipcMain.on("teste", async (event) => {
  // user choose the path of the choosen file
  // o usuário escolhe o caminho do arquivo escolhido
  let path = await getPath();
  let pathNotFound = path == undefined;
  if (pathNotFound) return;

  // verify if file has content
  // verifica se o arquivo tem conteúdo
  let fileContent = await getFileContent(path);
  let notContent = fileContent == undefined;
  if (notContent) return;

  // looping through text file
  // looping através do arquivo de texto
  percorrer(fileContent);
});
