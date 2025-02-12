import { Cotizador } from "../elementos/cotizador/cotizador";

export default function Home() {
    return (
      
      <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
       <Cotizador/>
      </main>   
    );
  }