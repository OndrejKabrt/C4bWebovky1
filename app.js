import express from 'express'

import {getNotes, getNote, createNote, getUserList, getUser , getNoteBytitle,
     createUser, deletePost, deleteUser, updatePost, updateUser} from './database.js'


const app = express()

app.use(express.json())

/*app.use(cors());*/

app.get("/api/notes", async (req, res) => {
    try{
        const notes = await getNotes()
        res.send(notes)
    }
    catch (e){
         next(e)
    }
    
})

app.get("/api/note/:id", async(req, res) =>{
    try{
    const id = req.params.id
    const note = await getNote(id)
    res.send(note)
    }
    catch (e){
        next(e)
    }
})

app.post("/api/notes", async (req, res) =>{
    try{
    const {title, contents} = req.body
    const note = await createNote(title, contents)
    res.status(201).send(note)
    }
    catch (e){
        next(e)
    }

})

/*{ Ukazka vstupu pro pridani notu
    "title" : "Z thunderclienta",
    "contents" : "I have done this"
}*/

app.get("/api/users", async (req, res) => {
    try{
    const users = await getUserList()
    res.send(users)
    }
    catch (e){
        next(e)
    }
})

app.get("/api/user/:id", async(req, res) =>{
    try{
    const id = req.params.id
    const user = await getUser(id)
    res.send(user)
    }
    catch (e){
        next(e)
    }
})

app.get("/api/note/:title", async(req, res) =>{
    try{
    const title = req.params.title
    const note = await getNoteBytitle(title)
    res.send(user)
    }
    catch (e){
        next(e)
    }
})

app.post("/api/user", async (req, res) =>{
    try{
    const {username, password} = req.body
    const note = await createUser(username, password)
    res.status(201).send(note)
    }
    catch (e){
        next(e)
    }
})

app.delete("/api/post/:id", async (req,res) => {
    try{
    const id = req.params.id
    const response = await deletePost(id)
    res.send(response)
    }
    catch (e){
        next(e)
    }
})

app.delete("/api/user/:id", async (req,res) => {
    try{
    const id = req.params.id
    const response = await deleteUser(id)
    res.send(response)
    }
    catch (e){
        next(e)
    }
})

app.patch("/api/post" , async (req, res) => {
    try{
    const {id, content} = req.body
    const note = await updatePost(id, content)
    res.status(201).send(note)
    }
    catch (e){
        next(e)
    }
})

app.patch("/api/user" , async (req, res) => {
    try{
    const {id, content} = req.body
    const note = await updateUser(id, content)
    res.status(201).send(note)
    }
    catch (e){
        next(e)
    }
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => {
    return('Server is running on port 8080')
})

/*pro spusteni zadej node app.js*/