import getFilesAndFolders from '../../../utils/fileUtils';
import path from 'path';

export async function GET(request) {
  const publicDir = path.join(process.cwd(), 'public');
  const fileStructure = getFilesAndFolders(publicDir);
  return Response.json(fileStructure);
}