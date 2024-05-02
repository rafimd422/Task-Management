import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Task from "./Task";

interface TaskProps {
  title: string;
  description: string;
  deadline: number;
}

const Board: React.FC = () => {
  const { data, isLoading } = useQuery("dummyApiData", async () => {
    const response = await axios.get("/dummyapi.json");
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:container lg:mx-auto w-full flex item-start justify-between px-5 pb-8 md:gap-0 gap-10">
      {data.map((item: any, index: any) => (
        <div
          key={index}
          className="flex flex-col md:w-[290px] w-[250px] items-center py-5"
        >
          <div className="flex items-center justify-center py-5 w-full bg-white rounded-lg shadow-md text-[#555] font-medium text-[15px]">
            {item.name}
          </div>
          {item.items?.map((task: TaskProps, taskIndex: number) => (
            <div key={taskIndex}>
              <Task task={task} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
