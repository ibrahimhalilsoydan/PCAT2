import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 3000;

app.listen(port, () => {
  console.log(`sunucu ${port} portunda çalışıyor`);
});
