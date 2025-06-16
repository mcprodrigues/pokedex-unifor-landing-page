"use client"

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts"

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

export const description = "Curva de Loss: Treino vs Validação"

// Exemplo de dados — substitua pelos reais se necessário
const chartData = [
  { epoch: 0, trainLoss: 1.36, valLoss: 0.76 },
  { epoch: 1, trainLoss: 0.59, valLoss: 0.43 },
  { epoch: 2, trainLoss: 0.39, valLoss: 0.31 },
  { epoch: 3, trainLoss: 0.28, valLoss: 0.26 },
  { epoch: 4, trainLoss: 0.23, valLoss: 0.23 },
  { epoch: 5, trainLoss: 0.18, valLoss: 0.20 },
  { epoch: 6, trainLoss: 0.15, valLoss: 0.18 },
  { epoch: 7, trainLoss: 0.13, valLoss: 0.18 },
  { epoch: 8, trainLoss: 0.11, valLoss: 0.19 },
  { epoch: 9, trainLoss: 0.09, valLoss: 0.20 },
  { epoch: 10, trainLoss: 0.08, valLoss: 0.19 },
  { epoch: 11, trainLoss: 0.07, valLoss: 0.20 },
  { epoch: 12, trainLoss: 0.06, valLoss: 0.18 },
  { epoch: 13, trainLoss: 0.06, valLoss: 0.21 },
  { epoch: 14, trainLoss: 0.05, valLoss: 0.19 },
  { epoch: 15, trainLoss: 0.04, valLoss: 0.20 },
  { epoch: 16, trainLoss: 0.03, valLoss: 0.18 },
  { epoch: 17, trainLoss: 0.03, valLoss: 0.19 },
  { epoch: 18, trainLoss: 0.03, valLoss: 0.17 },
  { epoch: 19, trainLoss: 0.02, valLoss: 0.18 },
  { epoch: 20, trainLoss: 0.02, valLoss: 0.18 },
  { epoch: 21, trainLoss: 0.02, valLoss: 0.19 },
  { epoch: 22, trainLoss: 0.02, valLoss: 0.16 },
  { epoch: 23, trainLoss: 0.02, valLoss: 0.19 },
  { epoch: 24, trainLoss: 0.02, valLoss: 0.17 },
  { epoch: 25, trainLoss: 0.01, valLoss: 0.17 },
  { epoch: 26, trainLoss: 0.01, valLoss: 0.16 },
]

const chartConfig = {
  trainLoss: {
    label: "Train Loss",
    color: "var(--chart-1)",
  },
  valLoss: {
    label: "Val Loss",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function LossCurveChart() {
  return (
<Card className="h-full min-h-[300px]">
      <CardHeader>
        <CardTitle>Curva de Perda: Treino vs Validação</CardTitle>
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
                value: "Perda",
                angle: -90,
                position: "insideLeft",
                offset: 10,
              }}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 1.5]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel={false} />}
            />
            <Line
              dataKey="trainLoss"
              type="monotone"
              stroke="#2563eb" // azul
              strokeWidth={2}
              dot={{ fill: "#2563eb" }}
              activeDot={{ r: 6 }}
            />
            <Line
              dataKey="valLoss"
              type="monotone"
              stroke="#f97316" // laranja
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
