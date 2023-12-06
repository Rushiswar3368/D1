import "../styles.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "./Card";
export function Main() {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    Axios.get("https://dummyjson.com/products")
      .then((msg) => setProd(msg.data.products))
      .catch((err) => alert(err));
  }, []);
  return (
    <div>
      {/* <h1 class="c1"> Main</h1> */}
      {/* {console.log(prod)} */}
      <div class="row">
        {prod.map((val) => {
          return <Card obj={val} />;
        })}
      </div>
      {/* <h1 class="text-success"> Example bootstrap Styling</h1> */}
    </div>
  );
}
