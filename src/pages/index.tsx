import axios from "axios";
import { useState, useEffect } from "react";
type Person = {
  title: string;
  id: number;
  checked: boolean;
};
export default function Home() {
  const [data, setData] = useState<Person[]>([]);
  const [name, setName] = useState("");
  const postData = () => {
    if (name === null) {
      alert("Please write a title");
    } else {
      axios
        .post("http://localhost:4000/todos/post", {
          name: name,
        })
        .then((res) => setData([...data, res?.data]));
      // .catch((err) => console.log(err));
    }
  };
  const deleteData = (id: number) => {
    axios
      .delete(`http://localhost:4000/delete/${id}`, {})
      .then((res) => console.log(res?.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios.get("http://localhost:4000/todos/").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen grid place-items-center">
      <div>
        <input
          className="border-color: black;"
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <button className="... focus:ring-2" onClick={postData}>
          enter
        </button>
      </div>
      <div className="">
        {data.map((item) => {
          return (
            <ul key={item.id}>
              <li className="flex items-center">
                <label>
                  <input type="checkbox" className="mr-2" />
                  <div>{item.title}</div>
                </label>
                <button
                  onClick={() => deleteData(item.id)}
                  className="ml-4 border px-2 rounded-full"
                >
                  delete
                </button>
                <button className="ml-4 border px-2 rounded-full">
                  uptade
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
