import { useState } from "react";
import taskMemberService, { Member } from "../services/task-mebmer";

const useTaskMembers = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const getTaskMembers = (
    workspaceId: number,
    projectId: number,
    boardId: number,
    taskId: number
  ) => {
    setIsLoading(true);
    taskMemberService(workspaceId, projectId, boardId, taskId)
      .getAll()
      .then((res) => setMembers(res.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  return {
    isLoading,
    error,
    members,
    getMembers: getTaskMembers,
  };
};

export default useTaskMembers;
