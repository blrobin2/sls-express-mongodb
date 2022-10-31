const express = require('express')
const escape = require('lodash.escape')

const notesController = express.Router()
const Note = require('./note')

notesController
  .post('/', async (req, res) => {
    const note = await Note.create(req.body)
    const escapedNote = escape(note)
    res.status(200).send(escapedNote)
  })
  .put('/:id', async (req, res) => {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { $upsert: true, new: true }
    )
    const escapedNote = escape(note)
    res.status(200).send(escapedNote)
  })
  .get('/', async (req, res) => {
    const notes = await Note.find()
    const escapedNotes = escape(notes)
    res.status(200).send(escapedNotes)
  })
  .get('/:id', async (req, res) => {
    const note = await Note.findById(req.params.id)
    const escapedNote = escape(note)
    res.status(200).send(escapedNote)
  })
  .delete('/:id', async (req, res) => {
    const note = await Note.deleteOne({ _id: req.params.id })
    const escapedNote = escape(note)
    res.status(200).send(escapedNote)
  })

module.exports = notesController