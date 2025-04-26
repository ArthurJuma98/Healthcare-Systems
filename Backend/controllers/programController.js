const program = require('../models/Program');

exports.createProgram = async (req, res) => {
    try {
        const program = await Progam.create(req.body);
        res.status(201).json(program);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

exports.getPrograms = async (req, res) => {
    const programs = await Program.find();
    res.json(programs);
  };