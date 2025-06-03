import { SectionTitle } from "@/components/ui/title";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import { Code } from "@/components/code";
import { Calendar } from "@/components/calendar";
import { TextProfileRotate } from "@/components/text-profile-rotate";
import { WavesBlock } from "@/components/waves-block";
import { appConfig } from "@/config";

export default function WhoAmISection() {
  return (
    <section className="w-full mx-auto">
      <SectionTitle title={appConfig.whoAmI.sectionTitle} className="mt-10" />
      <div className="flex flex-col gap-2.5 justify-center items-center">
        <Card className="w-80 lg:w-96">
          <CardHeader className="px-2.5 py-4">
            <CardDescription className="text-sm text-black/75 dark:text-white/75">
              {appConfig.whoAmI.description}
            </CardDescription>
          </CardHeader>
        </Card>

        <Code />
        <Calendar />
        <TextProfileRotate />
        <WavesBlock />
      </div>
    </section>
  );
}
