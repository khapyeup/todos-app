import Tasks from "@/components/tasks";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center p-4 text-blue-500">Todo App</h1>
      <div className="p-2 md:p-6 w-full md:w-1/2 mx-auto">
        
        <Tasks />
      </div>
    </>
  );
}
