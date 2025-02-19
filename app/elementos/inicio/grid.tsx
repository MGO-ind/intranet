import Footer from "../footer";
import FormularioCostos from "./formularioCostoFlete";
import {TablaCostoFlete} from "./tablaCostoFletes";

export const Grid = () => {
  return (
    <>
    <div className="px-4 grid gap-3 grid-cols-12">
    <FormularioCostos/>
    <TablaCostoFlete/>
    </div>
    <Footer/>
    </>

  );
};
