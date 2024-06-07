import React from "react";
import Item, { ItemProps } from "../Item/Item";
import { AxiosInstance } from "axios";

import "./Items.css";

interface ItemsProps {
  client: AxiosInstance;
  items: ItemProps[];
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}

const Items: React.FC<ItemsProps> = ({ client, items, setItems }) => {
  const deleteItem = async (id: number) => {
    await client.delete(`${id}`);
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const editItem = async (id: number) => {
    console.log(id);

    return id;
  };

  return (
    <div className="items-container">
      {items.map((item) => {
        return (
          <div key={item.id} className="item--card">
            <Item
              id={item.id}
              name={item.name}
              portionSize={item.portionSize}
              portionMeasure={item.portionMeasure}
              nutrition={item.nutrition}
            />
            <div className="item--buttons">
              <div className="item--edit-button">
                <button onClick={() => editItem(item.id)}>Edit</button>
              </div>
              <div className="item--delete-button">
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
