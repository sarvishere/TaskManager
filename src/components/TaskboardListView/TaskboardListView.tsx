import Accordion from "../Accordion/Accordion";
import TaskHead from "./TaskHead";
import TaskItem from "./TaskItem";
import TaskProject from "./TaskProject";

const TaskboardListView = () => {
  return (
    <>
      <Accordion id="1" head={<TaskProject id="1" title="پروژه اول" />}>
        <Accordion id="1-1" head={<TaskHead id="1-1" taskState="Pending" />}>
          <TaskItem taskState="Pending" taskDeadline="۶ آبان" />
          <TaskItem taskState="Pending" taskDeadline="۶ آذر" />
        </Accordion>
        <Accordion
          id="1-2"
          head={<TaskHead id="1-2" taskState="In progress" />}
        >
          <TaskItem taskState="In progress" taskDeadline="۷ بهمن" />
          <TaskItem taskState="In progress" taskDeadline="۷ اسفند" />
          <TaskItem taskState="In progress" taskDeadline="۷ دی" />
        </Accordion>
      </Accordion>
    </>
  );
};
export default TaskboardListView;
