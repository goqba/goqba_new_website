"use client";

import { cn } from "@/lib/utils";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "../../navigation";
import { ChevronDown, Languages } from "lucide-react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={cn(
        "relative inline-flex items-center",
        isPending && "transition-opacity [&:disabled]:opacity-30",
      )}
    >
      <Languages className="mr-2 h-5 w-5 absolute left-8" />
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 ml-1 h-12 rounded-md px-14 items-center justify-center whitespace-nowrap text-base font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-[#02CBEF] hover:text-white"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        aria-label="Select a language"
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-7 ">
        <ChevronDown className=" h-5 w-5" />
      </span>
    </label>
  );
}
