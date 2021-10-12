import { GraphicMonthContainer } from './styled'
import { TemplateGraphicMonth } from './TemplateGraphicMonth'

export const GraphicMonth = () => {
    return (
        <GraphicMonthContainer>
            <div className="dashboard-graphicMonth-info">
                <h3>
                    R$27.000,00
                </h3>
                <span>
                    Relatório de vendas mensal
                </span>
            </div>
            <TemplateGraphicMonth />
        </GraphicMonthContainer>
    )
}