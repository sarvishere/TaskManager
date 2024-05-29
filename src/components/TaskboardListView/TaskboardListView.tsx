import useBoards from "../../hooks/useBoards";
import Accordion from "../Accordion/Accordion";
import TaskProject from "./TaskProject";
import BoardListView from "./BoardTitle";
import { BoardResponse } from "../../services/board-service";
import TaskList from "./TaskList";

export interface TaskboardListViewProps {
  projectId: number;
  projectName: string;
  workspaceId: number;
  boards: BoardResponse[];
  // getBoards: any;
}

const TaskboardListView: React.FC<TaskboardListViewProps> = ({
  projectId,
  workspaceId,
  projectName,
  boards,
}: TaskboardListViewProps) => {
  const { isLoading, error } = useBoards();

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
