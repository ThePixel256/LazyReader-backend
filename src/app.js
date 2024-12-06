import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors';

import authRoutes from "./routes/auth.routes.js";
import clientRoutes from "./routes/client.routes.js";
import taskRoutes from './routes/task.routes.js'
import bookRoutes from './routes/book.routers.js'
import providerRoutes from './routes/provider.routers.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api/tasks',taskRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/clients', clientRoutes)
app.use('/api/providers', providerRoutes)
app.use('/api/books', bookRoutes)

app.get('/', (req, res) => {
    res.send('<h1> Hola Estas en el Proyecto LazyReader</h1>')
})

export default app