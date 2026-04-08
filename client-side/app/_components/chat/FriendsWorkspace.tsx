import {
  Compass,
  FileText,
  MessageSquare,
  MoreHorizontal,
  MoreVertical,
  Phone,
  Search,
  Share2,
  Star,
  UserPlus,
  Video,
} from "lucide-react";
import { Input } from "@/components/ui/input";

type FriendCard = {
  id: string;
  name: string;
  note: string;
  initials: string;
  online?: boolean;
  color: string;
};

type Connection = {
  id: string;
  name: string;
  status: string;
  group: string;
  initials: string;
  color: string;
  dot: string;
};

type Activity = {
  id: string;
  name: string;
  detail: string;
  time: string;
};

const favoriteFriends: FriendCard[] = [
  {
    id: "f1",
    name: "Marcus Thorne",
    note: "Designing a new universe...",
    initials: "MT",
    online: true,
    color: "from-[#19334e] to-[#2f86cb]",
  },
  {
    id: "f2",
    name: "Sienna Miller",
    note: "Available for a call",
    initials: "SM",
    online: true,
    color: "from-[#b46522] to-[#f1a049]",
  },
  {
    id: "f3",
    name: "Julian Baek",
    note: "Away - back in 2h",
    initials: "JB",
    online: false,
    color: "from-[#1d2c3f] to-[#4e647f]",
  },
];

const connections: Connection[] = [
  {
    id: "c1",
    name: "Aria Montgomery",
    status: "Online",
    group: "Shared group: Design Team",
    initials: "AM",
    color: "from-[#8d4e23] to-[#db9c68]",
    dot: "bg-[#22c55e]",
  },
  {
    id: "c2",
    name: "Dr. Robert Chen",
    status: "Offline - 4h ago",
    group: "Shared group: AI Ethics",
    initials: "RC",
    color: "from-[#26384b] to-[#526b84]",
    dot: "bg-[#bcc7d8]",
  },
  {
    id: "c3",
    name: "Liam O'Neill",
    status: "Do Not Disturb",
    group: "Shared group: Night Owl Devs",
    initials: "LO",
    color: "from-[#1c1f24] to-[#4a5058]",
    dot: "bg-[#fb923c]",
  },
  {
    id: "c4",
    name: "Zahra Hassan",
    status: "Online",
    group: "Shared group: Photography",
    initials: "ZH",
    color: "from-[#5c3a23] to-[#c27f49]",
    dot: "bg-[#22c55e]",
  },
];

const recentActivity: Activity[] = [
  {
    id: "a1",
    name: "Marcus Thorne",
    detail: "Shared a file in Design Team",
    time: "12 mins ago",
  },
  {
    id: "a2",
    name: "Zahra Hassan",
    detail: "Updated her status to Online",
    time: "45 mins ago",
  },
  {
    id: "a3",
    name: "Julian Baek",
    detail: "Started a new group call",
    time: "1 hour ago",
  },
];

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className={`grid h-12 w-12 shrink-0 place-items-center rounded-full bg-linear-to-br text-sm font-semibold text-white ${color}`}
    >
      {initials}
    </div>
  );
}

export function FriendsWorkspace() {
  return (
    <section className="grid min-h-0 min-w-0 grid-cols-1 lg:col-span-2 lg:grid-cols-[minmax(0,1fr)_245px]">
      <div className="flex min-h-0 flex-col border-r border-[#d8dde6] bg-[#eef2f7]">
        <header className="border-b border-[#d8dde6] bg-[#eef2f7] px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#1f2a37]">
                Friends
              </h2>
              <p className="text-sm text-[#637186]">24 Connections Online</p>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="relative min-w-58">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#708095]"
                  aria-hidden
                />
                <Input
                  placeholder="Search friends..."
                  className="h-11 rounded-full border border-[#d5dce7] bg-[#dde4ec] pl-9 text-sm"
                />
              </div>

              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1461d2] px-5 text-sm font-semibold text-white transition hover:bg-[#0f56bd]"
              >
                <UserPlus className="h-4 w-4" aria-hidden />
                Add Friend
              </button>

              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-xl text-[#5e6f84] transition hover:bg-[#dde5ef]"
                aria-label="Video call"
              >
                <Video className="h-4.5 w-4.5" aria-hidden />
              </button>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-xl text-[#5e6f84] transition hover:bg-[#dde5ef]"
                aria-label="Call"
              >
                <Phone className="h-4.5 w-4.5" aria-hidden />
              </button>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-xl text-[#5e6f84] transition hover:bg-[#dde5ef]"
                aria-label="More"
              >
                <MoreVertical className="h-4.5 w-4.5" aria-hidden />
              </button>
            </div>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star
                className="h-4 w-4 fill-[#0f63d3] text-[#0f63d3]"
                aria-hidden
              />
              <p className="text-[25px] font-semibold tracking-[-0.02em] text-[#1f2a37]">
                Favorites
              </p>
            </div>
            <button
              type="button"
              className="text-sm font-semibold text-[#0f63d3] transition hover:text-[#0a56bb]"
            >
              View All
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
            {favoriteFriends.map((friend) => (
              <article
                key={friend.id}
                className="rounded-2xl border border-[#e1e7f0] bg-[#f4f7fb] p-4 shadow-[0_8px_16px_rgba(37,58,87,0.08)]"
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar initials={friend.initials} color={friend.color} />
                    <span
                      className={`absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-[#f4f7fb] ${
                        friend.online ? "bg-[#22c55e]" : "bg-[#c4cedd]"
                      }`}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-tight tracking-[-0.03em] text-[#1f2a37]">
                      {friend.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#637186]">{friend.note}</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-end items-center gap-2">
                  <button
                    type="button"
                    className="h-10 rounded-xl bg-[#1461d2] px-4 text-sm text-white transition hover:bg-[#0f56bd]"
                  >
                    Message
                  </button>
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center rounded-xl bg-[#dce4ed] text-[#4d5f76] transition hover:bg-[#ced8e4]"
                    aria-label="More options"
                  >
                    <MoreHorizontal className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <h3 className="text-[25px] font-semibold tracking-[-0.03em] text-[#1f2a37]">
              All Connections
            </h3>
            <div className="flex items-center gap-2 rounded-full bg-[#dde5ef] p-1 text-xs font-semibold text-[#526278]">
              <button
                type="button"
                className="rounded-full bg-[#c8d8ec] px-3 py-1.5 text-[#324865]"
              >
                Online First
              </button>
              <button type="button" className="rounded-full px-3 py-1.5">
                Alphabetical
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-3.5">
            {connections.map((friend) => (
              <article
                key={friend.id}
                className="flex items-center justify-between rounded-2xl border border-[#e1e7f0] bg-[#f4f7fb] px-4 py-3 shadow-[0_8px_16px_rgba(37,58,87,0.05)]"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <Avatar initials={friend.initials} color={friend.color} />
                  <div className="min-w-0">
                    <h4 className="truncate text-[15px] font-semibold leading-tight tracking-[-0.02em] text-[#1f2a37]">
                      {friend.name}
                    </h4>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-[#637186]">
                      <span
                        className={`h-2 w-2 rounded-full ${friend.dot}`}
                        aria-hidden
                      />
                      {friend.status}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <p className="hidden text-sm text-[#7a8698] xl:block">
                    {friend.group}
                  </p>
                  <button
                    type="button"
                    className="h-10 rounded-full border border-[#d7dee9] bg-white px-5 text-sm font-semibold text-[#26384c] transition hover:bg-[#eef3f8]"
                  >
                    Message
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-[#d8dde6] bg-[#eef2f7] p-3.5">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-[#f7f9fc] px-3 py-2.5 shadow-[0_8px_16px_rgba(37,58,87,0.08)]">
            <button
              type="button"
              className="flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold text-[#526278] transition hover:bg-[#e8eef5]"
            >
              <FileText className="h-3.5 w-3.5" aria-hidden />
              Requests
            </button>
            <button
              type="button"
              className="flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold text-[#526278] transition hover:bg-[#e8eef5]"
            >
              <Compass className="h-3.5 w-3.5" aria-hidden />
              Nearby
            </button>
            <button
              type="button"
              className="flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold text-[#526278] transition hover:bg-[#e8eef5]"
            >
              <Share2 className="h-3.5 w-3.5" aria-hidden />
              Invite
            </button>
          </div>
        </div>
      </div>

      <aside className="hidden h-full min-h-0 flex-col bg-[#ecf1f7] px-5 py-6 lg:flex">
        <h3 className="text-xs font-extrabold tracking-[0.16em] text-[#5f7086] uppercase">
          Recent Activity
        </h3>

        <div className="mt-5 flex-1 space-y-6 overflow-y-auto pr-1">
          {recentActivity.map((item, index) => (
            <article key={item.id} className="relative pl-4">
              <span
                className={`absolute top-1 left-0 h-2 w-2 rounded-full ${
                  index === 0 ? "bg-[#1461d2]" : "bg-[#c3ccda]"
                }`}
                aria-hidden
              />
              {index < recentActivity.length - 1 ? (
                <span
                  className="absolute top-4 left-0.75 h-17.5 w-px bg-[#d2dbe8]"
                  aria-hidden
                />
              ) : null}

              <p className="text-sm font-semibold text-[#253649]">
                {item.name}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-[#657385]">
                {item.detail}
              </p>

              {index === 0 ? (
                <div className="mt-2 rounded-xl border border-[#dce4ef] bg-[#e4ebf4] p-2.5">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-[#f4f8fc] px-2 py-1.5 text-xs text-[#45586f]">
                    <MessageSquare className="h-3.5 w-3.5" aria-hidden />
                    concept_v2_final.pdf
                  </div>
                </div>
              ) : null}

              <p className="mt-2 text-xs text-[#8a97a9]">{item.time}</p>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}
