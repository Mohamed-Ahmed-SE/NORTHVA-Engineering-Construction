import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#A3A7A1]">
      <Link
        href="/"
        className="hover:text-[#F4F2EC] transition-colors"
      >
        NORTHVA
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.label} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-[#A3A7A1]/40" />
            {isLast || !item.href ? (
              <span className="text-[#E6532F] font-semibold">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-[#F4F2EC] transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
