import React, { useState } from "react";
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

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: 0,
  });
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };


  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const title = e.target.title.value;
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;
    console.log(title)
   
  console.log({ title, description, deadline })
  
  
    setTasks([...tasks, { title, description, deadline }]);
    console.log(tasks)

    setFormData({ title: "", description: "", deadline: 0 });
    setShowModal(false);
  };
  
  

  if (isLoading) {
    return <div className="h-[80vh] w-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="lg:container lg:mx-auto w-full flex item-start justify-between px-5 pb-8 md:gap-0 gap-10">
      {data.map((item: any, index: any) => (
        <div key={index} className="flex flex-col md:w-[290px] w-[250px] items-center py-5">
          <div className="flex items-center justify-center py-5 w-full bg-white rounded-lg shadow-md text-[#555] font-medium text-[15px]">
            {item.name}
          </div>
          {item.items?.map((task: TaskProps, taskIndex: number) => (
            <div key={taskIndex}>
              <Task task={task} />
            </div>
          ))}
          <div className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[80%] w-full opacity-90 bg-white rounded-lg shadow-lg text-[#555] font-medium text-[15px] mt-2 ms-3" onClick={toggleModal}>
            <PlusOutlined color={"#555"} />
            Add Task
          </div>
        </div>
      ))}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Add Task</h3>
                    <div className="mt-2">
                      <form onSubmit={handleAddTask}>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            placeholder="Enter task title"
                            name="title"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                          <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            placeholder="Enter task description"
                            name="description"
                          ></textarea>
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">Deadline</label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="deadline"
                            type="number"
                            name="deadline"
                          />
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Add
                          </button>
                          <button
                            onClick={toggleModal}
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
