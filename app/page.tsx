import SideBar from "./elementos/sidebar/sidebar";
import { Dashboard } from "./elementos/inicio/dashboard";
import { neon } from '@neondatabase/serverless';

export default function Home() {
  async function create(formData: FormData) {
    'use server';
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment1 = formData.get('comment');
   
    // Insert the comment from the form into the Postgres database
    await sql('INSERT INTO comments (comment) VALUES ($1)', [comment1]);
  }
  console.log("asd");
  return (
    <main className="grid bg-black text-white gap-4 p-4 grid-cols-[220px,_1fr]">
      <SideBar />
      <Dashboard />
      <form action={create}>
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
    </main> 
    
  );
}
