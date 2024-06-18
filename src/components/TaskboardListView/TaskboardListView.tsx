import { useParams } from "react-router-dom";
import useBoards from "../../hooks/useBoards";
import Accordion from "../Accordion/Accordion";
import Flex from "../ui/Flex";
import BoardListView from "./BoardTitle";
import TaskList from "./TaskList";
import Head from "./TaskProject";
import { useContext } from "react";
import { BoardContext } from "../../layout/Board";
import { BoardResponse } from "../../services/board-service";

export interface TaskboardListViewProps {
  boards: BoardResponse[];
}

const TaskboardListView: React.FC<TaskboardListViewProps> = ({
  boards,
}: TaskboardListViewProps) => {
  const params = useParams();
  const { error } = useBoards();
  const { workspaceId, projectId } = params as {
    workspaceId: string;
    projectId: string;
  };
  const { projectNameState } = useContext(BoardContext);

  return (
    <>
      <Accordion
        id={projectId.toString()}
        head={<Head id={projectId.toString()} title={projectNameState} />}
      >
        <Flex direction="col" onClick={(e) => e.stopPropagation()}>
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
                  workspaceId={Number(workspaceId)}
                  projectId={Number(projectId)}
                  boardId={board.id}
                  boardColor={board.color}
                />
              </Accordion>
            ))
          )}
        </Flex>
      </Accordion>
    </>
  );
};

export default TaskboardListView;
