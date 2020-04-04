import express from 'express'
import path from 'path'
import * as mock from './mockData'
const app = express()
const port = 3030
const mockData = mock.mockRelease

app.get("/repos/:owner/:repo/releases",(_,res)=>{
    res.send(mockData)
})

app.get("/:owner/:repo/releases/download/:tag/:file",(req,res)=>{
    const fileName = req.params.file
    const tag = req.params.tag
    res.download(path.join(__dirname,`/public/${tag}/${fileName}`))
})

app.listen(port,err => {
    if(err){
        console.log("Error",err)
    }
    return console.log(`http://localhost:${port}`)
})