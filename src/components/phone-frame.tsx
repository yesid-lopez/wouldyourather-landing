import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  screenClassName?: string;
}

export function PhoneFrame({
  children,
  className,
  screenClassName,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2.75rem] bg-navy-900 p-2.5 shadow-2xl shadow-navy-900/25",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[2.25rem] bg-white",
          screenClassName
        )}
      >
        {children}
        <div className="pointer-events-none absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-navy-900" />
      </div>
    </div>
  );
}
