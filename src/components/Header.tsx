import { Menu, Search, Bell } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b-(--border-detail) border-b-2">
      <div className="py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 text-(--primary-dark)">
          <span>
            <Menu width={18} height={18} strokeWidth={3} />
          </span>
          <h4 className="text-[20px] font-extrabold">Precision Editorial</h4>
        </div>

        <div className="flex items-center gap-4">
          <span className="w-8.5 h-8.5 flex items-center">
            <Search width={18} height={18} strokeWidth={3} />
          </span>
          <span className="w-8.5 h-8.5 flex items-center">
            <Bell width={18} height={18} strokeWidth={3} />
          </span>
        </div>
      </div>
    </header>
  );
}
