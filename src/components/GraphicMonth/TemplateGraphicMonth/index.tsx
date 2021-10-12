import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '25 Julho',
      value: 61000,
      y: 100000
    },
    {
      name: '26 Julho',
      value: 38000,
    },
    {
      name: '27 Julho',
      value: 59000,
    },
    {
      name: '28 Julho',
      value: 40000,
    },
    {
      name: '29 Julho',
      value: 79000
    },
    {
        name: '30 Julho',
        value: 19000
    }
  ];

export const TemplateGraphicMonth = () => {
    return (
        <ResponsiveContainer width={450} height={230} >
            <LineChart
            width={400}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 20,
                left: 15,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{
                left: 0
            }} fontSize={12} fontFamily={"Roboto"}/>
            <YAxis dataKey="y" unit={"R$"} scale={"sequential"} padding={{
                bottom: 0
            }} fontSize={14} fontFamily={"Roboto"}  />
            <Tooltip />
            <Line type="monotone" dataKey="value" strokeWidth={2} stroke="#8884d8" activeDot={{ r: 8 }}  />
            </LineChart>
        </ResponsiveContainer>
    )
}