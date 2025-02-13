"use client";

import React, { useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
import { CommandMenu } from "./commandMenu";

export const Search = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <div className="bg-stone-900 mb-4 relative rounded flex item-center px-2 py-1.5 text-sm">
            <FiSearch className="mr-2"/>
            <input
                onFocus={(e) => {
                    e.target.blur();
                    setOpen(true);
                }} 
            type="text" 
            placeholder="Buscar" 
            className="w-full bg-transparent placeholder:text-stone-300 focus:outline-none"/>
            <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-600 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
            <FiCommand/>K
            </span>
        </div>

        <CommandMenu open={open} setOpen={setOpen}        />
        </>
    );
}