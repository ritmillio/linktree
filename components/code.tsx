"use client";

import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "@/components/ui/disclosure";
import { appConfig } from "@/config";

function Code() {
  return (
    <Disclosure className="w-80 lg:w-96 rounded-md border bg-background border-border px-1.5 py-2 ">
      <DisclosureTrigger>
        <button
          className="w-full py-2 text-left px-1 text-sm cursor-pointer"
          type="button"
        >
          {appConfig.whoAmI.codeSnippet.title}
        </button>
      </DisclosureTrigger>
      <DisclosureContent>
        <div className="overflow-hidden pb-3">
          <div className="pt-1 font-mono text-sm">
            <p>{appConfig.whoAmI.codeSnippet.description}</p>
            <pre className="mt-2 rounded-md bg-zinc-100 p-2 text-xs dark:bg-zinc-950 overflow-auto">
              {appConfig.whoAmI.codeSnippet.code}
            </pre>
          </div>
        </div>
      </DisclosureContent>
    </Disclosure>
  );
}

export { Code };
