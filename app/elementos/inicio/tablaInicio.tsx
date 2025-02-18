

export const FormularioCostos = () =>  {

  

  return (
    <div className="col-span-4 rounded-3xl bg-zinc-800 border border-stone-500 shadow-lg h-[auto] sm:h-auto overflow-y-scroll scrollbar-thin">
                <div className="p-4">
                    <h3 className="flex items-center gap-1.5 font-medium">
                        Insertar un Costo
                    </h3>
                </div>
                <form >
      <input type="text" placeholder="write a comment" name="costofletes" />
      <button type="submit">Submit</button>
    </form>
    </div>
    
  );
}