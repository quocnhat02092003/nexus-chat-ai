import Link from "next/link";
import { Apple, Globe, Lock, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cobe from "../_components/cobe/Cobe";

export default function RegisterRoute() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#e5e7eb_0%,#d9dde3_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,255,255,0.75),transparent_56%)]" />

      <section className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/65 bg-[#e7e9ec] shadow-[0_26px_70px_rgba(15,28,45,0.14)] lg:grid lg:grid-cols-[1.05fr_1.05fr]">
        <aside className="relative overflow-hidden bg-[linear-gradient(180deg,#0f64d4_0%,#1875e7_58%,#2287f6_100%)] p-8 text-white sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,rgba(255,255,255,0.2),transparent_44%)]" />
          <div className="relative flex h-full flex-col">
            <p className="text-[50px] font-extrabold ">chatter</p>

            <Cobe />

            <div className="mt-12 flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-white/80 bg-[#6daef7] text-sm font-semibold text-white">
                AL
              </span>
              <span className="-ml-3 grid h-10 w-10 place-items-center rounded-full border-2 border-white/80 bg-[#2d7fe8] text-sm font-semibold text-white">
                JR
              </span>
              <span className="-ml-3 grid h-10 w-10 place-items-center rounded-full border-2 border-white/80 bg-[#155fc9] text-sm font-semibold text-white">
                ND
              </span>
              <span className="-ml-2 rounded-full border border-white/60 bg-[#0058c4] px-3 py-1 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(8,43,92,0.32)]">
                +2k
              </span>
            </div>

            <p className="mt-4 text-[15px] text-white/90">
              Joined by over 2,000+ creators this week
            </p>
          </div>
        </aside>

        <div className="bg-[#f1f2f4] p-7 text-[#252d36] sm:p-10 lg:p-12">
          <h2 className="text-4xl font-extrabold text-[#202733]">
            Join the Dialogue
          </h2>
          <p className="mt-3 text-lg text-[#66707f]">
            Create your account to start connecting.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/70 bg-[#e3e6eb] text-sm font-semibold text-[#2b3440] transition hover:bg-white"
            >
              <Globe className="h-4 w-4" aria-hidden />
              Google
            </button>
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/70 bg-[#e3e6eb] text-sm font-semibold text-[#2b3440] transition hover:bg-white"
            >
              <Apple className="h-4 w-4" aria-hidden />
              Apple
            </button>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <span className="h-px flex-1 bg-[#d4d9e0]" />
            <p className="text-[11px] font-semibold text-[#8f99a8] uppercase">
              OR CONTINUE WITH EMAIL
            </p>
            <span className="h-px flex-1 bg-[#d4d9e0]" />
          </div>

          <form className="mt-7 space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="full-name"
                className="block text-[11px] font-semibold text-[#576171] uppercase"
              >
                FULL NAME
              </label>
              <div className="relative">
                <UserRound
                  className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#66707f]"
                  aria-hidden
                />
                <Input
                  id="full-name"
                  type="text"
                  placeholder="Alex Rivers"
                  className="h-11 rounded-xl border-0 bg-[#dbe0e6] pl-10 text-[15px] text-[#2e3947] placeholder:text-[#838c99]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-[11px] font-semibold text-[#576171] uppercase"
              >
                EMAIL ADDRESS
              </label>
              <Input
                id="email"
                type="email"
                placeholder="alex@example.com"
                className="h-11 rounded-xl border-0 bg-[#dbe0e6] text-[15px] text-[#2e3947] placeholder:text-[#838c99]"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-[11px] font-semibold text-[#576171] uppercase"
                >
                  PASSWORD
                </label>
                <div className="relative">
                  <Lock
                    className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#66707f]"
                    aria-hidden
                  />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="h-11 rounded-xl border-0 bg-[#dbe0e6] pl-10 text-[15px] text-[#2e3947] placeholder:text-[#838c99]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="confirm-password"
                  className="block text-[11px] font-semibold text-[#576171] uppercase"
                >
                  CONFIRM PASSWORD
                </label>
                <div className="relative">
                  <Lock
                    className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#66707f]"
                    aria-hidden
                  />
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    className="h-11 rounded-xl border-0 bg-[#dbe0e6] pl-10 text-[15px] text-[#2e3947] placeholder:text-[#838c99]"
                  />
                </div>
              </div>
            </div>

            <label className="mt-1 flex cursor-pointer items-start gap-2.5 text-sm text-[#4f5968]">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0 rounded border border-[#aeb7c5] accent-[#1369db]"
              />
              <span>
                I agree to the{" "}
                <a className="font-semibold text-[#0f63d3]">Terms of Service</a>{" "}
                and{" "}
                <a className="font-semibold text-[#0f63d3]">Privacy Policy</a>.
              </span>
            </label>

            <Button
              type="submit"
              className="mt-2 h-12 w-full rounded-xl bg-[#1369db] text-base font-semibold text-white shadow-[0_10px_24px_rgba(20,88,184,0.34)] transition hover:bg-[#0f5ec7]"
            >
              Create Account
            </Button>
          </form>

          <p className="mt-8 text-center text-[15px] text-[#566070]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#0f63d3] transition hover:text-[#0b56bb]"
            >
              Log In
            </Link>
          </p>
        </div>
      </section>

      <p className="absolute bottom-5 text-center text-[11px] text-[#9ca4af]">
        © {new Date().getFullYear()} chatter. All rights reserved.
      </p>
    </main>
  );
}
