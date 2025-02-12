"use client"
import {  useState } from "react";
import { MonterreyQueretaroFull } from "./flete/monterrey/monterrey-queretaro-full";
import { MonterreyQueretaroJumbo } from "./flete/monterrey/monterrey-queretaro-jumbo";
import { MonterreyAguascalientesFull } from "./flete/monterrey/monterrey-aguascalientes-full";
import { MonterreyAguascalientesJumbo } from "./flete/monterrey/monterrey-aguascalientes-jumbo";
import { MonterreyLagosFull } from "./flete/monterrey/monterrey-lagos-full";
import { MonterreyLagosJumbo } from "./flete/monterrey/monterrey-lagos-jumbo";
import { MonterreySalamancaFull } from "./flete/monterrey/monterrey-salamanca-full";
import { MonterreySalamancaJumbo } from "./flete/monterrey/monterrey-salamanca-jumbo";
import { MonterreyLeonFull } from "./flete/monterrey/monterrey-leon-full";
import { MonterreyLeonJumbo } from "./flete/monterrey/monterrey-leon-jumbo";
import { MonterreyTizayucaFull } from "./flete/monterrey/monterrey-tizayuca-full";
import { MonterreyTizayucaJumbo } from "./flete/monterrey/monterrey-tizayuca-jumbo";
import { MonterreyGdlFull } from "./flete/monterrey/monterrey-guadalajara-full";
import { MonterreyGdlJumbo } from "./flete/monterrey/monterrey-guadalajara-jumbo";
import { MonterreyCdmxFull } from "./flete/monterrey/monterrey-cdmx-full";
import { MonterreyMazasFull } from "./flete/monterrey/monterrey-mazatlan-full";
import { MonterreyAMazaJumbo } from "./flete/monterrey/monterrey-mazatlan-jumbo";

export const OrigenMonterrey = () => {
    const  [ values, setValues ] = useState({
        selectOrigenMonterrey:"",

        });
    const [ origen , setselected ]=useState({
        selectOrigenMonterrey:"",
    })

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
                name="selectOrigenMonterrey"
                onChange={handleChange}
                >
                    <option>
                        Seleccione una opcion
                    </option>
                    <option>
                        Aguascalientes-Jumbo
                    </option>
                    <option>
                        Aguascalientes-Full
                    </option>
                    <option>
                        Ciudad de México-Jumbo
                    </option>  
                    <option>
                        Ciudad de México-Full
                    </option>
                    <option>
                        Lagos de Moreno-Jumbo
                    </option>   
                    <option>
                        Lagos de Moreno-Full
                    </option>
                    <option>
                        León-Jumbo
                    </option>
                    <option>
                        León-Full
                    </option>
                    <option>
                        Guadalajara-Jumbo
                    </option>             
                    <option>
                        Guadalajara-Full
                    </option>
                    <option>
                        Mazatlán-Jumbo
                    </option>              
                    <option>
                        Mazatlán-Full
                    </option>
                    <option>
                        Querétaro-Jumbo
                    </option>         
                    <option>
                        Querétaro-Full
                    </option>
                    <option>
                        SalamancaJmbo
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
                    
            </select>
        </div>
        <div className="col-span-6">
            {origen == "Querétaro-Full"?<MonterreyQueretaroFull/>:""}
            {origen == "Querétaro-Jumbo"?<MonterreyQueretaroJumbo/>:""}
            {origen == "Aguascalientes-Full"?<MonterreyAguascalientesFull/>:""}
            {origen == "Aguascalientes-Jumbo"?<MonterreyAguascalientesJumbo/>:""}
            {origen == "Lagos de Moreno-Full"?<MonterreyLagosFull/>:""}
            {origen == "Lagos de Moreno-Jumbo"?<MonterreyLagosJumbo/>:""}
            {origen == "Salamanca-Full"?<MonterreySalamancaFull/>:""}
            {origen == "Salamanca-Jumbo"?<MonterreySalamancaJumbo/>:""}
            {origen == "León-Full"?<MonterreyLeonFull/>:""}
            {origen == "León-Jumbo"?<MonterreyLeonJumbo/>:""}
            {origen == "Tizayuca-Full"?<MonterreyTizayucaFull/>:""}
            {origen == "Tizayuca-Jumbo"?<MonterreyTizayucaJumbo/>:""}
            {origen == "Guadalajara-Full"?<MonterreyGdlFull/>:""}
            {origen == "Guadalajara-Jumbo"?<MonterreyGdlJumbo/>:""}
            {origen == "Ciudad de México-Full"?<MonterreyCdmxFull/>:""}
            {origen == "Ciudad de México-Jumbo"?<MonterreyGdlJumbo/>:""}
            {origen == "Mazatlán-Full"?<MonterreyMazasFull/>:""}
            {origen == "Mazatlán-Jumbo"?<MonterreyAMazaJumbo/>:""}
        </div>          
    </div>
                    
    );
};

