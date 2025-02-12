import { CambioDolares } from "./cambio_dolares";
import { ConsultaFlete } from "./consultaFletes";

export const GridCotizador = () => {
    return (
      
      <>
    <div className="px-4 grid gap-3 grid-cols-12">
        <ConsultaFlete/>
        <CambioDolares/>
    </div>
    
    </>
    );
  };