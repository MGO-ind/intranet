import { Cotizador } from "../elementos/cotizador/cotizador";
import SideBar from "../elementos/sidebar/sidebar";

export default function Home() {
    return (
      
      <main className="grid text-white gap-4 p-4 grid-cols-[220px,_1fr]">
        <SideBar/>
       <Cotizador/>
      </main>   
    );
  }