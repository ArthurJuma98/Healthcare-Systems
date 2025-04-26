const Client = require('../models/Client');

exports.createClient = async (req, res) => {
    try {
        const Client = await Client.create(req.body);
        res.status(201).json(Client);
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
