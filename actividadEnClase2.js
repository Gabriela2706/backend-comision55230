import fs from "fs";

const data = new Date();
const hora = data.toLocaleTimeString();
const dia = data.toLocaleDateString();
const fyd = `Hoy es ${dia} y son las ${hora}`;
const path = "./texto.txt";

fs.writeFile(path, fyd, (error) => {
  if (error) return console.log(error);
});
fs.readFile(path, "utf-8", (error, result) => {
  if (error) return console.log(error);

  console.log(`Logrado: ${result}`);
});
