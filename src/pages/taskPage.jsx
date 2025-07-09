import CreateTask from "../components/createTask";
import TaskList from "../components/taskList";
import TitleBar from "../components/titleBar";

export default function TaskPage() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <TitleBar />
        <CreateTask />
        <TaskList />
      </div>
    </>
  );
}
