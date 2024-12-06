import Provider from '../models/provider.model.js';

export const createProvider = async (req, res) => {
    const { nombre, correo, telefono, pais, servicio, estado } = req.body;

    const newProvider = new Provider({
        nombre,
        correo,
        telefono,
        pais,
        servicio,
        estado
    });

    const savedProvider = await newProvider.save();
    res.json(savedProvider);
};

export const readProviders = async (req, res) => {
    const providers = await Provider.find();
    res.json(providers);
};

export const readProvider = async (req, res) => {
    const provider = await Provider.findById(req.params.id);
    if (!provider) return res.status(404).json({ message: "Proveedor no encontrado" });
    res.json(provider);
};

export const updateProvider = async (req, res) => {
    const provider = await Provider.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!provider) return res.status(404).json({ message: "Proveedor no encontrado" });
    res.json(provider);
};

export const deleteProvider = async (req, res) => {
    const provider = await Provider.findByIdAndDelete(req.params.id);
    if (!provider) return res.status(404).json({ message: "Proveedor no encontrado" });
    return res.sendStatus(204);
};
