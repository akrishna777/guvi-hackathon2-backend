import express from 'express'

import {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from '../Controllers/Movies.js'

import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getMovies)
router.post('/', auth, createMovie)
router.patch('/:id', auth, updateMovie)
router.delete('/:id', auth, deleteMovie)

export default router
