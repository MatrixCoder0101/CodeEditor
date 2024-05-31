import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('filePath');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return Response.json({ content: fileContent });
}

export async function POST(request) {
  const { filePath, content } = await request.json();
  fs.writeFileSync(filePath, content);
  return Response.json({ message: 'File saved successfully' });
}