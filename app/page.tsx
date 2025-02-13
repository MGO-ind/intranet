import SideBar from "./elementos/sidebar/sidebar";
import { Dashboard } from "./elementos/inicio/dashboard";

export default function Home() {
  return (
    <main className="grid bg-black text-white gap-4 p-4 grid-cols-[220px,_1fr]">
      <SideBar />
      <Dashboard />
    </main> 
    
  );
}
