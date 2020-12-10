const { dialog } = require("electron");

const getPath = async () => {
  let filePath = await dialog.showOpenDialog(mainWindow, {
    properties: ["openFile"],
  });
  if (filePath.canceled == true) return;
  return filePath.filePaths[0];
};

module.exports = { getPath };
