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
        <Accordion id="1-3" head={<TaskHead id="1-3" taskState="Done" />}>
          <TaskItem taskState="Done" taskDeadline="۱۰ فروردین" />
          <TaskItem taskState="Done" taskDeadline="۱۱ اردیبهشت" />
          <TaskItem taskState="Done" taskDeadline="۱۲ خرداد" />
        </Accordion>
      </Accordion>
      <Accordion id="2" head={<TaskProject id="2" title="پروژه دوم" />}>
        <Accordion id="2-1" head={<TaskHead id="2-1" taskState="Pending" />}>
          <TaskItem taskState="Pending" taskDeadline="۲۰ تیر" />
          <TaskItem taskState="Pending" taskDeadline="۲۲ مرداد" />
        </Accordion>
        <Accordion
          id="1-2"
          head={<TaskHead id="2-2" taskState="In progress" />}
        >
          <TaskItem taskState="In progress" taskDeadline="۷ بهمن" />
          <TaskItem taskState="In progress" taskDeadline="۷ اسفند" />
          <TaskItem taskState="In progress" taskDeadline="۷ دی" />
        </Accordion>
        <Accordion id="2-3" head={<TaskHead id="2-3" taskState="Done" />}>
          <TaskItem taskState="Done" taskDeadline="۱۰ فروردین" />
          <TaskItem taskState="Done" taskDeadline="۱۱ اردیبهشت" />
        </Accordion>
      </Accordion>
    </>
  );
};
export default TaskboardListView;
