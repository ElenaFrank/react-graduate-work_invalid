import React from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"

const Main = () => {
    const data = [
        { name: "20.10", uv: 4000, pv: 2400 },
        { name: "23.10", uv: 6100, pv: 3500 },
        { name: "24.10", uv: 7200, pv: 2700 }
    ]

    // const data1 = [
    //     { name: "20.10", val: 4000 },
    //     { name: "23.10", val: 6100 },
    //     { name: "24.10", val: 7200 }

    // ]
    return (
        <>
            <BarChart width={600} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey={"name"} />
                <YAxis />
                {/* <CartesianGrid strokeDasharray={"3 3"} /> */}
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" barSize={30} fill="#8884d8" />
                {/* <Bar type={"monotone"} dataKey="uv" stroke="#82ca9d" /> */}

            </BarChart>
        </>

    )
}

export default Main
