import express from 'express'

import {getNotes, getNote, createNote } from './database.js'


const app = express()

app.use(express.json())

/*app.use(cors());*/

app.get("/api/notes", async (req, res) => {
    const notes = await getNotes()
    res.send(notes)
})

app.get("/api/note/:id", async(req, res) =>{
    const id = req.params.id
    const note = await getNote(id)
    res.send(note)
})

app.post("/api/notes", async (req, res) =>{
    const {title, contents} = req.body
    const note = await createNote(title, contents)
    res.status(201).send(note)

})
/*{ Ukazka vstupu pro pridani notu
    "title" : "Z thunderclienta",
    "contents" : "I have done this"
}*/


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => {
    return('Server is running on port 8080')
})

/*pro spusteni zadej node app.js*/