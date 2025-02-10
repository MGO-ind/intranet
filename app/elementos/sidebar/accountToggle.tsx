import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; 

export const AccountToggle = () => {
    return (
        <>
        <div className="border-b mb-4 mt-2 pb-4 border-stone-200">
            <button className="flex p-0.5 hover:bg-slate-600 rounded transition-colors relative gap-2 w-full item-center">
                <img src="https://api.dicebear.com/9.x/notionists/svg" alt="avatar" className="size-8 rounded shrink-0 bg-sky-700 shadow"/>
                <div className="text-start">
                    <span className="text-sm font-bold block">
                        name
                    </span>
                    <span className="text-xs block">
                        email
                    </span>
                </div>
                <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs"/>
                <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs"/> 
            </button>
        </div>  
    </>

    );
}
