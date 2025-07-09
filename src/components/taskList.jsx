import TaskCard from "./taskCard";

export default function TaskList() {
  return (
    <>
      <div className="flex justify-center p-12">
        <div className="flex gap-8">
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </>
  );
}
