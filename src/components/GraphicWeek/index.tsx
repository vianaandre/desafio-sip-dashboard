import { GraphicWeekContainer } from './styled';
import { TemplateGraphicWeek } from './TemplateGraphicWeek';

export const GraphicWeek = () => {
    return (
        <GraphicWeekContainer>
            <div className="dashboard-graphicWeek-info">
                <h3>R$ 6.000,00</h3>
                <span>Relatório de venda semanal</span>
            </div>
            <TemplateGraphicWeek />
        </GraphicWeekContainer>
    )
}