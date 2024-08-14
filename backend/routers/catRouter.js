import connection from "../database/connect.js"
import { Router } from "express" 

const router = Router()
 
router.get('/cats', async (req, res) => {
  console.log(connection)
  const query = 'SELECT * FROM cats' 
  try{
  const result = await connection.query(query)

  res.send({data: result}) 
  } catch(err) {
      console.error('Error getting cats:', err) 
      res.status(500).send({data: 'Error getting cats'})      
    }
}) 

export default router 