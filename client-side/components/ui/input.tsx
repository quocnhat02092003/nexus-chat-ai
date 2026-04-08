import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full min-w-0 rounded-xl border border-transparent bg-[#dbe3ec] px-3 py-2 text-sm text-[#223246] shadow-xs transition-[color,box-shadow] outline-none placeholder:text-[#708095] focus-visible:border-[#a9bdd6] focus-visible:bg-white focus-visible:ring-3 focus-visible:ring-[#dbe6f5] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
