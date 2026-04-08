import { navItems } from "@/app/_components/chat/chat-data";

type LeftSidebarProps = {
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export function LeftSidebar({ activeTab, onTabChange }: LeftSidebarProps) {
  return (
    <aside className="flex h-full min-h-0 w-18 flex-col border-r border-[#d8dde6] bg-[#e8edf4] px-2 py-4 sm:w-20 sm:px-2.5 sm:py-5 lg:w-55 lg:px-4 lg:py-6">
      <div className="mb-4 flex items-center justify-center gap-0 lg:mb-7 lg:justify-start lg:gap-3">
        <div className="grid h-8 w-8 place-items-center rounded-xl bg-[#1461d2] px-2 text-white shadow-sm">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5H16.5C18.1569 4.5 19.5 5.84315 19.5 7.5V14.5C19.5 16.1569 18.1569 17.5 16.5 17.5H10.5L6.5 20V17.5H7.5C5.84315 17.5 4.5 16.1569 4.5 14.5V7.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="hidden lg:block">
          <p className="text-[28px] leading-[1.02] font-semibold tracking-tight text-[#1f2a37]">
            Chat
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6f7d90]">
            Active now
          </p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onTabChange(item.id)}
            className={`flex w-full items-center justify-center gap-0 rounded-xl px-2 py-2.5 text-sm font-semibold transition lg:justify-start lg:gap-2 lg:px-3 ${
              activeTab === item.id
                ? "bg-[#d6e4ff] text-[#0f55b9]"
                : "text-[#637186] hover:bg-[#dde5ef]"
            }`}
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/70 text-[10px] lg:h-5 lg:w-5">
              {item.label.slice(0, 1)}
            </span>
            <span className="hidden lg:inline">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="group relative mt-auto">
        <button
          type="button"
          className="w-full rounded-2xl bg-white/60 p-1.5 text-left transition hover:bg-white/80 focus-visible:ring-2 focus-visible:ring-[#9ebcf0] focus-visible:outline-none lg:p-2"
          aria-label="Open account menu"
        >
          <div className="flex items-center justify-center gap-2 lg:justify-start">
            <div className="h-8 w-8 rounded-full bg-[#1d354f]" />
            <div className="hidden min-w-0 lg:block">
              <p className="truncate text-[11px] font-semibold text-[#1f2a37]">
                Alex Rivera
              </p>
              <p className="truncate text-[10px] text-[#7a8698]">
                alex.rivera@ifluid.io
              </p>
            </div>
          </div>
        </button>

        <div className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 hidden w-50 translate-y-1 rounded-2xl border border-[#d8e0eb] bg-white p-2 opacity-0 shadow-[0_16px_28px_rgba(30,48,74,0.16)] transition-all duration-150 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 lg:block">
          <button
            type="button"
            onClick={() => onTabChange("settings")}
            className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-[#243850] transition hover:bg-[#edf3fb]"
          >
            <span>Settings</span>
            <span className="text-[#7b8ca1]">⌘,</span>
          </button>
          <button
            type="button"
            className="mt-1 flex w-full items-center rounded-xl px-3 py-2 text-sm font-semibold text-[#243850] transition hover:bg-[#edf3fb]"
          >
            Profile
          </button>
          <button
            type="button"
            className="mt-1 flex w-full items-center rounded-xl px-3 py-2 text-sm font-semibold text-[#243850] transition hover:bg-[#edf3fb]"
          >
            Support
          </button>
          <div className="my-1 h-px bg-[#e7edf5]" />
          <button
            type="button"
            className="flex w-full items-center rounded-xl px-3 py-2 text-sm font-semibold text-[#d14343] transition hover:bg-[#fff1f1]"
          >
            Log out
          </button>
        </div>
      </div>
    </aside>
  );
}
