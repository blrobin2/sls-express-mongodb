const express = require('express')
const notesController = express.Router()
const Note = require('./note')

notesController
  .post('/', async (req, res) => {
    const note = await Note.create(req.body)
    res.status(200).send(note)
  })
  .put('/:id', async (req, res) => {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { $upsert: true, new: true }
    )
    res.status(200).send(note)
  })
  .get('/', async (req, res) => {
    const notes = await Note.find()
    res.status(200).send(notes)
  })
  .get('/:id', async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.status(200).send(note)
  })
  .delete('/:id', async (req, res) => {
    const note = await Note.deleteOne({ _id: req.params.id })
    res.status(200).send(note)
  })

module.exports = notesController