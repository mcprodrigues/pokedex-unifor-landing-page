"use client"

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Curva de Acurácia: Treino vs Validação"

const chartData = [
  { epoch: 0, trainAcc: 0.47, valAcc: 0.80 },
  { epoch: 1, trainAcc: 0.76, valAcc: 0.89 },
  { epoch: 2, trainAcc: 0.85, valAcc: 0.93 },
  { epoch: 3, trainAcc: 0.89, valAcc: 0.95 },
  { epoch: 4, trainAcc: 0.92, valAcc: 0.96 },
  { epoch: 5, trainAcc: 0.94, valAcc: 0.97 },
  { epoch: 6, trainAcc: 0.93, valAcc: 0.97 },
  { epoch: 7, trainAcc: 0.95, valAcc: 0.98 },
  { epoch: 8, trainAcc: 0.96, valAcc: 0.98 },
  { epoch: 9, trainAcc: 0.97, valAcc: 0.98 },
  { epoch: 10, trainAcc: 0.98, valAcc: 0.98 },
  { epoch: 11, trainAcc: 0.97, valAcc: 0.98 },
  { epoch: 12, trainAcc: 0.98, valAcc: 0.98 },
  { epoch: 13, trainAcc: 0.98, valAcc: 0.98 },
  { epoch: 14, trainAcc: 0.98, valAcc: 0.99 },
  { epoch: 15, trainAcc: 0.98, valAcc: 0.98 },
  { epoch: 16, trainAcc: 0.98, valAcc: 0.99 },
  { epoch: 17, trainAcc: 0.99, valAcc: 0.98 },
  { epoch: 18, trainAcc: 0.98, valAcc: 0.99 },
  { epoch: 19, trainAcc: 0.98, valAcc: 0.99 },
  { epoch: 20, trainAcc: 0.99, valAcc: 0.98 },
  { epoch: 21, trainAcc: 0.98, valAcc: 0.99 },
  { epoch: 22, trainAcc: 0.98, valAcc: 0.98 },
  { epoch: 23, trainAcc: 0.99, valAcc: 0.99 },
  { epoch: 24, trainAcc: 0.98, valAcc: 0.99 },
  { epoch: 25, trainAcc: 0.99, valAcc: 0.98 },
  { epoch: 26, trainAcc: 0.99, valAcc: 0.99 },
]

const chartConfig = {
  trainAcc: {
    label: "Train Acc",
    color: "#2563eb", // azul
  },
  valAcc: {
    label: "Val Acc",
    color: "#f97316", // laranja
  },
} satisfies ChartConfig

export function AccuracyCurveChart() {
  return (
<Card className="h-full min-h-[300px]">
      <CardHeader>
        <CardTitle>Curva de Acurácia: Treino vs Validação</CardTitle>
        <CardDescription>Comparação entre épocas</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{ left: 12, right: 12, top: 12, bottom: 12 }}
            width={600}
            height={300}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="epoch"
              ticks={[0, 5, 10, 15, 20, 25]}
              label={{ value: "Época", position: "insideBottom", offset: -6 }}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              label={{
                value: "Acurácia",
                angle: -90,
                position: "insideLeft",
                offset: 10,
              }}
              domain={[0.4, 1]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel={false} />}
            />
            <Line
              dataKey="trainAcc"
              type="monotone"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ fill: "#2563eb" }}
              activeDot={{ r: 6 }}
            />
            <Line
              dataKey="valAcc"
              type="monotone"
              stroke="#f97316"
              strokeWidth={2}
              dot={{ fill: "#f97316" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
        <div className="mt-6 flex justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-4 h-1 bg-blue-600 rounded" />
            <span>Train Acc</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-1 bg-orange-500 rounded" />
            <span>Val Acc</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
