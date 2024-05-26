import { useEffect } from "react";
import useBoards from "../../hooks/useBoards";
import Accordion from "../Accordion/Accordion";
import TaskProject from "./TaskProject";
import BoardListView from "./BoardTitle";
import TaskItem from "./TaskItem";
import { BoardResponse } from "../../services/board-service";

export interface TaskboardListViewProps {
  projectId: number;
  projectName: string;
  workspaceId: number | undefined;
  boards: BoardResponse[];
  getBoards: any;
}

const TaskboardListView: React.FC<TaskboardListViewProps> = ({
  projectId,
  workspaceId,
  projectName,
  boards,
  getBoards,
}: TaskboardListViewProps) => {
  const { isLoading, error } = useBoards();

  useEffect(() => {
    if (workspaceId && projectId) {
      getBoards(workspaceId, projectId);
    }
  }, [workspaceId, projectId, getBoards]);

  return (
    <>
      <Accordion
        id={projectId.toString()}
        head={<TaskProject id={projectId.toString()} title={projectName} />}
      >
        <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            boards.map((board) => (
              <Accordion
                key={board.id}
                id={board.id.toString()}
                head={
                  <BoardListView
                    BoardName={board.name}
                    BoardId={board.id}
                    BoardColor={board.color}
                    BoardTask={board.tasks_count.toString()}
                  />
                }
              >
                <TaskItem taskState="Pending" taskDeadline="۶ آبان" />
              </Accordion>
            ))
          )}
        </div>
      </Accordion>
    </>
  );
};

export default TaskboardListView;
