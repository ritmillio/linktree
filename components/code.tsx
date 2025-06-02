"use client";

import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "@/components/ui/disclosure";

function Code() {
  return (
    <Disclosure className="w-80 lg:w-96 rounded-md border bg-background border-border px-1.5 py-2 ">
      <DisclosureTrigger>
        <button
          className="w-full py-2 text-left px-1 text-sm cursor-pointer"
          type="button"
        >
          My Favorite Code Snippet
        </button>
      </DisclosureTrigger>
      <DisclosureContent>
        <div className="overflow-hidden pb-3">
          <div className="pt-1 font-mono text-sm">
            <p>A beautiful way to debounce function calls</p>
            <pre className="mt-2 rounded-md bg-zinc-100 p-2 text-xs dark:bg-zinc-950 overflow-auto">
              {`const debounce = (fn, delay) => {
                let timeoutId;
                return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
        };
    };`}
            </pre>
          </div>
        </div>
      </DisclosureContent>
    </Disclosure>
  );
}

export { Code };
