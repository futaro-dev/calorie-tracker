import React, { useState } from "react";
import { ItemProps } from "./Item/Item";
import { AxiosInstance } from "axios";

interface ItemFormProps {
  client: AxiosInstance;
  items: ItemProps[];
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}

const ItemForm: React.FC<ItemFormProps> = ({ client, items, setItems }) => {
  const [item, setItem] = useState<ItemProps>({
    id: 0,
    name: "",
    portionSize: 100,
    portionMeasure: "grams",
    nutrition: {
      calories: 0,
      fat: 0,
      saturates: 0,
      carbohydrates: 0,
      sugars: 0,
      fibre: 0,
      protein: 0,
      salt: 0,
    },
  });

  // POST
  const addItem = async (item: ItemProps) => {
    let response = await client.post("", {
      name: item.name,
      portionSize: item.portionSize,
      portionMeasure: item.portionMeasure,
      nutrition: item.nutrition,
    });

    setItems([response.data, ...items]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (
      name === "name" ||
      name === "portionSize" ||
      name === "portionMeasure"
    ) {
      setItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    } else {
      setItem((prevItem) => ({
        ...prevItem,
        nutrition: {
          ...prevItem.nutrition,
          [name]: value,
        },
      }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addItem(item);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Name</label>
          <input
            name="name"
            value={item.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-input">
          <label>Portion Size</label>
          <input
            name="portionSize"
            type="number"
            value={item.portionSize}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label>Portion Measure</label>
          <input
            name="portionMeasure"
            value={item.portionMeasure}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label>Calories</label>
          <input
            name="calories"
            type="number"
            value={item.nutrition.calories}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label>Fat</label>
          <input
            name="fat"
            type="number"
            value={item.nutrition.fat}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label>Saturates</label>
          <input
            name="saturates"
            type="number"
            value={item.nutrition.saturates}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label>Carbohydrates</label>
          <input
            name="carbohydrates"
            type="number"
            value={item.nutrition.carbohydrates}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label>Sugars</label>
          <input
            name="sugars"
            type="number"
            value={item.nutrition.sugars}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label>Fibre</label>
          <input
            name="fibre"
            type="number"
            value={item.nutrition.fibre}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label>Protein</label>
          <input
            name="protein"
            type="number"
            value={item.nutrition.protein}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label>Salt</label>
          <input
            name="salt"
            type="number"
            value={item.nutrition.salt}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ItemForm;
