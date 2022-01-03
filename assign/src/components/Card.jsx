import "./style.css";
export const Card = ({ data }) => {
  console.log("cart", data);
  return (
    <>
      <div className="listData">
          <div>
          <p>
            Title:-{data.title}  
          </p>
          <p>
          ingredients:- {data.ingredients}
          </p>
          <p>
          Time To cook:- {data.timetocook} 
          </p>
          <p>
          Price:- {data.price}
          </p>
          </div>
          <div>
          <img className="listImg" src={data.file} alt="image" />
          </div>
        </div>
    </>
  );
};