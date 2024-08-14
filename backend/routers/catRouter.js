import connection from "../database/connect.js"
import { Router } from "express";

const router = Router()
// Create a new cat
router.post('/cats', (req, res) => {
    const { name, age, breed } = req.body;
    const query = 'INSERT INTO cats (name, age, breed) VALUES (?, ?, ?)';
    connection.query(query, [name, age, breed], (error, results) => {
      if (error) {
        console.error('Error inserting new cat:', error);
        res.status(500).send({data: 'Error inserting new cat'});
      } else {
        res.status(201).send({data: `New cat created with ID: ${results.insertId}`});
      }
    });
  });
  
  // Get all cats
  router.get('/cats', (req, res) => {
    const query = 'SELECT * FROM cats';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error getting cats:', error);
        res.status(500).send({data: 'Error getting cats'});
      } else {
        res.send({data: results});
      }
    });
  });
  
  // Update a cat by ID
  router.put('/cats/:id', (req, res) => {
    const { name, age, breed } = req.body;
    const { id } = req.params;
    const query = 'UPDATE cats SET name = ?, age = ?, breed = ? WHERE id = ?';
    connection.query(query, [name, age, breed, id], (error) => {
      if (error) {
        console.error('Error updating cat:', error);
        res.status(500).send({data: 'Error updating cat'});
      } else {
        res.send({data: `Cat with ID ${id} updated successfully`});
      }
    });
  });
  
  // Delete a cat by ID
  router.delete('/cats/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM cats WHERE id = ?';
    connection.query(query, [id], (error) => {
      if (error) {
        console.error('Error deleting cat:', error);
        res.status(500).send({data: 'Error deleting cat'});
      } else {
        res.send({data: `Cat with ID ${id} deleted successfully`});
      }
    });
  });

  export default router;