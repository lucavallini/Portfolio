import type {PortfolioData} from '../types/portfolio.types'

export async function getPortfolioData(): Promise<PortfolioData> {
    const response = await fetch('/data.json');
    const data: PortfolioData = await response.json();
    return data;
}