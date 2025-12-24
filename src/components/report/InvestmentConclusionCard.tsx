import { InvestmentConclusion } from '@/types/report';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, Target, TrendingUp } from 'lucide-react';

interface InvestmentConclusionCardProps {
  conclusion: InvestmentConclusion;
  oneLiner?: string;
}

const ratingColors: Record<string, string> = {
  买入: 'bg-chart-1 text-foreground',
  增持: 'bg-chart-3 text-foreground',
  中性: 'bg-muted text-muted-foreground',
  减持: 'bg-destructive/80 text-destructive-foreground',
  卖出: 'bg-destructive text-destructive-foreground',
};

export function InvestmentConclusionCard({
  conclusion,
  oneLiner,
}: InvestmentConclusionCardProps) {
  const hasTargetPrice = conclusion.targetPrice > 0;

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">投资核心结论</CardTitle>
          <Badge className={ratingColors[conclusion.rating] || 'bg-muted'}>
            {conclusion.rating}
          </Badge>
        </div>
        {oneLiner && (
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {oneLiner}
          </p>
        )}
      </CardHeader>
      <CardContent>
        {/* 目标价和涨幅 - 仅在有目标价时显示 */}
        {hasTargetPrice && (
          <div className="flex items-center gap-6 mb-6 p-4 bg-accent/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">目标价</p>
                <p className="text-2xl font-bold text-primary">
                  ¥{conclusion.targetPrice.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-chart-1" />
              <div>
                <p className="text-sm text-muted-foreground">上涨空间</p>
                <p className="text-2xl font-bold text-chart-1">
                  +{conclusion.upside.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 核心逻辑和风险 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
              <CheckCircle className="h-4 w-4 text-chart-1" />
              核心投资逻辑
            </h4>
            <ul className="space-y-2">
              {conclusion.coreLogic.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary font-medium">{index + 1}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              主要风险提示
            </h4>
            <ul className="space-y-2">
              {conclusion.risks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-destructive font-medium">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
