const express=require('express')
require('./util/database')
const app=express()
const router=require('./routes/userRoutes')
const port=process.env.PORT || 5000

app.use(express.json())

app.use('/',router)


app.listen(port,()=>{
    console.log(`server is running at port no ${port} `)
})