import { conversations } from "@/app/_components/chat/chat-data";
import { Input } from "@/components/ui/input";

const activeNow = [
  {
    id: "a1",
    name: "Marcus Thorne",
    initials: "MT",
    isOnline: true,
    color: "from-[#164f8f] to-[#3f8fd6]",
  },
  {
    id: "a2",
    name: "Zahra Hassan",
    initials: "ZH",
    isOnline: true,
    color: "from-[#b8682a] to-[#f1a15e]",
  },
  {
    id: "a3",
    name: "Julian Baek",
    initials: "JB",
    isOnline: false,
    color: "from-[#2a3646] to-[#5f6f81]",
  },
  {
    id: "a4",
    name: "Aria Montgomery",
    initials: "AM",
    isOnline: true,
    color: "from-[#5a2d8f] to-[#8f5ad4]",
  },
  {
    id: "a5",
    name: "Liam O'Neill",
    initials: "LO",
    isOnline: false,
    color: "from-[#19676d] to-[#3ea9af]",
  },
  {
    id: "a6",
    name: "Sienna Miller",
    initials: "SM",
    isOnline: true,
    color: "from-[#8e3d63] to-[#cc6a95]",
  },
];

function Avatar({ initials }: { initials?: string }) {
  if (initials) {
    return (
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#d9c2ff] text-sm font-semibold text-[#4d2e75]">
        {initials}
      </div>
    );
  }

  return (
    <div
      className="h-11 w-11 shrink-0 rounded-full bg-[linear-gradient(145deg,#1f3558,#2b6cb0)]"
      aria-hidden
    />
  );
}

export function ConversationList() {
  return (
    <section className="hidden h-full min-h-0 grid-cols-1 border-r border-[#d8dde6] bg-[#eff3f8] p-4 lg:grid lg:grid-rows-[auto_auto_minmax(0,1fr)_auto] lg:p-5">
      <h2 className="text-2xl font-semibold tracking-tight text-[#1f2a37] lg:text-3xl">
        Messages
      </h2>

      <div className="relative mt-4">
        <svg
          className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#708095]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M20.9999 21L17.3999 17.4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <Input
          type="search"
          placeholder="Search conversations..."
          className="h-11 pl-9"
          aria-label="Search conversations"
        />
      </div>

      <ul className="mt-5 min-h-0 space-y-2 overflow-y-auto pr-1">
        <div className="text-sm font-semibold text-[#364a63]">Active</div>
        <ul className="mt-3.5 flex gap-3 overflow-x-auto pb-1 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {activeNow.map((item) => (
            <li key={item.id} className="w-18 shrink-0">
              <button type="button" className="group w-full text-center">
                <div className="relative mx-auto w-fit">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-full bg-linear-to-br text-sm font-semibold text-white shadow-[0_8px_16px_rgba(28,48,78,0.24)] ${item.color}`}
                  >
                    {item.initials}
                  </div>
                  <span
                    className={`absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white ${
                      item.isOnline ? "bg-[#22c55e]" : "bg-[#bac7d8]"
                    }`}
                    aria-hidden
                  />
                </div>
                <p className="mt-2 truncate text-[11px] font-semibold text-[#364a63] group-hover:text-[#1a5ab3]">
                  {item.name}
                </p>
              </button>
            </li>
          ))}
        </ul>
        <div className="text-sm font-semibold text-[#364a63]">Chat</div>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <button
              type="button"
              className={`w-full rounded-2xl border px-3 py-3 text-left transition md:px-2.5 lg:px-3 ${
                conversation.active
                  ? "border-transparent bg-white shadow-[0_8px_18px_rgba(47,66,93,0.12)]"
                  : "border-transparent hover:bg-white/70"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Avatar initials={conversation.initials} />
                  {conversation.isOnline ? (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#eff3f8] bg-[#2ec768]" />
                  ) : null}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate text-[16px] font-semibold text-[#1f2a37]">
                      {conversation.name}
                    </p>
                    <p className="shrink-0 text-xs text-[#7a8698]">
                      {conversation.time}
                    </p>
                  </div>
                  <p className="mt-1 truncate text-sm text-[#657385]">
                    {conversation.preview}
                  </p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
