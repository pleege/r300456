import { StockReport } from '@/types/report';

export const saiweiReport: StockReport = {
  stockInfo: {
    name: '赛微电子',
    code: '300456',
    exchange: '创业板',
    currentPrice: 61.00,
    priceChange: 0,
    priceChangePercent: 0,
    marketCap: '446.7亿',
    industry: '半导体/MEMS',
    reportDate: '2025-12-24',
  },

  conclusion: {
    rating: '中性',
    targetPrice: 0, // 文件中无明确目标价
    currentPrice: 61.00,
    upside: 0,
    coreLogic: [
      '主业复苏：MEMS行业去库存结束，瑞典/北京产线利用率爬坡',
      '资产重估：高额投资收益增厚净资产，提供安全垫',
      '适合操作：波段交易',
    ],
    risks: [
      '估值陷阱：剔除15亿+非经常损益后，主业可能微利或亏损，实际估值极高',
      '地缘政治：瑞典Silex产线受海外监管风险',
      '2026E PS ≈ 38x，显著高于行业平均(10-15x)，需警惕高位回调风险',
    ],
  },

  businessModel: {
    description:
      'Pure-play MEMS Foundry (纯代工) → 全球科技巨头/生物医疗/光通信客户 → 赚取晶圆制造加工费。拥有瑞典Silex（全球第一MEMS代工）和北京FAB3双产线。',
    revenueStructure: [
      {
        segment: 'MEMS晶圆制造',
        revenue: 3.10,
        proportion: 54.3,
        grossMargin: 37.1,
        yoyGrowth: 0,
      },
      {
        segment: 'MEMS工艺开发',
        revenue: 2.23,
        proportion: 39.1,
        grossMargin: 42.7,
        yoyGrowth: 0,
      },
      {
        segment: '其他业务',
        revenue: 0.38,
        proportion: 6.6,
        grossMargin: 0,
        yoyGrowth: 0,
      },
    ],
  },

  competitors: [
    {
      name: '赛微电子',
      code: '300456',
      marketCap: '446.7亿',
      revenue: '6.82亿',
      netProfit: '15.76亿*',
      peRatio: 28.3,
      isCurrentCompany: true,
    },
    {
      name: '芯联集成',
      code: '688469',
      marketCap: '570.0亿',
      revenue: '54.22亿',
      netProfit: '-4.63亿',
      peRatio: 0, // 亏损
    },
    {
      name: '睿创微纳',
      code: '688002',
      marketCap: '415.1亿',
      revenue: '40.86亿',
      netProfit: '7.07亿',
      peRatio: 58.7,
    },
  ],

  historicalData: [
    {
      year: 2022,
      revenue: 7.86,
      revenueYoY: 0,
      netProfit: -0.73,
      netProfitYoY: 0,
      grossMargin: 30.5,
      netMargin: -9.3,
    },
    {
      year: 2023,
      revenue: 12.86,
      revenueYoY: 63.6,
      netProfit: 1.04,
      netProfitYoY: 242.5,
      grossMargin: 32.1,
      netMargin: 8.1,
    },
    {
      year: 2024,
      revenue: 7.63,
      revenueYoY: -40.7,
      netProfit: 0.85,
      netProfitYoY: -18.3,
      grossMargin: 35.2,
      netMargin: 11.1,
    },
    {
      year: 2025,
      revenue: 6.82, // Q3 YTD
      revenueYoY: 0,
      netProfit: 15.76, // 含巨额非经常性损益
      netProfitYoY: 1752.9,
      grossMargin: 38.5,
      netMargin: 231.1,
    },
  ],

  forecast: [
    {
      year: 2024,
      revenue: 7.63,
      revenueYoY: -18,
      netProfit: 0.85,
      netProfitYoY: -18,
      eps: 0,
      pe: 525,
    },
    {
      year: 2025,
      revenue: 9.20,
      revenueYoY: 20.6,
      netProfit: 16.10,
      netProfitYoY: 1794,
      eps: 0,
      pe: 27.7,
    },
    {
      year: 2026,
      revenue: 11.50,
      revenueYoY: 25,
      netProfit: 1.80,
      netProfitYoY: -89,
      eps: 0,
      pe: 248.1,
    },
    {
      year: 2027,
      revenue: 14.38,
      revenueYoY: 25,
      netProfit: 2.50,
      netProfitYoY: 38,
      eps: 0,
      pe: 178.6,
    },
  ],

  forecastLogic:
    '2025E：Q1-Q3已实现15.76亿，假设Q4主业微利+无新增大额非经，全年保守给16.1亿。2026E：假设非经常性损益归零，主业营收增长25%（产能释放），净利率恢复至15%左右的合理水平（参考同业睿创微纳）。',

  forecastWarning:
    '2025年预测包含已实现的约15亿+非经常性损益。2026年预测通过剔除该损益进行常态化还原，故表观利润会大幅下降，实为主业修复。',

  valuation: {
    comparisons: [
      {
        metric: 'PE (TTM)',
        currentValue: 28.3,
        historicalAvg: 0,
        industryAvg: 58.7,
        status: 'overvalued', // 表观极低但失真
      },
      {
        metric: 'PE (FY0E 2025)',
        currentValue: 27.7,
        historicalAvg: 0,
        industryAvg: 58.7,
        status: 'overvalued', // 同样受非经影响
      },
      {
        metric: 'PE (FY+1E 2026)',
        currentValue: 248.1,
        historicalAvg: 0,
        industryAvg: 58.7,
        status: 'overvalued', // 主业盈利尚无法支撑市值
      },
      {
        metric: 'PE (Blended)',
        currentValue: 42.4,
        historicalAvg: 0,
        industryAvg: 58.7,
        status: 'fair', // 加权过渡值
      },
    ],
    peTrend: [
      { date: '2024-01', pe: 450, avgPE: 100 },
      { date: '2024-04', pe: 380, avgPE: 100 },
      { date: '2024-07', pe: 320, avgPE: 100 },
      { date: '2024-10', pe: 280, avgPE: 100 },
      { date: '2025-01', pe: 200, avgPE: 100 },
      { date: '2025-04', pe: 120, avgPE: 100 },
      { date: '2025-07', pe: 80, avgPE: 100 },
      { date: '2025-10', pe: 45, avgPE: 100 },
      { date: '2025-12', pe: 28.3, avgPE: 100 },
    ],
    summary:
      '当前市值明显包含了对Silex资产价值的重估或未来并购的预期，不能单纯用PE估值。若按PS(市销率)看，2026E PS ≈ 38x，依然显著高于行业平均(10-15x)，需警惕高位回调风险。',
  },

  dataSource: 'AKShare, 东方财富, 公司公告',
  disclaimer:
    '股市有风险，投资需谨慎。本报告仅供参考，不构成投资建议。',
};
