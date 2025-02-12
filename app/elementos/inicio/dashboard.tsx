"use client"

import { Grid } from "./grid";
import { TopBar } from "./topbar";

export function Dashboard() {
    return(
        <div className="bg-zinc-700 rounded-3xl pb-4 shadow h-auto">
            <TopBar/>
            <Grid/>
  
            
        </div>

    );
};
