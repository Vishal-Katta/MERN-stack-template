import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadListData } from "../redux/Action/action";

const libraries = [
  {
    name: "Mongodb",
    id: "mongodb",
  },
  {
    name: "Express",
    id: "express",
  },
  {
    name: "React",
    id: "react",
  },
  {
    name: "Nodejs",
    id: "nodejs",
  },
  {
    name: "Vite",
    id: "vite",
  },

  {
    name: "Redux",
    id: "redux",
  },
  {
    name: "TailwindCSS",
    id: "tailwind",
  },
  {
    name: "MUI",
    id: "mui",
  },
];

export default function Hello() {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useState(() => {
    dispatch(
      loadListData((resp) => {
        setList(() => resp);
      })
    );
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-gray-100">
      <div className="text-center">
        <div className="animate-pulse text-green-500 text-5xl font-bold mb-6">
          Hello
        </div>
        <div className="text-lg font-semibold mb-4">
          This Project setup Template includes the following. <br />
          Happy Coding!
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {libraries.map((library, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              <img
                src={`https://skillicons.dev/icons?i=${library.id}`}
                alt={`${library.name} Logo`}
                className="w-16 h-16 mb-2"
              />
              <div className="text-gray-800">{library.name}</div>
            </div>
          ))}
        </div>

        {list?.length > 0 && (
          <div className="mt-5 space-y-1">
            <div className="text-lg font-medium">This List is fetched from backend</div>
            <div>
              {JSON.stringify(list)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
