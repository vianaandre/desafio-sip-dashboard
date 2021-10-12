import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

type DataProps = {
    name: string;
    2020: number;
    2021: number;
    amt: number;
}

interface TemplateGraphicProps {
    data: Array<DataProps>
}

export const TemplateGraphic = ({ data }: TemplateGraphicProps) => {
    return (
        <AreaChart width={1000} height={300} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
            <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#E2EAFE" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#E2EAFE" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#E2EAFE" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#E2EAFE" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" fontSize={14} fontFamily={"Roboto"} />
            <YAxis fontSize={14} fontFamily={"Roboto"} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="2020" strokeWidth={2} stroke="#7E3F8F" fillOpacity={1} fill="url(#colorUv)" fontSize={14} fontFamily={"Roboto"}/>
            <Area type="monotone" dataKey="2021" strokeWidth={2}  stroke="#DCB654" fillOpacity={1} fill="url(#colorPv)"  fontSize={14} fontFamily={"Roboto"} />
        </AreaChart>
    )
}