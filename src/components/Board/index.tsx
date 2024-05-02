import axios from "axios";
import { useQuery } from "react-query";
import Task from "./Task";
import { PlusOutlined } from "@ant-design/icons";

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
    return <div className="h-[80vh] w-screen flex items-center justify-center">Loading...</div>;
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

          <div 
            className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[80%] w-full opacity-90 bg-white rounded-lg shadow-lg text-[#555] font-medium text-[15px] mt-2 ms-3"
           
          >
            <PlusOutlined color={"#555"} />
            Add Task
          </div>
        </div>
      ))}
      
  
    </div>
  );
};

export default Board;
