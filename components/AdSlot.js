"use client";

import { useEffect, useRef } from "react";
import { SITE } from "@/lib/site";

/**
 * One component for every ad position.
 *
 * - Without NEXT_PUBLIC_ADSENSE_CLIENT (dev / before approval) it shows a visible placeholder box.
 * - With the client ID and a slot ID it renders a real responsive <ins> ad unit.
 * - `minHeight` reserves space up front, so ads loading in never cause layout shift (CLS).
 * - Hidden when printing.
 */
export default function AdSlot({
  slot = "",
  position = "",
  label = "<!-- ADSENSE BANNER PLACEMENT -->",
  minHeight = 100,
  className = "",
}) {
  const pushed = useRef(false);
  const live = Boolean(SITE.adsenseClient && slot);

  useEffect(() => {
    if (!live || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* ad blockers or script not loaded yet: fail silently */
    }
  }, [live]);

  return (
    <section aria-label="Advertisement" className={`print:hidden ${className}`}>
      <p className="mb-1 text-[11px] text-slate-500">Advertisement</p>
      <div style={{ minHeight }} className="overflow-hidden">
        {live ? (
          <ins
            className="adsbygoogle"
            style={{ display: "block", minHeight }}
            data-ad-client={SITE.adsenseClient}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        ) : (
          <div
            style={{ minHeight }}
            className="flex flex-col items-center justify-center rounded border border-dashed border-slate-300 bg-slate-100 px-3 text-center"
          >
            <code className="text-xs text-slate-600">{label}</code>
            {position && <span className="mt-1 text-[11px] text-slate-500">{position}</span>}
          </div>
        )}
      </div>
    </section>
  );
}
