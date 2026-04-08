import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";

type AuthRequiredPageProps = {
  searchParams?: Promise<{
    next?: string;
  }>;
};

export default async function AuthRequiredPage({
  searchParams,
}: AuthRequiredPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const nextPath = resolvedSearchParams?.next;
  const loginHref = nextPath
    ? `/login?next=${encodeURIComponent(nextPath)}`
    : "/login";

  return (
    <main className="flex min-h-dvh items-center justify-center bg-[linear-gradient(180deg,#eef2f7_0%,#e6ecf4_100%)] px-4 py-10">
      <section className="w-full max-w-md rounded-[24px] border border-white/65 bg-[#f7f9fc] p-8 text-center shadow-[0_22px_54px_rgba(36,57,81,0.16)] sm:p-10">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-[0_10px_20px_rgba(30,72,130,0.12)]">
          <LockKeyhole className="h-7 w-7 text-[#1d6ed8]" aria-hidden />
        </div>

        <h1 className="mt-6 text-3xl font-extrabold tracking-[-0.03em] text-[#1f2937]">
          Yêu cầu xác thực
        </h1>

        <p className="mt-3 text-[15px] leading-relaxed text-[#667386]">
          Bạn chưa đăng nhập hoặc không có quyền truy cập vào trang này. Vui
          lòng đăng nhập để tiếp tục.
        </p>

        <Button
          asChild
          className="mt-7 h-11 rounded-xl bg-[#1369db] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(19,105,219,0.35)] hover:bg-[#0f5ec7]"
        >
          <Link href={loginHref}>Đăng nhập ngay</Link>
        </Button>

        <p className="mt-5 text-sm text-[#6a7587]">
          <Link
            href="/"
            className="font-medium text-[#49576c] transition hover:text-[#233149]"
          >
            Tìm hiểu thêm về Lumina
          </Link>
        </p>
      </section>
    </main>
  );
}
