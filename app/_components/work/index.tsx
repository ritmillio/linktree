import { SectionTitle } from "@/components/ui/title";
import { WorkHistory } from "@/components/work-history";
import { appConfig } from "@/config";

export default function WorkSection() {
  return (
    <section className="w-full mx-auto">
      <SectionTitle title={appConfig.work.sectionTitle} className="mt-10" />
      <div className="flex flex-col gap-2.5 justify-center items-center">
        <p className="text-center text-xs leading-4 text-muted-foreground w-80 lg:w-96 mx-auto py-5 bg-background border border-border rounded-md flex items-center justify-center px-2.5">
          {appConfig.work.description}
        </p>
        <div className="w-80 lg:w-96">
          <div className="w-full flex items-center justify-between gap-2.5">
            <div className="w-1/2 text-center text-xs leading-4 text-muted-foreground lg:w-96 mx-auto py-5 bg-background border border-border rounded-md flex items-center justify-center px-2.5">
              <div
                dangerouslySetInnerHTML={{
                  __html: appConfig.work.boxes.firstBox.html,
                }}
              />
            </div>
            <a
              className="w-1/2 text-center text-xs leading-4 lg:w-96 mx-auto py-5 bg-background border border-border rounded-md flex items-center justify-center px-2.5"
              href={appConfig.work.boxes.secondBox.href}
              target={
                appConfig.work.boxes.secondBox.external ? "_blank" : "_self"
              }
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: appConfig.work.boxes.secondBox.html,
                }}
              />
            </a>
          </div>
        </div>
        <WorkHistory
          className="w-80 lg:w-96"
          data={appConfig.work.workHistory}
          title={appConfig.work.workHistoryTitle}
        />
      </div>
    </section>
  );
}
