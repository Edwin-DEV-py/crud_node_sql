import {createPool} from 'mysql2/promise'; //para produccion

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'nodedb'
})

//pool.query() para consultas