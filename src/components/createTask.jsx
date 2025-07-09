import { useState } from "react";

export default function CreateTask() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="flex justify-center">
        <button
          className="bg-yellow-500 px-4 py-2 text-white font-bold rounded-lg"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          <h1>Create New Task</h1>
        </button>
      </div>
      {showForm ? (
        <>
          <div className="flex justify-center">
            <div className="bg-blue-800 text-white absolute w-96 h-60 rounded-lg">
              <div className="flex justify-center p-6">
                <h1 className="font-bold text-2xl">New Task:</h1>
              </div>
              <div className="flex justify-center p-4">
                <input
                  type="text"
                  className="bg-white rounded-md text-black h-8"
                />
              </div>
              <div className="flex justify-center p-4 space-x-4">
                <button
                  className="bg-yellow-500 text-white rounded-md px-4 py-2"
                  onClick={() => {}}
                >
                  Create
                </button>
                <button
                  className="bg-yellow-500 text-white rounded-md px-4 py-2"
                  onClick={() => {
                    setShowForm(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
