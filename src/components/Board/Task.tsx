// Task.tsx

interface TaskProps {
  task: {
    title: string;
    description: string;
    deadline: number;
  };
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="w-full cursor-grab bg-[#fff] flex flex-col justify-between gap-4 items-start shadow-lg rounded-xl px-3 py-4 m-2">
      <div className="w-full flex items-start flex-col gap-0">
        <span className="text-[15.5px] font-medium text-[#555]">
          {task.title}
        </span>
        <span className="text-[13.5px] text-gray-500">{task.description}</span>
      </div>
      <div className="w-full border border-dashed"></div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-[13px] text-gray-700">
            {task.deadline} mins
          </span>
        </div>
      </div>
    </div>
  );
};

export default Task;
