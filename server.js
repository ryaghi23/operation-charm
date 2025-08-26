const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// serve everything under /html
app.use(express.static(path.join(__dirname, 'html')));

// choose a homepage inside /html (change 'add.html' if you want another)
app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'html', 'add.html')));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
