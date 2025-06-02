"use client";

/** Cal.com */
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Calendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="w-80 lg:w-96 bg-background border border-border rounded-md flex items-center justify-start py-2 px-1.5">
      <button
        data-cal-namespace="15min"
        data-cal-link="ritmillio/15min"
        className="w-full py-2 text-left px-1 text-sm cursor-pointer"
        data-cal-config='{"layout":"month_view"}'
      >
        Schedule a Call
      </button>
    </div>
  );
}
