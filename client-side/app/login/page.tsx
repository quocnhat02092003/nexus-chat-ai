import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Apple, ArrowRight, AtSign, Eye, Globe, Lock } from "lucide-react";
import Cobe from "../_components/cobe/Cobe";

export default function LoginRoute() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#e5e7eb_0%,#d9dde3_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,255,255,0.75),transparent_56%)]" />

      <section className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/65 bg-[#e7e9ec] shadow-[0_26px_70px_rgba(15,28,45,0.14)] lg:grid lg:grid-cols-[1.05fr_1.05fr]">
        <aside className="relative overflow-hidden bg-[linear-gradient(180deg,#0f64d4_0%,#1875e7_58%,#2287f6_100%)] p-8 text-white sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,rgba(255,255,255,0.2),transparent_44%)]" />
          <div className="relative flex h-full flex-col">
            <p className="text-[50px] font-extrabold">chatter</p>
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
              Active creators and teams are chatting right now
            </p>
          </div>
        </aside>

        <div className="bg-[#f1f2f4] p-7 text-[#252d36] sm:p-10 lg:p-12">
          <h2 className="text-4xl font-extrabold text-[#202733]">
            Welcome Back
          </h2>
          <p className="mt-3 text-lg text-[#66707f]">
            Sign in to continue where your last chat left off.
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
                htmlFor="email"
                className="block text-[11px] font-semibold text-[#576171] uppercase"
              >
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <AtSign
                  className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#66707f]"
                  aria-hidden
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className="h-11 rounded-xl border-0 bg-[#dbe0e6] pl-10 text-[15px] text-[#2e3947] placeholder:text-[#838c99]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-end justify-between">
                <label
                  htmlFor="password"
                  className="block text-[11px] font-semibold text-[#576171] uppercase"
                >
                  PASSWORD
                </label>
                <button
                  type="button"
                  className="text-[12px] font-semibold text-[#0f63d3] transition hover:text-[#0a56bb]"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <Lock
                  className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#66707f]"
                  aria-hidden
                />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="h-11 rounded-xl border-0 bg-[#dbe0e6] pl-10 pr-10 text-[15px] text-[#2e3947] placeholder:text-[#838c99]"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1 text-[#5c6775] transition hover:bg-[#d0d5dc] hover:text-[#2f3d4d]"
                  aria-label="Show password"
                >
                  <Eye className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>

            <label className="mt-1 flex cursor-pointer items-start gap-2.5 text-sm text-[#4f5968]">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0 rounded border border-[#aeb7c5] accent-[#1369db]"
              />
              Remember my session
            </label>

            <Button
              type="submit"
              className="mt-2 h-12 w-full rounded-xl bg-[#1369db] text-base font-semibold text-white shadow-[0_10px_24px_rgba(20,88,184,0.34)] transition hover:bg-[#0f5ec7]"
            >
              <span>Sign In</span>
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Button>
          </form>

          <p className="mt-8 text-center text-[15px] text-[#566070]">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#0f63d3] transition hover:text-[#0b56bb]"
            >
              Sign up
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
