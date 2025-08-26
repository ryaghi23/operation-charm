const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'html')));
app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'html', 'add.html'))); // change file if needed

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
