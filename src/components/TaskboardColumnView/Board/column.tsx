import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import { Droppable } from "react-beautiful-dnd";

interface ColumnProps {
  handleDeleteBoard: (id: number) => void;
  handleUpdateBoard: (title: string, id: number) => void;
  boardId: number;
  boardColor: string;
  boardTask: number;
  boardName: string;
  boardTasks: any[];
  tasks: any[];
  setTasks: React.Dispatch<React.SetStateAction<any[]>>;
  deletedTasks: any;
}

const Column = ({ boardId, tasks, setTasks, deletedTasks }: ColumnProps) => {
  const filteredTasks = tasks.filter((task) => !deletedTasks.includes(task.id));

  return (
    <Droppable droppableId={String(boardId)}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {filteredTasks.map((task, index) => (
            <TaskCard
              key={task.id}
              index={index}
              boardId={boardId}
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
  );
};

export default Column;
