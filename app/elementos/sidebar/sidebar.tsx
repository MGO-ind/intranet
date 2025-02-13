import { AccountToggle } from "./accounToggle";
import { Plan } from "./plan";
import { RouteSelect } from "./routeSelect";

export default function SideBar() {

  return (
<>
      <div className="overflow-y bg-black text-white sticky top-4 h-[calc(100vh-32px-48px)]" >
        <AccountToggle/>
       <RouteSelect/>
    </div>
    <Plan/>
    </>


  );
}
