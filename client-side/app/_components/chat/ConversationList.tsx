import { conversations } from "@/app/_components/chat/chat-data";

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
    <section className="hidden h-full min-h-0 flex-col border-r border-[#d8dde6] bg-[#eff3f8] p-4 lg:flex lg:p-5">
      <h2 className="text-2xl font-semibold tracking-tight text-[#1f2a37] lg:text-3xl">
        Messages
      </h2>

      <div className="mt-4 flex h-11 items-center rounded-xl bg-[#dbe3ec] px-3 text-sm text-[#708095]">
        <svg
          className="mr-2 h-4 w-4"
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
        Search conversations...
      </div>

      <ul className="mt-5 min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
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
