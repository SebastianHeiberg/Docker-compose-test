import mysql from 'mysql2/promise' 
import 'dotenv/config'

let connection = await mysql.createConnection({
    host: 'db', 
    user: 'user',
    database: 'db',
    password: 'password',
    port: 3306
  }) 

async function createCatsTableAndData() {
 
    const existsQuery = `select max(case when table_name = 'cats' then 1 else 0 end) as TableExists
    from information_schema.tables `

    const [rows] = await connection.query(existsQuery) 
    const created = rows[0].TableExists 
    
    if (!created) {

        console.log("creating database")

        const query = `
        CREATE TABLE IF NOT EXISTS cats (
        id INT AUTO_INCREMENT,
        name VARCHAR(100),
        age INT,
        breed VARCHAR(100),
        PRIMARY KEY (id)
        )
        ` 
        await connection.query(query) 

        const insertCatsQuery = `
        INSERT INTO cats (name, age, breed) VALUES
        ('Astrid', 9, 'Mixed'),
        ('My', 9, 'House Cat'),
        ('Fluffy', 3, 'Hairless')
        ` 

        await connection.query(insertCatsQuery) 

    } else {
        console.log("Database already created")
    }
}

createCatsTableAndData() 

export default connection 