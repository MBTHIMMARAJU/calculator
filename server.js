const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json());
let history = [];
// POST /calculate
app.post('/calculate', (req, res) => {
  const { input, output } = req.body;
  const entry = { input, output, time: new Date() };
  history.push(entry);
  // Optionally save to file
  fs.writeFileSync('server/history.json', JSON.stringify(history, null, 2));
  res.send({ message: 'Saved' });
});
// GET /history
app.get('/history', (req, res) => {
  res.json(history);
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 