import { messages } from "@/app/_components/chat/chat-data";

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="grid h-8 w-8 place-items-center rounded-lg text-[#6f7d90] transition hover:bg-[#e7edf5] hover:text-[#2a3747] sm:h-9 sm:w-9"
    >
      {children}
    </button>
  );
}

function MessageStatusBadge({
  status,
}: {
  status: "sending" | "sent" | "received";
}) {
  if (status === "sending") {
    return <span className="h-4 w-4 rounded-full border border-[#8fa0b3]" />;
  }

  return (
    <span
      className={`grid h-4 w-4 place-items-center rounded-full ${
        status === "received" ? "bg-[#1461d2]" : "bg-[#8fa0b3]"
      }`}
      aria-label={status}
    >
      <svg
        className="h-2.5 w-2.5 text-white"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M3.5 8.5L6.5 11.5L12.5 5.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function MessagePanel() {
  return (
    <section className="flex h-full min-h-0 min-w-0 flex-col bg-[#eef2f7]">
      <header className="flex items-center justify-between border-b border-[#d8dde6] px-3 py-2.5 sm:px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full bg-[linear-gradient(145deg,#2f4866,#f98b2d)] sm:h-11 sm:w-11">
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#eef2f7] bg-[#2ec768]" />
          </div>
          <div>
            <p className="text-[15px] font-semibold text-[#0f1c2b] sm:text-base md:text-lg">
              Lumina AI
            </p>
            <p className="text-[11px] font-semibold text-[#2d73d4]">Online</p>
          </div>
        </div>

        <div className="flex items-center gap-0.5 sm:gap-1">
          <IconButton>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M14.25 10.5L18.5 7.75C19.163 7.321 20 7.797 20 8.585V15.415C20 16.203 19.163 16.679 18.5 16.25L14.25 13.5V10.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <rect
                x="4"
                y="6"
                width="10.25"
                height="12"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </IconButton>
          <IconButton>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M18 10.5C18 14.0899 15.0899 17 11.5 17C7.91015 17 5 14.0899 5 10.5C5 6.91015 7.91015 4 11.5 4C15.0899 4 18 6.91015 18 10.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M18.5 15.5L21 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </IconButton>
          <IconButton>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <circle cx="12" cy="6" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <circle cx="12" cy="18" r="1.5" fill="currentColor" />
            </svg>
          </IconButton>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4 sm:px-4 sm:py-5 md:px-8 md:py-6">
        <div className="mx-auto max-w-3xl space-y-5">
          <p className="mx-auto w-fit rounded-full bg-[#e0e6ef] px-4 py-1 text-xs font-semibold tracking-[0.08em] text-[#7b8797]">
            TODAY
          </p>

          {messages.map((message) => (
            <div
              key={message.id}
              className={
                message.sender === "me"
                  ? "ml-auto max-w-[80%]"
                  : "mr-auto max-w-[80%]"
              }
            >
              <div
                className={`rounded-2xl px-4 py-3.5 text-[15px] leading-relaxed shadow-[0_6px_15px_rgba(67,84,108,0.1)] sm:px-5 sm:py-4 sm:text-[16px] md:text-[17px] ${
                  message.sender === "me"
                    ? "rounded-tr-md bg-[#1763ce] text-white"
                    : "rounded-tl-md bg-[#dde4ed] text-[#1e2a38]"
                }`}
              >
                {message.text}

                {message.imageUrl ? (
                  <div className="mt-4 h-47.5 overflow-hidden rounded-xl border border-white/20 bg-[#10131a] p-3">
                    <div className="h-full w-full rounded-md bg-[radial-gradient(circle_at_top_left,#2f3644_0%,#0f131b_60%)]" />
                  </div>
                ) : null}
              </div>

              <div
                className={`mt-2 flex items-center gap-1.5 text-sm text-[#657385] ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <span>{message.time}</span>
                {message.sender === "me" && message.status ? (
                  <MessageStatusBadge status={message.status} />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 border-t border-[#d8dde6] bg-[#eef2f7] px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5">
        <div className="mx-auto flex max-w-3xl items-center gap-1.5 rounded-2xl border border-[#d5dce6] bg-white px-2 py-1.5 shadow-sm sm:gap-2 sm:px-3 sm:py-2">
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-lg text-[#6f7d90] transition hover:bg-[#eef3fa] sm:h-9 sm:w-9"
            aria-label="Attach"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M20.5 11.5L12.2 19.8C10.2465 21.7535 7.07969 21.7535 5.12617 19.8C3.17265 17.8465 3.17265 14.6797 5.12617 12.7262L13.4262 4.42617C14.7289 3.12349 16.8411 3.12349 18.1438 4.42617C19.4465 5.72886 19.4465 7.8411 18.1438 9.14379L9.84379 17.4438C9.19245 18.0951 8.13634 18.0951 7.48501 17.4438C6.83367 16.7924 6.83367 15.7363 7.48501 15.085L15.0782 7.49178"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="hidden h-8 w-8 place-items-center rounded-lg text-[#6f7d90] transition hover:bg-[#eef3fa] sm:grid sm:h-9 sm:w-9"
            aria-label="Add image"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <rect
                x="3.75"
                y="4.75"
                width="16.5"
                height="14.5"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="9" cy="10" r="1.5" fill="currentColor" />
              <path
                d="M5.75 17L10.25 13L13.75 16L17 13"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <input
            type="text"
            value=""
            readOnly
            placeholder="Type a message..."
            className="h-9 min-w-0 flex-1 bg-transparent px-1.5 text-sm text-[#344255] outline-none placeholder:text-[#9aa6b5] sm:h-10 sm:px-2 sm:text-[15px]"
          />

          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-xl bg-[#1461d2] text-white shadow-[0_10px_18px_rgba(20,97,210,0.35)] transition hover:bg-[#0f56bd] sm:h-10 sm:w-10"
            aria-label="Send"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path d="M4 12L20 5L13 12L20 19L4 12Z" fill="currentColor" />
            </svg>
          </button>
        </div>

        <p className="mt-2 text-center text-[10px] text-[#98a2b1] sm:mt-3 sm:text-[11px]">
          End-to-end encrypted with Fluid Protocol
        </p>
      </div>
    </section>
  );
}
