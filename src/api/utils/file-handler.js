import fs from "fs"
import path from "path";

const readData = (filename) => {
  const filePath = path.join(process.cwd(), "src", "api", "data", filename)
  return JSON.parse(fs.readFileSync(filePath, "utf-8"))
};

const writeData = () => { };

export { readData, writeData }
