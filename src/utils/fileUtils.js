import fs from 'fs';
import path from 'path';

const getFilesAndFolders = (dirPath) => {
  const items = [];
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      items.push({
        name: file,
        path: filePath,
        isFolder: true,
        children: getFilesAndFolders(filePath)
      });
    } else {
      items.push({
        name: file,
        path: filePath,
        isFolder: false
      });
    }
  });

  return items;
};

export default getFilesAndFolders;
