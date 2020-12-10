const fs = require("fs");

const getFileContent = (caminho) => {
  let fileContent = fs.readFileSync(caminho, "utf-8");

  if (fileContent == undefined) return;
  return fileContent;
};

module.exports = { getFileContent };
