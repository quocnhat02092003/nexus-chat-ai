import {
  Bot,
  Code,
  Globe,
  Image,
  Languages,
  Mic,
  Paperclip,
  Phone,
  Play,
  Search,
  Sparkles,
  Video,
} from "lucide-react";
import { Input } from "@/components/ui/input";

type ActionCard = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconTone: string;
};

const actionCards: ActionCard[] = [
  {
    id: "a1",
    title: "Summarize",
    subtitle: "Key findings from notes",
    icon: <Bot className="h-4 w-4" aria-hidden />,
    iconTone: "bg-[#e6f0ff] text-[#185ec7]",
  },
  {
    id: "a2",
    title: "Translate",
    subtitle: "Into 4 suggested languages",
    icon: <Languages className="h-4 w-4" aria-hidden />,
    iconTone: "bg-[#efe5ff] text-[#7136d6]",
  },
  {
    id: "a3",
    title: "Generate",
    subtitle: "Visual turbulence models",
    icon: <Image className="h-4 w-4" aria-hidden />,
    iconTone: "bg-[#dff8ee] text-[#0a935d]",
  },
  {
    id: "a4",
    title: "Bottlenecks",
    subtitle: "Risk assessment report",
    icon: <Code className="h-4 w-4" aria-hidden />,
    iconTone: "bg-[#ffeadf] text-[#cb5a17]",
  },
];

const quickActions = [
  { id: "q1", label: "Summarize conversation", icon: Sparkles },
  { id: "q2", label: "Translate message", icon: Globe },
  { id: "q3", label: "Generate image", icon: Mic },
  { id: "q4", label: "Review code", icon: Code },
];

function IconButton({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="grid h-9 w-9 place-items-center rounded-xl text-[#5e6f84] transition hover:bg-[#dde5ef]"
      aria-label={label}
    >
      {children}
    </button>
  );
}

export function AIWorkspace() {
  return (
    <section className="grid min-h-0 min-w-0 grid-cols-1 lg:col-span-2">
      <div className="flex min-h-0 flex-col bg-[#eef2f7]">
        <header className="border-b border-[#d8dde6] bg-[#eef2f7] px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative grid h-11 w-11 place-items-center rounded-full bg-[#d7e5ff] text-[#1a5dc2]">
                <Bot className="h-5 w-5" aria-hidden />
                <span className="absolute right-0.5 bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#eef2f7] bg-[#22c55e]" />
              </div>
              <div>
                <h2 className="text-xl leading-none font-semibold tracking-[-0.02em] text-[#1f2a37]">
                  Dialogue AI
                </h2>
                <p className="mt-1 text-xs text-[#5d6d82]">
                  Model 4.5 Turbo • High Context
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <div className="relative min-w-0 sm:min-w-72">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#708095]"
                  aria-hidden
                />
                <Input
                  placeholder="Search insights..."
                  className="h-11 rounded-full border border-[#d6dce6] bg-[#dfe5ec] pl-9 text-sm"
                />
              </div>

              <IconButton label="Video call">
                <Video className="h-4 w-4" aria-hidden />
              </IconButton>
              <IconButton label="Voice call">
                <Phone className="h-4 w-4" aria-hidden />
              </IconButton>
              <IconButton label="More options">
                <svg
                  className="h-4 w-4"
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
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mx-auto w-fit rounded-full bg-[#e0e6ef] px-4 py-1 text-xs font-semibold tracking-[0.08em] text-[#7b8797]">
              TODAY
            </p>

            <div className="mt-6 mr-auto max-w-[78%]">
              <div className="rounded-2xl rounded-tl-md bg-white px-5 py-4 text-[18px] leading-relaxed text-[#233245] shadow-[0_8px_16px_rgba(57,74,98,0.08)]">
                Hello Elena! I&apos;ve analyzed your recent notes on the fluid
                dynamics project. Would you like me to synthesize the key
                findings or generate a visual model of the turbulence patterns
                we discussed?
              </div>
              <p className="mt-1.5 text-xs text-[#738298]">09:41 AM</p>
            </div>

            <div className="mt-7 ml-auto max-w-[78%]">
              <div className="rounded-2xl rounded-tr-md bg-[#1461d2] px-5 py-4 text-[18px] leading-relaxed text-white shadow-[0_10px_18px_rgba(20,97,210,0.26)]">
                Let&apos;s start with a summary. Please highlight any potential
                bottlenecks in the data collection phase that I might have
                missed.
              </div>
              <p className="mt-1.5 text-right text-xs text-[#738298]">
                09:43 AM
              </p>
            </div>

            <div className="mt-8 mr-auto inline-flex items-center gap-2 rounded-full bg-[#e9eff6] px-4 py-2.5 text-sm text-[#2e4f76]">
              <Sparkles className="h-3.5 w-3.5 text-[#1d64cf]" aria-hidden />
              <span className="inline-flex gap-1 text-[#87a0bd]">
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </span>
              <span className="text-[#3c6490] italic">
                Processing dataset...
              </span>
            </div>

            <div className="mt-12">
              <p className="text-center text-xs font-bold tracking-[0.24em] text-[#8ea0b7] uppercase">
                Suggested Intelligent Actions
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                {actionCards.map((card) => (
                  <article
                    key={card.id}
                    className="rounded-2xl border border-[#e0e6ef] bg-[#f8fafd] p-4 shadow-[0_6px_14px_rgba(47,66,93,0.06)]"
                  >
                    <div
                      className={`grid h-9 w-9 place-items-center rounded-lg ${card.iconTone}`}
                    >
                      {card.icon}
                    </div>
                    <h3 className="mt-4 text-[24px] leading-none font-semibold tracking-[-0.02em] text-[#1f2a37]">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#6f7f93]">
                      {card.subtitle}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="shrink-0 border-t border-[#d8dde6] bg-[#eef2f7] px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl bg-[#f8fafd] p-3 shadow-[0_10px_18px_rgba(47,66,93,0.08)]">
            <div className="mb-2 flex flex-wrap gap-2">
              {quickActions.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#dfe7f1] px-3 py-1.5 text-xs font-semibold text-[#2f425c] transition hover:bg-[#d1deed]"
                  >
                    <ItemIcon className="h-3.5 w-3.5" aria-hidden />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-xl text-[#64768d] transition hover:bg-[#e6edf7]"
                aria-label="Attach"
              >
                <Paperclip className="h-4 w-4" aria-hidden />
              </button>

              <input
                type="text"
                value=""
                readOnly
                placeholder="Type your request to Dialogue AI..."
                className="h-12 min-w-0 flex-1 rounded-2xl border border-[#dbe3ef] bg-[#e4e9f0] px-4 text-base text-[#374a61] outline-none placeholder:text-[#8c9caf]"
              />

              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-xl bg-[#1461d2] text-white shadow-[0_10px_18px_rgba(20,97,210,0.33)] transition hover:bg-[#0f56bd]"
                aria-label="Send"
              >
                <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
