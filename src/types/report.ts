// 投研报告数据类型定义

export interface StockInfo {
  name: string;
  code: string;
  exchange: string;
  currentPrice: number;
  priceChange: number;
  priceChangePercent: number;
  marketCap: string;
  industry: string;
  reportDate: string;
}

export interface InvestmentConclusion {
  rating: '买入' | '增持' | '中性' | '减持' | '卖出';
  targetPrice: number;
  currentPrice: number;
  upside: number;
  coreLogic: string[];
  risks: string[];
}

export interface RevenueStructure {
  segment: string;
  revenue: number;
  proportion: number;
  grossMargin: number;
  yoyGrowth: number;
}

export interface BusinessModel {
  description: string;
  revenueStructure: RevenueStructure[];
}

export interface Competitor {
  name: string;
  code: string;
  marketCap: string;
  revenue: string;
  netProfit: string;
  peRatio: number;
  isCurrentCompany?: boolean;
}

export interface HistoricalData {
  year: number;
  revenue: number;
  revenueYoY: number;
  netProfit: number;
  netProfitYoY: number;
  grossMargin: number;
  netMargin: number;
}

export interface ForecastData {
  year: number;
  revenue: number;
  revenueYoY: number;
  netProfit: number;
  netProfitYoY: number;
  eps: number;
  pe: number;
}

export interface ValuationComparison {
  metric: string;
  currentValue: number;
  historicalAvg: number;
  industryAvg: number;
  status: 'undervalued' | 'fair' | 'overvalued';
}

export interface PETrendData {
  date: string;
  pe: number;
  avgPE: number;
}

export interface ValuationAnalysis {
  comparisons: ValuationComparison[];
  peTrend: PETrendData[];
  summary: string;
}

export interface StockReport {
  stockInfo: StockInfo;
  conclusion: InvestmentConclusion;
  businessModel: BusinessModel;
  competitors: Competitor[];
  historicalData: HistoricalData[];
  forecast: ForecastData[];
  forecastLogic: string;
  forecastWarning: string;
  valuation: ValuationAnalysis;
  disclaimer: string;
  dataSource: string;
}
