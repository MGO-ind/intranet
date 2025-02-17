
//import { neon } from '@neondatabase/serverless';

export default function Page() {
  /*async function create(formData: FormData) {
    'use server';
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const costofletes = formData.get('costofletes');
    await sql('SELECT * FROM costofletes');*/
    // Insert the comment from the form into the Postgres database
    //await sql('INSERT INTO costofletes (costofletes) VALUES ($1)', [costofletes]);
  //}

  return (
    <form >
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}