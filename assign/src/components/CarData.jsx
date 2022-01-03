import "./style.css";
import {Card} from "./Card";
export const Carddata = ({adddata})=>{
    return <>
    <h2 className="carddivv">Cart data</h2>
        {adddata.map((e) => (
          <Card data={e} />
        ))}
    </>
}