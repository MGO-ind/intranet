import React from "react";

import { GridTableInventarios } from "./grid_table";
import { TopBar } from "../inicio/topbar";

export function InventarioInicio() {
    return(
        <div className="bg-zinc-700 rounded-3xl pb-4 shadow h-auto">
            <TopBar/>
            <GridTableInventarios/>    
        </div>

    );
}