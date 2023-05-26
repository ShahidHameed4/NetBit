import SampleModel from '../models/SampleModel.js'


const create = async (req, res) => {

    try {
        const sample = await SampleModel.create(req.body);
        res.status(200).json(sample);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


