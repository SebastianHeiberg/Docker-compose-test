import express from 'express' 
import cors from 'cors' 
const app = express() 

app.use(cors())

app.get('/', (req, res) => {
  res.send({data: "The backend is working"}) 
}) 


import catRouter from './routers/catRouter.js'
app.use(catRouter)

const port = process.env.PORT || 8000 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`) 
}) 