import { useState } from "react";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";
import useAddBoard from "../../../hooks/useAddBoard";

interface newBoardProps {
  workspaceId: number;
  projectId: number;
  handleAddBoard: any;
}

const NewBoard = ({
  workspaceId,
  projectId,
  handleAddBoard,
}: newBoardProps) => {
  const [newName, setNewName] = useState("");
  const [boardColor, setBoardColor] = useState("");
  const [showNewBoard, setShowNewBoard] = useState(false);
  const { addBoard } = useAddBoard();

  const handleCreateBoard = () => {
    if (newName && boardColor) {
      addBoard(
        workspaceId,
        projectId,
        { name: newName, color: boardColor },
        (newBoard) => {
          handleAddBoard(newBoard);
        }
      );
      setShowNewBoard(false);
      setNewName("");
      setBoardColor("");
    } else {
      alert("Please enter a board name and select a color.");
    }
  };

  const handleModal = () => {
    setShowNewBoard(true);
  };

  return (
    <div className="items-center flex-shrink-0 shadow-[0_3px_4px_0_rgba(0,0,0,0.2)] rounded-2xl w-[250px] h-auto py-2 px-3 bg-white">
      <div className="flex ">
        <Button onClick={handleModal} asChild>
          <Icon iconName="Add" />
        </Button>

        <input
          type="text"
          placeholder="ایجاد برد جدید"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>

      <div>
        {showNewBoard && (
          <div className="flex">
            <div className="ml-3">
              <button onClick={() => setShowNewBoard(false)}>
                <Icon
                  iconName="Close"
                  style={{
                    background: "white",
                    border: "1px solid #AAAAAA",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    padding: "0",
                    cursor: "pointer",
                  }}
                />
              </button>
            </div>
            <div>
              <div className="flex mt-2 gap-2">
                <button
                  onClick={() => setBoardColor("red")}
                  style={{
                    backgroundColor: "red",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50px",
                    border: boardColor === "red" ? "2px solid black" : "none",
                  }}
                ></button>
                <button
                  onClick={() => setBoardColor("yellow")}
                  style={{
                    backgroundColor: "yellow",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50px",
                    border:
                      boardColor === "yellow" ? "2px solid black" : "none",
                  }}
                ></button>
                <button
                  onClick={() => setBoardColor("green")}
                  style={{
                    backgroundColor: "green",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50px",
                    border: boardColor === "green" ? "2px solid black" : "none",
                  }}
                ></button>
              </div>

              <Button
                className="items-center flex mt-2"
                onClick={handleCreateBoard}
                color="brand"
                variant="primary"
                size="small"
                weight="200"
                fontSize="S"
              >
                Create Board
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewBoard;
