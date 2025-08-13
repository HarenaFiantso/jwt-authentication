import path from "path";
import fs from "fs"

const readData = (filename) => {
  const filepath = path.join(process.cwd(), "src", "api", "data", filename)
  return JSON.parse(fs.readFileSync(filepath))
};

const writeData = (filename, data) => {
  const filepath = path.join(process.cwd(), "src", "api", "data", filename);
  fs.writeFileSync(filepath, JSON.stringify(data))
};

export { readData, writeData };