import { AccuracyCurveChart } from '@/components/ui/accuracy-curve-chart';
import { ChartBarLabelCustom } from '@/components/ui/chart-bar-label-custom';
import { ConfusionMatrix } from '@/components/ui/confusion-matrix';
import { LossCurveChart } from '@/components/ui/loss-curve-chart';

export default function MetricsSection() {
  return (
    <section className="w-full bg-white mt-[-4rem] md:mt-[-6rem] pt-32 sm:pt-16 md:pt-32 lg:pt-40 pb-20 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-40">
      <h2 className="text-2xl max-w-[500px] md:text-3xl font-sans font-semibold mb-4">
        Métricas do Modelo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <ChartBarLabelCustom />
        <ConfusionMatrix />
        <LossCurveChart />
        <AccuracyCurveChart />
      </div>
    </section>
  );
}