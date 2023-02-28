import postgres from 'postgres';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

const sqlParams: Object = {
    host: dotenv.HOST,
    port: dotenv.PORT,
    database: dotenv.DATABASE,
    username: dotenv.USERNAME,
    password: dotenv.PASSWORD
}

const sql: any = postgres(`postgres://postgres:Trenton2931@192.168.1.163:5432/hamilton`, sqlParams);

async function getAllRoads(){
    const xs = await sql`
        select * from planet_osm_roads limit 10;
    `;

    return xs;
}

export { sql, getAllRoads };