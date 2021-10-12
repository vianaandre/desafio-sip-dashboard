import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '1 Julho',
      value: 60000,
      y: 100000
    },
    {
      name: '8 Julho',
      value: 80000,
    },
    {
      name: '16 Julho',
      value: 27000,
    },
    {
      name: '24 Julho',
      value: 61000,
    },
    {
      name: '31 Julho',
      value: 41000
    },
  ];

export const TemplateGraphicWeek = () => {
    return (
        <ResponsiveContainer width={450} height={230} >
            <LineChart
            width={400}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{
                left: 0
            }} fontSize={14} fontFamily={"Roboto"} />
            <YAxis dataKey="y" unit={"R$"} scale={"sequential"} padding={{
                bottom: 0
            }} fontSize={14} fontFamily={"Roboto"}/>
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#DCB654" activeDot={{ r: 8 }} strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    )
}