import Swal from 'sweetalert2'

export const BrownsvilleLeonFull = () => {
    const copiarValor=()=>{
        const precio = document.createElement("input");
        precio.setAttribute("value", "73350");
        document.body.appendChild(precio);
        precio.select();
        document.execCommand("copy");
        document.body.removeChild(precio);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Se ah copiado correctamente",
            showConfirmButton: false,
            timer: 1500,
            color: "white",
            background: "black",
            customClass: {
                popup: 'border-radius-0'
              }
            });
        //alert("funciona")
    }

    return (
       
        <div>
            <label className="">Precio Cliente:   $
                <input className="bg-stone-900 rounded-full text-sm sm:text-base h-8 sm:h-10 px-2 sm:px-5 m-2" 
                name="input" 
                type="number"
                value={73350}
                readOnly
                />
            </label>
            <button className="rounded-full border-green-300 border  transition-colors hover:bg-green-500 dark:bg-green-700 text-sm sm:text-base h-8 w-full sm:h-10 px-2 sm:px-5 m-2" onClick={copiarValor}>Copiar Resultado</button>
        </div>
                    
    );
};