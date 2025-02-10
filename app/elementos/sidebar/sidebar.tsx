
import { AccountToggle } from "./accounToggle";
import { Plan } from "./plan";
import { RouteSelect } from "./routeSelect";
import { Search } from "./search";

export default function SideBar() {

  return (
    <div className="font-[family-name:var(--font-geist-mono)]">
      <div className="overflow-y sticky top-4 h-[calc(100vh-32px-48px)]" >
        <AccountToggle/>
        <Search/>
        <RouteSelect/>
      </div>
      <Plan/>
    </div>

  );
}
