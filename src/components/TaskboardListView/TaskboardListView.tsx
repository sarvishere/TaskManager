import useBoards from "../../hooks/useBoards";
import Accordion from "../Accordion/Accordion";
import BoardListView from "./BoardTitle";
import TaskList from "./TaskList";
import Head from "./TaskProject";

export interface TaskboardListViewProps {
  projectId: number;
  projectName: string;
  workspaceId: number;
  boards: any;
}

const TaskboardListView: React.FC<TaskboardListViewProps> = ({
  projectId,
  workspaceId,
  projectName,
  boards,
}: TaskboardListViewProps) => {
  const { error } = useBoards();
  return (
    <>
      <Accordion
        id={projectId.toString()}
        head={<Head id={projectId.toString()} title={projectName} />}
      >
        <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
          {error ? (
            <div>Error: {error.message}</div>
          ) : (
            boards.map((board: any) => (
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
