import Client from '../models/client.model.js';

export const createClient = async (req, res) => {
    const { nombre, correo, telefono, pais, servicio, estado } = req.body;

    const newClient = new Client({
        nombre,
        correo,
        telefono,
        pais,
        servicio,
        estado
    });

    const savedClient = await newClient.save();
    res.json(savedClient);
};

export const readClient = async (req, res) => {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json(client);
};

export const updateClient = async (req, res) => {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!client) return res.status(404).json({ message: "Cliente no encontrado" });
    res.json(client);
};

export const deleteClient = async (req, res) => {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) return res.status(404).json({ message: "Cliente no encontrado" });
    return res.sendStatus(204);
};

export const readClients = async (req, res) => {
    try {
        // Extraer parámetros de consulta
        const { pais, servicio, estado } = req.query;

        // Crear un objeto de filtro dinámico
        const filters = {};
        if (pais) filters.pais = pais;               // Filtrar por país si se especifica
        if (servicio) filters.servicio = servicio;   // Filtrar por servicio si se especifica
        if (estado) filters.estado = estado;         // Filtrar por estado si se especifica

        // Buscar clientes con los filtros aplicados
        const clients = await Client.find(filters);

        res.json(clients); // Retornar los clientes encontrados
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los clientes", error });
    }
};

export const countClientsByState = async (req, res) => {
    try {
        const counts = await Client.aggregate([
            { $group: { _id: "$estado", count: { $sum: 1 } } }
        ]);

        res.json(counts);
    } catch (error) {
        res.status(500).json({ message: "Error al contar clientes por estado", error });
    }
};
