import { useRef, useState, useEffect } from "react";
import "./style.css";
import { List } from "./List";
export const Form = () => {
  const ref = useRef(null);
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    timetocook: "",
    price: "",
    file: "",
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch(`http://localhost:3001/food`)
      .then((d) => d.json())
      .then((res) => setData(res));
  };
  const handleChange = (e) => {
    let file;
    if (ref.current.files.length !== 0) {
      file = URL.createObjectURL(ref.current.files[0]);
    }
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setForm({
      ...form,
      [name]: value,
      file: file,
    });
  };
  console.log("form", form);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, form]);
    const payload = {
      title: form.title,
      ingredients: form.ingredients,
      timetocook: form.timetocook,
      price: form.price,
      file: form.file,
    };
    fetch("http://localhost:3001/food", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getData();
    });
  };
  console.log("data", data);
  return (
    <>
      <div className="form">
        <div className="postDiv">
          <form method="post" onSubmit={handleSubmit}>
            <h1>Add Recipe</h1>
            <div>
              <label>Food title:-</label>
              <input type="text" name="title" onChange={handleChange} />
            </div>
            <div>
              <label>Ingredients:-</label>
              <input type="text" name="ingredients" onChange={handleChange} />
            </div>
            <div>
              <label>Time to cook:-</label>
              <input type="text" name="timetocook" onChange={handleChange} />
            </div>
            <div>
              <label>Price:-</label>
              <input type="text" name="price" onChange={handleChange} />
            </div>
            <div>
              <label>image :-</label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                ref={ref}
              />
            </div>
            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
        <div className="sendDiv">
          <h2>List</h2>
          {data.map((e) => (
            <List data={e} />
          ))}
        </div>
      </div>
    </>
  );
};