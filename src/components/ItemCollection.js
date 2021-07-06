import React, { useState, useEffect } from "react";
import { getFirestore } from "./json-to-firestore";

function ItemCollection() {
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.size === 0) {
          console.log("No results");
        }
        setItem(querySnapShot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  return (
    <div>
    {console.log(item)}
      {item.map((element) => {
        return (
          <div>
            <h1>{element.title}</h1>
            <p>$ {element.price}</p>
            <p>{element.description}</p>
            <img src={element.img} alt="imagen"></img>
          </div>
        );
      })}
    </div>
  );
}

export default ItemCollection;
