// import React, { PureComponent } from "react";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const Traffic = () => {
//   return (
//     <div className="card bg-base-100 w-96 mx-auto m-5 shadow-xl">
//       <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
//         <Pie
//           data={data}
//           cx={120}
//           cy={200}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Pie
//           data={data}
//           cx={420}
//           cy={200}
//           startAngle={180}
//           endAngle={0}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   );
// };

// export default Traffic;
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { GoDotFill } from "react-icons/go";

const data = [
  { name: "Group A", value: 33 },
  { name: "Group B", value: 12 },
  { name: "Group C", value: 55 },
];

const COLORS = ["#0088FE", "#00C49F", "#c75016", "#FFBB28"];

const Traffic = () => {
  return (
    <div className="card  h-ful w-80 mt-10 mx-auto  ml-10 shadow-xl">
      <p className="text-white index-1">Traffic</p>
      <div className="flex justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx={160}
              cy={120}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
              className="mt-10"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* <Pie
            data={data}
            cx={420}
            cy={200}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie> */}
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex gap-6 text-white">
        <div className="flex flex-col justify-center">
          <p className="mx-auto text-4xl font-bold"> 33%</p>
          <div className="flex items-center">
            <GoDotFill className="text-cyan-600" />
            <p>Facebook</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="mx-auto  text-4xl font-bold"> 55%</p>
          <div className="flex items-center">
            <GoDotFill className="text-red-500" />
            <p>Youtube</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="mx-auto  text-4xl font-bold"> 12%</p>
          <div className="flex items-center">
            <GoDotFill className="text-" />
            <p>Derect Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traffic;
