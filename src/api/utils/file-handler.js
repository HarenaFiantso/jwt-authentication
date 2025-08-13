import fs from "fs";
import path from "path";

const readData = (fileName) => {
  const filePath = path.join(process.cwd(), "src", "api", "data", fileName);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

const writeData = (fileName, data) => {
  const filePath = path.join(process.cwd(), "src", "api", "data", fileName);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export { readData, writeData }
