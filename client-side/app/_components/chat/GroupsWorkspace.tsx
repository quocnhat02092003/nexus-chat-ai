import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  Phone,
  Search,
  Video,
} from "lucide-react";
import { Input } from "@/components/ui/input";

type GroupItem = {
  id: string;
  name: string;
  members: string;
  unread: string;
  badge: string;
  badgeTone: string;
  gradient: string;
  icon: string;
};

type SuggestedItem = {
  id: string;
  title: string;
  type: string;
  imageUrl: string;
};

const groups: GroupItem[] = [
  {
    id: "g1",
    name: "Product Design Lab",
    members: "42 Members",
    unread: "8 Unread",
    badge: "ACTIVE NOW",
    badgeTone: "bg-[#e2ecff] text-[#1c5cc2]",
    gradient: "from-[#17374f] to-[#2b6c96]",
    icon: "PD",
  },
  {
    id: "g2",
    name: "Frontend Wizards",
    members: "1.2K Members",
    unread: "0 Unread",
    badge: "YESTERDAY",
    badgeTone: "bg-[#e8edf4] text-[#6a7a8f]",
    gradient: "from-[#112539] to-[#204a73]",
    icon: "FW",
  },
  {
    id: "g3",
    name: "Digital Art Collective",
    members: "356 Members",
    unread: "3 Unread",
    badge: "NEW",
    badgeTone: "bg-[#e3f0ff] text-[#1b66d1]",
    gradient: "from-[#577f9b] to-[#74a4c8]",
    icon: "DA",
  },
];

const suggestedGroups: SuggestedItem[] = [
  {
    id: "s1",
    title: "Cyber Security Circle",
    type: "Public",
    imageUrl:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "s2",
    title: "Sound Engineers Hub",
    type: "Request",
    imageUrl:
      "https://images.unsplash.com/photo-1558137623-ce933996c730?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "s3",
    title: "Boardroom Insights",
    type: "Public",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "s4",
    title: "Data Mesh Forum",
    type: "Public",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  },
];

function GroupCard({ group }: { group: GroupItem }) {
  return (
    <article className="rounded-3xl border border-[#e0e6ef] bg-[#f6f9fc] p-4 shadow-[0_9px_18px_rgba(25,42,63,0.07)] sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <div
          className={`grid h-13 w-13 place-items-center rounded-2xl bg-linear-to-br text-sm font-bold text-white ${group.gradient}`}
        >
          {group.icon}
        </div>
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.09em] ${group.badgeTone}`}
        >
          {group.badge}
        </span>
      </div>

      <h3 className="mt-3 text-[20px] leading-[1.06] font-semibold tracking-[-0.03em] text-[#1f2a37]">
        {group.name}
      </h3>
      <p className="mt-2 text-sm text-[#677688]">
        {group.members} • {group.unread}
      </p>

      <button
        type="button"
        className="mt-5 h-11 w-full rounded-xl bg-[#cfddf1] text-sm font-semibold text-[#2a3f59] transition hover:bg-[#c0d2ea]"
      >
        Open Chat
      </button>
    </article>
  );
}

export function GroupsWorkspace() {
  return (
    <section className="grid min-h-0 min-w-0 grid-cols-1 lg:col-span-2">
      <div className="flex min-h-0 flex-col bg-[#eef2f7]">
        <header className="border-b border-[#d8dde6] bg-[#eef2f7] px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#1f2a37]">
              Explore Groups
            </h2>

            <div className="flex items-center gap-1 sm:gap-2">
              <div className="relative min-w-0 sm:min-w-72">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#708095]"
                  aria-hidden
                />
                <Input
                  placeholder="Search communities..."
                  className="h-11 rounded-full border border-[#d6dce6] bg-[#dfe5ec] pl-9 text-sm"
                />
              </div>

              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-xl text-[#5e6f84] transition hover:bg-[#dde5ef]"
                aria-label="Video"
              >
                <Video className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-xl text-[#5e6f84] transition hover:bg-[#dde5ef]"
                aria-label="Call"
              >
                <Phone className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-xl text-[#5e6f84] transition hover:bg-[#dde5ef]"
                aria-label="More"
              >
                <EllipsisVertical className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_250px]">
            <article className="rounded-4xl bg-linear-to-r from-[#1362d8] to-[#1b83f6] px-6 py-7 text-white shadow-[0_20px_34px_rgba(19,98,216,0.28)] sm:px-8 sm:py-9">
              <h3 className="max-w-lg text-[44px] leading-[0.95] font-semibold tracking-[-0.04em] sm:text-[54px]">
                Discover your
                <br />
                next conversation.
              </h3>
              <p className="mt-4 max-w-md text-sm text-white/90 sm:text-base">
                Join over 10,000 active communities built on fluid dialogue and
                shared interests.
              </p>
              <button
                type="button"
                className="mt-6 h-11 rounded-xl bg-white px-5 text-sm font-semibold text-[#0e55ba] transition hover:bg-[#edf3ff]"
              >
                Start a New Group
              </button>
            </article>

            <aside className="rounded-4xl border border-[#e0e7f1] bg-[#e9edf2] p-6 sm:p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#195fcb] shadow-sm">
                <ArrowUpRight className="h-5 w-5" aria-hidden />
              </div>

              <h4 className="mt-8 text-[34px] leading-none font-semibold tracking-[-0.03em] text-[#1f2a37]">
                Trending
              </h4>
              <p className="mt-1 text-sm text-[#667487]">
                Design Ethics Circle
              </p>

              <div className="mt-4 flex items-center">
                {[
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
                ].map((avatar, index) => (
                  <div
                    key={avatar}
                    className={`h-8 w-8 overflow-hidden rounded-full border-2 border-[#e9edf2] ${
                      index > 0 ? "-ml-2" : ""
                    }`}
                  >
                    <img
                      src={avatar}
                      alt="Community member"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
                <span className="-ml-2 grid h-8 min-w-8 place-items-center rounded-full border-2 border-[#e9edf2] bg-[#cad5e4] px-1 text-[10px] font-semibold text-[#304764]">
                  +12
                </span>
              </div>
            </aside>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <h3 className="text-[30px] leading-none tracking-[-0.03em] text-[#1f2a37]">
              My Groups
            </h3>
            <button
              type="button"
              className="text-sm font-semibold text-[#0f63d3] transition hover:text-[#0b57bc]"
            >
              View All
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
            {groups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>

          <div className="mt-9 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-[30px] leading-none font-semibold tracking-[-0.03em] text-[#1f2a37]">
                Suggested for You
              </h3>
              <p className="mt-1 text-sm text-[#667487]">
                Based on your interests in Design, AI, and Tech
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#cfd8e6] text-[#526278] transition hover:bg-[#e5edf7]"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#cfd8e6] text-[#526278] transition hover:bg-[#e5edf7]"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {suggestedGroups.map((item) => (
              <article
                key={item.id}
                className="group relative h-40 overflow-hidden rounded-3xl border border-[#dbe3ef]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#081422]/90 via-[#0f2033]/50 to-transparent px-3 py-2.5 text-white">
                  <p className="truncate text-sm font-semibold">{item.title}</p>
                  <p className="mt-0.5 text-xs text-white/85">{item.type}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
