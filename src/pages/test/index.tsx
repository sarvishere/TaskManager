import CreateProjectModal from "../../components/Modal/createProjectmodal";

const Test = () => {
  return (
    <CreateProjectModal
      onClose={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default Test;
