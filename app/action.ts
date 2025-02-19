"use server"
import { neon } from "@neondatabase/serverless";

    export async function insertCostoFlete(formData: FormData) {
        'use server';
        // Connect to the Neon database
        const sql = neon(`${process.env.DATABASE_URL}`);
        
        const origen = formData.get('origen');
        const destino = formData.get('destino');
        const tallaenvio = formData.get('tallaenvio');
        const costo = formData.get('costo');
        const paqueteria = formData.get('paqueteria');
       
        // Insert the comment from the form into the Postgres database
        await sql('INSERT INTO costofletes (origen, destino, tallaenvio, costo, id_paqueteria) VALUES ($1,$2,$3,$4,$5)', [origen,destino,tallaenvio,costo,paqueteria]);
      }

      export async function getData() {
        const sql = neon(`${process.env.DATABASE_URL}`);
        const data = await sql`SELECT * FROM costofletes`;
        return data;
    }


