import { Bell, Lock, Palette, Shield, User, Volume2 } from "lucide-react";

type SideItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

const sideItems: SideItem[] = [
  {
    id: "profile",
    label: "Profile",
    icon: <User className="h-4 w-4" />,
    active: true,
  },
  { id: "security", label: "Security", icon: <Shield className="h-4 w-4" /> },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell className="h-4 w-4" />,
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: <Palette className="h-4 w-4" />,
  },
];

function Toggle({ enabled }: { enabled: boolean }) {
  return (
    <span
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
        enabled ? "bg-[#1763ce]" : "bg-[#cfd8e5]"
      }`}
      aria-hidden
    >
      <span
        className={`h-4.5 w-4.5 rounded-full bg-white transition ${
          enabled ? "translate-x-5.5" : "translate-x-1"
        }`}
      />
    </span>
  );
}

export function SettingsWorkspace() {
  return (
    <section className="grid min-h-0 min-w-0 grid-cols-1 lg:col-span-2">
      <div className="flex min-h-0 flex-col bg-[#e9edf3]">
        <header className="border-b border-[#d6dde8] bg-[#f5f7fb] px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[32px] leading-none font-semibold tracking-[-0.03em] text-[#1d2836]">
              Nexus Chat
            </h2>
            <nav className="hidden items-center gap-5 text-sm text-[#66768d] md:flex">
              <button type="button" className="transition hover:text-[#1e3048]">
                Chat
              </button>
              <button type="button" className="transition hover:text-[#1e3048]">
                Contacts
              </button>
              <button
                type="button"
                className="border-b-2 border-[#1763ce] pb-1 font-semibold text-[#1763ce]"
              >
                Settings
              </button>
            </nav>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="grid gap-6 xl:grid-cols-[240px_minmax(0,1fr)]">
            <aside className="rounded-3xl border border-[#d8e0eb] bg-[#f4f7fb] p-4">
              <h3 className="text-[30px] leading-none font-semibold tracking-[-0.03em] text-[#1f2a37]">
                Settings
              </h3>
              <p className="mt-1 text-xs text-[#6b7b8f]">Manage your account</p>

              <div className="mt-4 space-y-1.5">
                {sideItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                      item.active
                        ? "bg-[#e1ebfb] text-[#145dc7]"
                        : "text-[#4f6178] hover:bg-[#e9eff7]"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 border-t border-[#dbe3ee] pt-4">
                <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#4f6178] transition hover:bg-[#e9eff7]"
                >
                  <Volume2 className="h-4 w-4" aria-hidden />
                  Support
                </button>
                <button
                  type="button"
                  className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#cc4141] transition hover:bg-[#fff1f1]"
                >
                  Log Out
                </button>
              </div>
            </aside>

            <div className="space-y-6">
              <section className="rounded-3xl border border-[#d8e0eb] bg-[#f8fafd] p-4 sm:p-5">
                <h3 className="text-[25px] font-semibold leading-none tracking-[-0.04em] text-[#1f2a37]">
                  Profile
                </h3>
                <p className="mt-1 text-sm text-[#637388]">
                  Manage how others see you on Lumina Chat.
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-[auto_minmax(0,1fr)]">
                  <div className="relative h-20 w-20 rounded-full bg-[#e5ecf6]">
                    <div className="grid h-full w-full place-items-center text-3xl">
                      🧑‍💼
                    </div>
                    <button
                      type="button"
                      className="absolute right-0 bottom-0 grid h-7 w-7 place-items-center rounded-full bg-[#1763ce] text-white"
                      aria-label="Edit avatar"
                    >
                      <span className="text-xs">✎</span>
                    </button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="space-y-1.5 sm:col-span-2">
                      <span className="text-sm font-semibold text-[#2e3f56]">
                        Display Name
                      </span>
                      <input
                        type="text"
                        value="Alex Mitchell"
                        readOnly
                        className="h-11 w-full rounded-lg border border-[#d6dfe9] bg-[#dfe6ee] px-3 text-sm text-[#32465f]"
                      />
                    </label>

                    <label className="space-y-1.5">
                      <span className="text-sm font-semibold text-[#2e3f56]">
                        Status Message
                      </span>
                      <input
                        type="text"
                        value="In a meeting"
                        readOnly
                        className="h-11 w-full rounded-lg border border-[#d6dfe9] bg-[#dfe6ee] px-3 text-sm text-[#32465f]"
                      />
                    </label>

                    <label className="space-y-1.5">
                      <span className="text-sm font-semibold text-[#2e3f56]">
                        Email Address
                      </span>
                      <input
                        type="text"
                        value="alex.m@lumina.chat"
                        readOnly
                        className="h-11 w-full rounded-lg border border-[#d6dfe9] bg-[#dfe6ee] px-3 text-sm text-[#32465f]"
                      />
                      <p className="text-[10px] text-[#8795a8]">
                        Email cannot be changed directly. Contact support if
                        needed.
                      </p>
                    </label>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-[#d8e0eb] bg-[#f8fafd] p-4 sm:p-5">
                <div className="flex items-center gap-2 text-[#145dc7]">
                  <Lock className="h-4 w-4" aria-hidden />
                  <h3 className="text-[25px] font-semibold leading-none tracking-[-0.03em] text-[#1f2a37]">
                    Security
                  </h3>
                </div>

                <div className="mt-4 rounded-2xl border border-[#e2e8f1] bg-white p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-[#1f2a37]">
                        Two-Factor Authentication
                      </p>
                      <p className="text-sm text-[#6a798d]">
                        Secure your account with an extra layer of protection.
                      </p>
                    </div>
                    <Toggle enabled />
                  </div>

                  <div className="mt-4 border-t border-[#e8eef5] pt-4">
                    <p className="text-lg font-semibold text-[#1f2a37]">
                      Change Password
                    </p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                      <input
                        type="password"
                        value=""
                        readOnly
                        placeholder="Current Password"
                        className="h-11 rounded-lg border border-[#d6dfe9] bg-[#dfe6ee] px-3 text-sm text-[#32465f]"
                      />
                      <input
                        type="password"
                        value=""
                        readOnly
                        placeholder="New Password"
                        className="h-11 rounded-lg border border-[#d6dfe9] bg-[#dfe6ee] px-3 text-sm text-[#32465f]"
                      />
                      <button
                        type="button"
                        className="h-11 rounded-lg bg-[#1763ce] px-6 text-sm font-semibold text-white transition hover:bg-[#0f57bb]"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-[#d8e0eb] bg-[#f8fafd] p-4 sm:p-5">
                <div className="flex items-center gap-2 text-[#145dc7]">
                  <Bell className="h-4 w-4" aria-hidden />
                  <h3 className="text-[25px] leading-none font-semibold tracking-[-0.03em] text-[#1f2a37]">
                    Notifications
                  </h3>
                </div>

                <div className="mt-4 space-y-1 rounded-2xl border border-[#e2e8f1] bg-white p-4">
                  <div className="flex items-center justify-between gap-3 rounded-xl px-2 py-2">
                    <div>
                      <p className="font-semibold text-[#1f2a37]">
                        Desktop Alerts
                      </p>
                      <p className="text-xs text-[#6a798d]">
                        Receive notifications when you&apos;re away from the
                        window.
                      </p>
                    </div>
                    <Toggle enabled />
                  </div>

                  <div className="h-px bg-[#ebf0f6]" />

                  <div className="flex items-center justify-between gap-3 rounded-xl px-2 py-2">
                    <div>
                      <p className="font-semibold text-[#1f2a37]">
                        Email Summaries
                      </p>
                      <p className="text-xs text-[#6a798d]">
                        Get a digest of missed messages and mentions.
                      </p>
                    </div>
                    <Toggle enabled={false} />
                  </div>
                </div>

                <div className="mt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    className="h-11 rounded-full bg-[#d5dee9] px-7 text-sm font-semibold text-[#2b3f59] transition hover:bg-[#c7d4e4]"
                  >
                    Discard
                  </button>
                  <button
                    type="button"
                    className="h-11 rounded-full bg-[#1763ce] px-7 text-sm font-semibold text-white transition hover:bg-[#0f57bb]"
                  >
                    Save Changes
                  </button>
                </div>
              </section>

              <section className="rounded-3xl border border-[#d8e0eb] bg-[#f8fafd] p-4 sm:p-5">
                <div className="flex items-center gap-2 text-[#145dc7]">
                  <Palette className="h-4 w-4" aria-hidden />
                  <h3 className="text-[25px] leading-none font-semibold tracking-[-0.03em] text-[#c4d9f3]">
                    Appearance
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#e2e8f1] bg-white p-4">
                    <p className="text-sm font-semibold text-[#2d3f58]">
                      Theme Mode
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        className="rounded-xl border-2 border-[#1763ce] p-3"
                      >
                        <div className="h-16 rounded-md bg-[#f5f7fb]" />
                        <p className="mt-2 text-sm font-semibold text-[#2d3f58]">
                          Light
                        </p>
                      </button>
                      <button
                        type="button"
                        className="rounded-xl border border-[#dce4ef] p-3"
                      >
                        <div className="h-16 rounded-md bg-[#0d1731]" />
                        <p className="mt-2 text-sm font-semibold text-[#2d3f58]">
                          Dark
                        </p>
                      </button>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#e2e8f1] bg-white p-4">
                    <p className="text-sm font-semibold text-[#2d3f58]">
                      Accent Color
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      {[
                        "bg-[#1763ce]",
                        "bg-[#5d6de3]",
                        "bg-[#dc4aa1]",
                        "bg-[#16b087]",
                        "bg-[#f29f18]",
                        "bg-[#747c89]",
                      ].map((item, index) => (
                        <span
                          key={item}
                          className={`h-8 w-8 rounded-full ${item} ${
                            index === 0
                              ? "ring-2 ring-[#1763ce] ring-offset-2 ring-offset-white"
                              : ""
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-[#6c7a8e]">
                      Choose a color that defines your digital workspace.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
