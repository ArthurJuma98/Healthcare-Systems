const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const clientRoutes = require('./routes/clientRoutes');
const programRoutes = require('./routes/programRoutes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/clients', clientRoutes);
app.use('/api/programs', programRoutes);

app.get('/', (req, res) => {
  res.send('Health Information System API');
});

module.exports = app;