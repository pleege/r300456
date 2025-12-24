import { StockInfo } from '@/types/report';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Building2, Calendar } from 'lucide-react';

interface ReportHeaderProps {
  stockInfo: StockInfo;
}

export function ReportHeader({ stockInfo }: ReportHeaderProps) {
  const isPositive = stockInfo.priceChange >= 0;

  return (
    <header className="bg-card border-b border-border">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* 左侧：公司信息 */}
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {stockInfo.name}
                </h1>
                <Badge variant="secondary" className="text-sm">
                  {stockInfo.code}.{stockInfo.exchange === '创业板' ? 'SZ' : 'SH'}
                </Badge>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  {stockInfo.industry}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {stockInfo.reportDate}
                </span>
              </div>
            </div>
          </div>

          {/* 右侧：价格信息 */}
          <div className="flex items-end gap-6">
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">当前价格</p>
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                ¥{stockInfo.currentPrice.toFixed(2)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">涨跌幅</p>
              <div
                className={`flex items-center gap-1 text-xl font-semibold ${
                  isPositive ? 'text-chart-1' : 'text-destructive'
                }`}
              >
                {isPositive ? (
                  <TrendingUp className="h-5 w-5" />
                ) : (
                  <TrendingDown className="h-5 w-5" />
                )}
                <span>
                  {isPositive ? '+' : ''}
                  {stockInfo.priceChangePercent.toFixed(2)}%
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">总市值</p>
              <p className="text-xl font-semibold text-foreground">
                {stockInfo.marketCap}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
