import Book from '../models/book.model.js';

export const createBook = async (req, res) => {
    const { titulo, autor, genero, fechaPublicacion, descripcion, estado } = req.body;

    const newBook = new Book({
        titulo,
        autor,
        genero,
        fechaPublicacion,
        descripcion,
        estado
    });

    const savedBook = await newBook.save();
    res.json(savedBook);
};

export const readBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

export const readBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    res.json(book);
};

export const updateBook = async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    res.json(book);
};

export const deleteBook = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    return res.sendStatus(204);
};
