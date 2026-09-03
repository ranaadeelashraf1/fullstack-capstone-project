require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3060;

app.use(cors());
app.use(express.json());

const giftRoutes = require('./routes/giftRoutes');
app.use('/api/gifts', giftRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
