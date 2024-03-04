import TaskNav from "../../components/TaskNav";
import TaskSidebar from "../../components/TaskSidebar/sidebar";
import Calendar from "../../components/calendar";

const Test = () => {
  return <div className="flex">
     
    <TaskSidebar/>
    <div>
    <TaskNav />

    <Calendar />
</div>
  </div>;
};

export default Test;
