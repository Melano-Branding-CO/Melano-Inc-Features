import { SectionShell } from "@/components/section-shell";
import type { UseCase } from "@/lib/site";

type ResultsSectionProps = {
  title: string;
  subtitle: string;
  useCases: UseCase[];
};

export function ResultsSection({ title, subtitle, useCases }: ResultsSectionProps) {
  return (
    <SectionShell id="casos" title={title} subtitle={subtitle}>
      <div className="grid gap-4 md:grid-cols-3">
        {useCases.map((useCase) => (
          <article key={useCase.title} className="premium-card p-6">
            <p className="text-3xl font-semibold text-white">{useCase.metric}</p>
            <h3 className="mt-4 text-lg font-semibold text-white">{useCase.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{useCase.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
