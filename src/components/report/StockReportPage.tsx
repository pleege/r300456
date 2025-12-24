import { StockReport } from '@/types/report';
import { ReportHeader } from '@/components/report/ReportHeader';
import { InvestmentConclusionCard } from '@/components/report/InvestmentConclusionCard';
import { BusinessModelCard } from '@/components/report/BusinessModelCard';
import { CompetitorCard } from '@/components/report/CompetitorCard';
import { HistoricalDataCard } from '@/components/report/HistoricalDataCard';
import { ForecastCard } from '@/components/report/ForecastCard';
import { ValuationCard } from '@/components/report/ValuationCard';
import { ReportFooter } from '@/components/report/ReportFooter';

interface StockReportPageProps {
  report: StockReport;
}

export function StockReportPage({ report }: StockReportPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* 报告头部 */}
      <ReportHeader stockInfo={report.stockInfo} />

      {/* 主体内容 */}
      <main className="container py-6">
        <div className="space-y-6">
          {/* 投资核心结论 */}
          <InvestmentConclusionCard conclusion={report.conclusion} />

          {/* 业务模式分析 */}
          <BusinessModelCard businessModel={report.businessModel} />

          {/* 行业竞争格局 */}
          <CompetitorCard competitors={report.competitors} />

          {/* 历史核心数据 */}
          <HistoricalDataCard data={report.historicalData} />

          {/* 盈利预测 */}
          <ForecastCard
            data={report.forecast}
            logic={report.forecastLogic}
            warning={report.forecastWarning}
          />

          {/* 估值分析 */}
          <ValuationCard valuation={report.valuation} />
        </div>
      </main>

      {/* 页脚 */}
      <ReportFooter dataSource={report.dataSource} disclaimer={report.disclaimer} />
    </div>
  );
}
