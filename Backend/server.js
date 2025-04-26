const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`connected to server running on port ${port}...`));