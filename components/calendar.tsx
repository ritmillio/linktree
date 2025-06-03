"use client";

/** Cal.com */
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { appConfig } from "@/config";

export function Calendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: appConfig.whoAmI.calendar.dataCalNamespace,
      });
      cal("ui", {
        hideEventTypeDetails: appConfig.whoAmI.calendar.hideEventTypeDetails,
        layout: appConfig.whoAmI.calendar.dataCalConfig as
          | "month_view"
          | "week_view"
          | "column_view",
      });
    })();
  }, []);

  return (
    <div className="w-80 lg:w-96 bg-background border border-border rounded-md flex items-center justify-start py-2 px-1.5">
      <button
        data-cal-namespace={appConfig.whoAmI.calendar.dataCalNamespace}
        data-cal-link={appConfig.whoAmI.calendar.dataCalLink}
        className="w-full py-2 text-left px-1 text-sm cursor-pointer"
        data-cal-config={appConfig.whoAmI.calendar.dataCalConfig}
      >
        {appConfig.whoAmI.calendar.title}
      </button>
    </div>
  );
}
