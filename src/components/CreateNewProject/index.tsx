import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import useProjects from "../../hooks/useProjects";

interface ICreateNewProject {
  visible: boolean;
  onClose: () => void;
  workspaceId: number;
}
const CreateNewProject: React.FC<ICreateNewProject> = ({
  visible,
  onClose,
  workspaceId,
}): JSX.Element => {
  const [projectName, setProjectName] = useState("");

  const { addProject } = useProjects(workspaceId);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = { name: `${projectName}` };
    addProject(workspaceId, data);
  };

  return (
    <div
      className={`    ${
        !visible && "hidden"
      } fixed h-screen w-screen z-50 inset-0 bg-[#17191B]/60 backdrop-blur-sm flex justify-center items-center`}
    >
      <div className="w-[500px] p-6 bg-white border rounded-lg flex flex-col justify-center items-center font-iranyekan">
        <form
          className="w-[452px] flex flex-col justify-between p-2 h-3/4"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-between">
            <button onClick={onClose}>
              <Icon iconName="Close" />
            </button>
            <h2 className="text-2xl text-center font-black flex-grow">
              ساختن پروژه جدید
            </h2>
          </div>

          <div className="flex flex-col mb-8 mt-8">
            <label
              htmlFor="workSpaceName"
              className="fontWeight-normal text-sm"
            >
              نام ورک‌اسپیس
            </label>
            <input
              type="text"
              id="workSpaceName"
              className="w-full rounded-md border border-[#AAAAAA] h-[40px] mt-1 outline-none"
              value={projectName}
              onChange={handleOnChange}
            />
          </div>
          <Button color="brand" size="full" type="submit">
            ایجاد پروژه
          </Button>
        </form>
      </div>
    </div>
  );
};
export default CreateNewProject;
