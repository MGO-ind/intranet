import { FiCalendar } from "react-icons/fi";

export const TopBar = () => {
  const currentDate = new Date().toLocaleDateString();
  
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
    <div className="flex items-center justify-between p-0.5">
      <div>
        <span className="text-sm font-bold block">🚀 Buen día, Name!</span>
        <span className="text-xs block text-stone-200">
        <time dateTime={currentDate}>{currentDate}</time>
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
