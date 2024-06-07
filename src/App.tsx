import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { ItemProps } from "./components/Item/Item";
import ItemForm from "./components/ItemForm";
import Items from "./components/Items/Items";

const client = axios.create({
  baseURL: "http://localhost:3000/items",
});

function App() {
  const [items, setItems] = useState<ItemProps[]>([]);

  // GET
  useEffect(() => {
    const fetchItem = async () => {
      let response = await client.get("");
      setItems(response.data);
    };
    fetchItem();
  }, []);

  return (
    <div className="main">
      <ItemForm client={client} items={items} setItems={setItems} />
      <Items client={client} items={items} setItems={setItems} />
    </div>
  );
}

export default App;
