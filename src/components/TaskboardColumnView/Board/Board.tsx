// import React, { useEffect } from "react";
// import TaskCard from "../TaskCard/TaskCard";
// import { Droppable } from "react-beautiful-dnd";
// import useTasks from "../../../hooks/useTasks";
// import { useParams } from "react-router-dom";
// import Header from "./Header";

// interface BoardProps {
//   handleDeleteBoard: (id: number) => void;
//   handleUpdateBoard: (title: string, id: number) => void;
//   bordId: number;
//   boardColor: string;
//   boardTask: number;
//   boardName: string;
//   boardTasks: any;
// }

// const Board: React.FC<BoardProps> = ({
//   handleDeleteBoard,
//   handleUpdateBoard,
//   bordId,
//   boardColor,
//   boardTask,
//   boardName,
//   boardTasks,
// }) => {
//   const { getAllTasks, tasks, setTasks } = useTasks();
//   const { workspaceId, projectId } = useParams();

//   useEffect(() => {
//     getAllTasks(Number(workspaceId), Number(projectId), bordId);
//   }, [workspaceId, projectId, bordId]);

//   return (
//     <div>
//       <Header
//         handleDeleteBoard={handleDeleteBoard}
//         handleUpdateBoard={handleUpdateBoard}
//         bordId={bordId}
//         boardColor={boardColor}
//         boardTask={boardTask}
//         boardName={boardName}
//         setTasks={setTasks}
//         boardTasks={boardTasks}
//       />
//       <Droppable droppableId={String(bordId)}>
//         {(provided) => (
//           <div
//             className="flex mt-2 gap-2 flex-col"
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//           >
//             {tasks &&
//               tasks.map((task, index) => (
//                 <TaskCard
//                   key={task.id}
//                   index={index}
//                   boardId={bordId}
//                   setTasks={setTasks}
//                   taskName={task.name}
//                   taskDeadline={task.deadline}
//                   taskDes={task.description}
//                   taskId={task.id}
//                 />
//               ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );
// };

// export default Board;

import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "../TaskCard/TaskCard";
import useTasks from "../../../hooks/useTasks";
import { useParams } from "react-router-dom";
import Header from "./Header";

interface BoardProps {
  handleDeleteBoard: (id: number) => void;
  handleUpdateBoard: (title: string, id: number) => void;
  bordId: number;
  boardColor: string;
  boardTask: number;
  boardName: string;
  boardTasks: any;
}

const Board: React.FC<BoardProps> = ({
  handleDeleteBoard,
  handleUpdateBoard,
  bordId,
  boardColor,
  boardTask,
  boardName,
  boardTasks,
}) => {
  const { getAllTasks, tasks, setTasks } = useTasks();
  const { workspaceId, projectId } = useParams();

  useEffect(() => {
    getAllTasks(Number(workspaceId), Number(projectId), bordId);
  }, [workspaceId, projectId, bordId]);

  return (
    <DragDropContext onDragEnd={console.log("hey")}>
      <div>
        <Header
          handleDeleteBoard={handleDeleteBoard}
          handleUpdateBoard={handleUpdateBoard}
          bordId={bordId}
          boardColor={boardColor}
          boardTask={boardTask}
          boardName={boardName}
          setTasks={setTasks}
          boardTasks={boardTasks}
        />
        <Droppable droppableId={String(bordId)}>
          {(provided) => (
            <div
              className="flex mt-2 gap-2 flex-col"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks &&
                tasks.map((task, index) => (
                  <TaskCard
                    key={task.id}
                    index={index}
                    boardId={bordId}
                    setTasks={setTasks}
                    taskName={task.name}
                    taskDeadline={task.deadline}
                    taskDes={task.description}
                    taskId={task.id}
                  />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Board;
