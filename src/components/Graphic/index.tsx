import { GraphicContainer } from './styled';

import { TemplateGraphic } from './TemplateGraphic';

const data = [
    {
      "name": "2020-08",
      "2020": 50,
      "2021": 140,
      "amt": 140,
    },
    {
      "name": "2020-09",
      "2020": 80,
      "2021": 130,
      "amt": 130
    },
    {
      "name": "2020-10",
      "2020": 110,
      "2021": 200,
      "amt": 200
    },
    {
      "name": "2020-11",
      "2020": 100,
      "2021": 150,
      "amt": 150
    },
    {
      "name": "2020-12",
      "2020": 160,
      "2021": 160,
      "amt": 160
    },
    {
      "name": "2021-01",
      "2020": 110,
      "2021": 140,
      "amt": 140
    },
    {
      "name": "2021-02",
      "2020": 125,
      "2021": 180,
      "amt": 180
    },
    {
        "name": "2021-03",
        "2020": 140,
        "2021": 175,
        "amt": 175
      },
      {
        "name": "2021-04",
        "2020": 175,
        "2021": 150,
        "amt": 150
      },
      {
        "name": "2021-05",
        "2020": 110,
        "2021": 220,
        "amt": 220
      },
      {
        "name": "2021-06",
        "2020": 120,
        "2021": 180,
        "amt": 180
      },
      {
        "name": "2021-07",
        "2020": 190,
        "2021": 240,
        "amt": 240
      }
]

export const Graphic = () => {
    return (
        <GraphicContainer>
            <div className="dashboard-graphic-info">
                <h2>Relatório de vendas</h2>
                <div>
                    <span>Vendas de 2020</span>
                    <span>Vendas de 2021</span>
                </div>
            </div>
            <TemplateGraphic data={data} />
        </GraphicContainer>
    )
}