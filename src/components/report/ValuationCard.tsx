import { ValuationAnalysis } from '@/types/report';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface ValuationCardProps {
  valuation: ValuationAnalysis;
}

const statusConfig: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' }> = {
  undervalued: { label: '低估', variant: 'default' },
  fair: { label: '合理', variant: 'secondary' },
  overvalued: { label: '偏高', variant: 'destructive' },
};

const chartConfig = {
  pe: {
    label: 'PE',
    color: 'hsl(var(--chart-1))',
  },
  avgPE: {
    label: '历史均值',
    color: 'hsl(var(--chart-5))',
  },
};

export function ValuationCard({ valuation }: ValuationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">估值分析</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* 估值对比表格 */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">多口径估值对比</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>指标</TableHead>
                  <TableHead className="text-right">当前</TableHead>
                  <TableHead className="text-right">历史均值</TableHead>
                  <TableHead className="text-right">行业均值</TableHead>
                  <TableHead className="text-center">评估</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {valuation.comparisons.map((item) => {
                  const status = statusConfig[item.status];
                  return (
                    <TableRow key={item.metric}>
                      <TableCell className="font-medium">{item.metric}</TableCell>
                      <TableCell className="text-right font-semibold">
                        {item.currentValue.toFixed(1)}
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {item.historicalAvg.toFixed(1)}
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {item.industryAvg.toFixed(1)}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={status.variant}>{status.label}</Badge>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          {/* PE趋势图 */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">PE走势(近2年)</h4>
            <ChartContainer config={chartConfig} className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={valuation.peTrend}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis
                    dataKey="date"
                    className="text-xs"
                    tickFormatter={(value) => value.slice(5)}
                  />
                  <YAxis className="text-xs" domain={['dataMin - 10', 'dataMax + 10']} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ReferenceLine
                    y={65}
                    stroke="hsl(var(--chart-5))"
                    strokeDasharray="5 5"
                    label={{ value: '均值', position: 'right', className: 'text-xs fill-muted-foreground' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pe"
                    name="PE"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--chart-1))', r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>

        {/* 投资建议总结 */}
        <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-sm text-foreground leading-relaxed">{valuation.summary}</p>
        </div>
      </CardContent>
    </Card>
  );
}
