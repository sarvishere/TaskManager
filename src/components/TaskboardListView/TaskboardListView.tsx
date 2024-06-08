import useBoards from "../../hooks/useBoards";
import Accordion from "../Accordion/Accordion";
import BoardListView from "./BoardTitle";
import TaskList from "./TaskList";
import { useEffect } from "react";
import Head from "./TaskProject";

export interface TaskboardListViewProps {
  projectId: number;
  projectName: string;
  workspaceId: number;
}

const TaskboardListView: React.FC<TaskboardListViewProps> = ({
  projectId,
  workspaceId,
  projectName,
}: TaskboardListViewProps) => {
  const { isLoading, error, getBoards, boards } = useBoards();

  useEffect(() => {
    if (workspaceId && projectId) {
      getBoards(workspaceId, projectId);
    }
  }, []);

  return (
    <>
      <Accordion
        id={projectId.toString()}
        head={<Head id={projectId.toString()} title={projectName} />}
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
                <TaskList
                  workspaceId={workspaceId}
                  projectId={projectId}
                  boardId={board.id}
                  boardColor={board.color}
                />
              </Accordion>
            ))
          )}
        </div>
      </Accordion>
    </>
  );
};

export default TaskboardListView;
