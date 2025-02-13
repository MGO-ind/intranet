import { FiCalendar } from "react-icons/fi";

export const TopBar = () => {
  const currentDat = new Date();
  const currentDate = currentDat.toLocaleDateString("en-US");
  
  
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
    <div className="flex items-center justify-between p-0.5">
      <div>
        <span className="text-sm font-bold block">🚀 Buen día, Name!</span>
        <span className="text-sm block text-stone-200">
        {currentDate}
        </span>
      </div>

      <button className="flex text-sm items-center gap-2 text-stone-900 bg-stone-100 transition-colors hover:bg-blue-100 hover:text-blue-800 px-3 py-1.5 rounded-full">
        <FiCalendar />
        <span>Historial</span>
      </button>
    </div>
  </div>
);

};
