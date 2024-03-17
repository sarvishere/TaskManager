import CreateProjectModal from "../../components/Modal/createprojectmodal";

const Test = () => {
  return (
    <CreateProjectModal onClose={function (): void {
      throw new Error("Function not implemented.");
    } }/>
  )
};

export default Test;
