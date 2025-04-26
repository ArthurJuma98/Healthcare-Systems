const Client = require('../models/Client');

exports.createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getClients = async (req, res) => {
  const { search } = req.query;
  const query = search ? { name: { $regex: search, $options: 'i' } } : {};
  const clients = await Client.find(query);
  res.json(clients);
};

exports.getClientProfile = async (req, res) => {
  const client = await Client.findById(req.params.id).populate('enrolledPrograms');
  if (!client) return res.status(404).json({ message: 'Client not found' });
  res.json(client);
};

exports.enrollClient = async (req, res) => {
  const { programIds } = req.body;
  const client = await Client.findById(req.params.id);
  if (!client) return res.status(404).json({ message: 'Client not found' });

  client.enrolledPrograms.push(...programIds);
  await client.save();
  res.json({ message: 'Client enrolled successfully', client });
};