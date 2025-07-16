const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/ideas', async (req, res) => {
  try {
    const response = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas', {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Proxy failed', detail: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running at http://localhost:${PORT}`);
});