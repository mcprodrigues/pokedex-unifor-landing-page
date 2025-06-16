import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
import { Fragment } from "react"

const labels = ["gato", "vaca", "cabra", "cavalo", "iguana", "lagarto", "ema", "pavão", "pombo", "gambá"]

const matrix = [
  [99, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 98.2, 0, 1.8, 0, 0, 0, 0, 0, 0],
  [0, 1.8, 94.5, 1.8, 0, 0, 0, 0, 1.8, 0],
  [0, 0, 0, 83.3, 0, 0, 0, 0, 16.7, 0],
  [0, 0, 0, 0, 97.7, 2.3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 100, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 100, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 100, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 100, 0],
  [0, 0, 8.3, 0, 0, 8.3, 0, 0, 0, 83.3],
]

function getColor(value: number) {
  if (value === 100) return "bg-blue-700 text-white"
  if (value > 80) return "bg-blue-500 text-white"
  if (value > 50) return "bg-blue-300"
  if (value > 0) return "bg-blue-100"
  return "bg-white text-gray-400"
}

export function ConfusionMatrix() {
  return (
<Card className="h-full min-h-[300px]">
      <CardHeader>
        <CardTitle>Matriz de Confusão (%)</CardTitle>
        <p className="mt-1 text-xs text-muted-foreground">
          Porcentagem de acertos e erros do modelo ao classificar os animais.
        </p>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="relative overflow-x-auto md:overflow-x-auto sm:overflow-x-auto  pb-8">
            {/* Label vertical - eixo Y */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-top-left text-sm text-muted-foreground w-[140px] text-center pointer-events-none">
              <span className="font-medium text-sky-950">Rótulo Verdadeiro</span>
            </div>

            {/* Matriz */}
            <div className="ml-[40px] min-w-fit w-full">
              <div
                className="grid"
                style={{ gridTemplateColumns: `60px repeat(${labels.length}, 40px)` }}
              >
                {matrix.map((row, i) => (
                  <Fragment key={i}>
                    <div className="text-[11px] text-muted-foreground flex items-center justify-end pr-1 h-10">
                      {labels[i]}
                    </div>
                    {row.map((value, j) => (
                      <Tooltip key={`${i}-${j}`}>
                        <TooltipTrigger asChild>
                          <div
                            className={`w-10 h-10 text-[11px] flex items-center justify-center ${getColor(value)}`}
                          >
                            {value.toFixed(1)}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Verdadeiro: <strong>{labels[i]}</strong><br />
                            Predito: <strong>{labels[j]}</strong><br />
                            Valor: <strong>{value.toFixed(1)}%</strong>
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </Fragment>
                ))}
              </div>

              {/* Labels do eixo X */}
              <div className="mt-3 flex ml-[60px]">
                {labels.map((label, j) => (
                  <div
                    key={`pred-${j}`}
                    className="text-[11px] rotate-[-45deg] text-muted-foreground text-center w-10"
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Rótulo Predito */}
              <div className="mt-8 pr-20 flex justify-center">
                <span className="text-sm text-muted-foreground font-medium text-sky-950">
                  Rótulo Predito
                </span>
              </div>
            </div>
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  )
}
