'use server';
import { neon } from '@neondatabase/serverless';

import { AiFillCalculator } from "react-icons/ai";

export async function FormularioCostos() {
  async function create({ formData }: { formData: FormData; }) {

    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const costofletes = formData.get('costofletes');
    await sql ('INSERT INTO costofletes(origen) VALUES ($1)', [costofletes]) 


    //await sql('INSERT INTO costofletes (costofletes) VALUES ($1)', [costofletes]);
  }

  return (
    <div className="col-span-4 rounded-3xl bg-zinc-800 border border-stone-500 shadow-lg h-[auto] sm:h-auto overflow-y-scroll scrollbar-thin">
                <div className="p-4">
                    <h3 className="flex items-center gap-1.5 font-medium">
                        <AiFillCalculator /> Insertar un Costo
                    </h3>
                </div>
                <form >
      <input type="text" placeholder="write a comment" name="costofletes" />
      <button type="submit">Submit</button>
    </form>
    </div>
    
  );
}