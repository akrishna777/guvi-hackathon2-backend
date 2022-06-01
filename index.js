import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import moviesRoutes from './Routes/Movies.js'
import userRoutes from './Routes/users.js'

import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/movies', moviesRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to Bookmyshow API')
})

// const CONNECTION_URL =
//   'mongodb+srv://bookmyshow:bookmyshow123@cluster0.tgh9n.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)),
  )
  .catch((error) => console.log(error))
