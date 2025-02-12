"use client"
import {  useState } from "react";
import { BrownsvilleCdmxJumbo } from "./flete/Brownsville/brownsville-cdmx-jumbo";
import { BrownsvilleCdmxFull } from "./flete/Brownsville/brownsville-cdmx-full";
import { BrownsvilleLeonJumbo } from "./flete/Brownsville/brownsville-leon-jumbo";
import { BrownsvilleLeonFull } from "./flete/Brownsville/brownsville-leon-full";
import { BrownsvilleSalamancaJumbo } from "./flete/Brownsville/brownsville-salamanca-jumbo";
import { BrownsvilleSalamancaFull } from "./flete/Brownsville/brownsville-salamanca-full";
import { BrownsvilletizaJumbo } from "./flete/Brownsville/brownsville-tiza-jumbo";
import { BrownsvilleTizaFull } from "./flete/Brownsville/brownsville-tiza-full";
import { BrownsvilleQroJumbo } from "./flete/Brownsville/brownsville-qro-jumbo";
import { BrownsvilleQroFull } from "./flete/Brownsville/brownsville-qro-full";
import { BrownsvilleGdlJumbo } from "./flete/Brownsville/brownsville-gdl-jumbo";
import { BrownsvilleGdlFull } from "./flete/Brownsville/brownsville-gdl-full";
import { BrownsvilleMtyJumbo } from "./flete/Brownsville/brownsville-mty-jumbo";
import { BrownsvilleMtyFull } from "./flete/Brownsville/brownsville-mty-full";

export const OrigenBrownsville = () => {
    const  [ values, setValues ] = useState({
        selectOrigenBrownsville:"",
    });
    const [ origen , setselected ]=useState({
        selectOrigenBrownsville:"",
    });
        
    const handleChange = (event)=> {
        const { name, value }= event.target;
        setValues({
            ...values,
            [name]:value,    
        });
        setselected(event.target.value);

        console.log(value);
    };
        
        return (
           
            <div className="grid gap-3 grid-cols-12 px-4">
               <div className="col-span-6">
                    <label>Destino:</label>
                    <select className="text-black rounded-full text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 m-2" 
                    name="selectOrigenBrownsville"
                    onChange={handleChange}>
                        <option>
                            Seleccione una opcion
                        </option>
                        <option>
                            México-Jumbo
                        </option>
                        <option>
                            México-Full
                        </option>
                        <option>
                            León-Jumbo
                        </option>
                        <option>
                            León-Full
                        </option>
                        <option>
                            Salamanca-Jumbo
                        </option>
                        <option>
                            Salamanca-Full
                        </option>
                        <option>
                            Tizayuca-Jumbo
                        </option>
                        <option>
                            Tizayuca-Full
                        </option>
                        <option>
                            Querétaro-Jumbo
                        </option>
                        <option>
                            Querétaro-Full
                        </option>
                        <option>
                            Guadalajara-Jumbo
                        </option>
                        <option>
                            Guadalajara-Full
                        </option>
                        <option>
                            Monterrey-Jumbo
                        </option>
                        <option>
                            Monterrey-Full
                        </option>
                    </select>
                </div>
                <div className="col-span-6">
                  
                    {origen == "México-Jumbo"?<BrownsvilleCdmxJumbo/>:""}
                    {origen == "México-Full"?<BrownsvilleCdmxFull/>:""}
                    {origen == "León-Jumbo"?<BrownsvilleLeonJumbo/>:""}
                    {origen == "León-Full"?<BrownsvilleLeonFull/>:""}
                    {origen == "Salamanca-Jumbo"?<BrownsvilleSalamancaJumbo/>:""}
                    {origen == "Salamanca-Full"?<BrownsvilleSalamancaFull/>:""}
                    {origen == "Tizayuca-Jumbo"?<BrownsvilletizaJumbo/>:""}
                    {origen == "Tizayuca-Full"?<BrownsvilleTizaFull/>:""}
                    {origen == "Querétaro-Jumbo"?<BrownsvilleQroJumbo/>:""}
                    {origen == "Querétaro-Full"?<BrownsvilleQroFull/>:""}
                    {origen == "Guadalajara-Jumbo"?<BrownsvilleGdlJumbo/>:""}
                    {origen == "Guadalajara-Full"?<BrownsvilleGdlFull/>:""}
                    {origen == "Monterrey-Jumbo"?<BrownsvilleMtyJumbo/>:""}
                    {origen == "Monterrey-Full"?<BrownsvilleMtyFull/>:""}

                
                        
                           
                </div>    
            </div>
    
                    
    );
};