"use client"
import {  useState } from "react";
import { LeonAguasFull } from "./flete/Leon/leon-aguascalientes-full";
import { LeonAguasJumbo } from "./flete/Leon/leon-aguascalientes-jumbo";
import { LeonCdmxFull } from "./flete/Leon/leon-cdmx-full";
import { LeonCdmxJumbo } from "./flete/Leon/leon-cdmx-jumbo";
import { LeonGdlFull } from "./flete/Leon/leon-gdl-full";
import { LeonGdlJumbo } from "./flete/Leon/leon-gdl-jumbo";
import { LeonLagosFull } from "./flete/Leon/leon-lagos-full";
import { LeonLagosJumbo } from "./flete/Leon/leon-lagos-jumbo";
import { LeonMazaFull } from "./flete/Leon/leon-maza-full";
import { LeonMazaJumbo } from "./flete/Leon/leon-maza-jumbo";
import { LeonMtyFull } from "./flete/Leon/leon-monterrey-full";
import { LeonMtyJumbo } from "./flete/Leon/leon-monterrey-jumbo";
import { LeonQroFull } from "./flete/Leon/leon-qro-full";
import { LeonQroJumbo } from "./flete/Leon/leon-qro-jumbo";
import { LeonSalamancaFull } from "./flete/Leon/leon-salamanca-full";
import { LeonSalamancaJumbo } from "./flete/Leon/leon-salamanca-jumbo";
import { LeonTizaFull } from "./flete/Leon/leon-tizayuca-full";
import { LeonTizaJumbo } from "./flete/Leon/leon-tizayuca-jumbo";

export const OrigenLeon = () => {
    const  [ values, setValues ] = useState({
            selectOrigenLeon:"",
    
            });
        const [ origen , setselected ]=useState({
            selectOrigenLeon:"",
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
                name="selectOrigenLeon"
                onChange={handleChange}>
                    <option>
                        Seleccione una opcion
                    </option>
                    <option>
                        Monterrey-Jumbo
                    </option>
                    <option>
                        Monterrey-Full
                    </option>
                    <option>
                        Querétaro-Jumbo
                    </option>
                    <option>
                        Querétaro-Full
                    </option>
                    <option>
                        Aguascalientes-Jumbo
                    </option>
                    <option>
                        Aguascalientes-Full
                    </option>
                    <option>
                        Lagos de Moreno-Jumbo
                    </option>
                    <option>
                        Lagos de Moreno-Full
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
                        Guadalajara-Jumbo
                    </option>
                    <option>
                        Guadalajara-Full
                    </option>
                    <option>
                        Ciudad de México-Jumbo
                    </option>
                    <option>
                        Ciudad de México-Full
                    </option>
                    <option>
                        Mazatlán-Jumbo
                    </option>
                    <option>
                        Mazatlán-Full
                    </option>
                </select>
            </div>
            <div className="col-span-6">
                {origen == "Querétaro-Full"?<LeonQroFull/>:""}
                {origen =="Querétaro-Jumbo"?<LeonQroJumbo/>:""}           
                {origen =="Monterrey-Jumbo"?<LeonMtyJumbo/>:""}
                {origen =="Monterrey-Full"?<LeonMtyFull/>:""}
                {origen =="Aguascalientes-Jumbo"?<LeonAguasJumbo/>:""}
                {origen =="Aguascalientes-Full"?<LeonAguasFull/>:""}                   
                {origen =="Lagos de Moreno-Jumbo"?<LeonLagosJumbo/>:""}                   
                {origen =="Lagos de Moreno-Full"?<LeonLagosFull/>:""}                   
                {origen =="Salamanca-Jumbo"?<LeonSalamancaJumbo/>:""}
                {origen =="Salamanca-Full"?<LeonSalamancaFull/>:""}                   
                {origen =="Tizayuca-Jumbo"?<LeonTizaJumbo/>:""}
                {origen =="Tizayuca-Full"?<LeonTizaFull/>:""}                  
                {origen =="Guadalajara-Jumbo"?<LeonGdlJumbo/>:""}                   
                {origen =="Guadalajara-Full"?<LeonGdlFull/>:""}                   
                {origen =="Ciudad de México-Jumbo"?<LeonCdmxJumbo/>:""}                   
                {origen =="Ciudad de México-Full"?<LeonCdmxFull/>:""}                   
                {origen =="Mazatlán-Jumbo"?<LeonMazaJumbo/>:""}
                {origen =="Mazatlán-Full"?<LeonMazaFull/>:""}
                    
                       
            </div>    
        </div>
                    
    );
};