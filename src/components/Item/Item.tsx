import React, { useState } from "react";
import "./Item.css";

export interface ItemProps {
  id: number;
  name: string;
  portionSize: number;
  portionMeasure: string;
  nutrition: NutritionProps;
}

export interface NutritionProps {
  calories: number;
  fat: number;
  saturates: number;
  carbohydrates: number;
  sugars: number;
  fibre: number;
  protein: number;
  salt: number;
}

const Item: React.FC<ItemProps> = ({
  id,
  name,
  portionSize,
  portionMeasure,
  nutrition,
}) => {
  const [multiplier, setMultiplier] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setMultiplier(parseInt(value) / portionSize);
  };

  const calculateConsumption = (nutritionValue: number) => {
    return Number(nutritionValue * multiplier).toFixed(2);
  };

  return (
    <div key={id} className="item--content">
      <div className="item--head">{name}</div>

      <div className="item--body">
        <div className="item--information">
          <div className="item--portion">
            <div className="item--portion-field">
              <div className="item--portion-size-label">Portion Size</div>
              <div className="item--portion-size-value">{portionSize}</div>
            </div>
            <div className="item--portion-field">
              <div className="item--portion-measure-label">Portion Measure</div>
              <div className="item--portion-measure-value">
                {portionMeasure}
              </div>
            </div>
          </div>

          <div className="item--nutrition">
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Calories</div>
              <div className="item--nutrition-value">{nutrition.calories}</div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Fat</div>
              <div className="item--nutrition-value">{nutrition.fat}</div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Saturates</div>
              <div className="item--nutrition-value">{nutrition.saturates}</div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Carbohydrates</div>
              <div className="item--nutrition-value">
                {nutrition.carbohydrates}
              </div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Sugars</div>
              <div className="item--nutrition-value">{nutrition.sugars}</div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Fibre</div>
              <div className="item--nutrition-value">{nutrition.fibre}</div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Protein</div>
              <div className="item--nutrition-value">{nutrition.protein}</div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Salt</div>
              <div className="item--nutrition-value">{nutrition.salt}</div>
            </div>
          </div>
        </div>

        <div className="item--consumption">
          <div className="item--portion-consumption">
            <input name="portion" type="number" onChange={handleChange} />
          </div>

          <div className="item--nutrition-consumption">
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Calories</div>
              <div className="item--nutrition-value">
                {calculateConsumption(nutrition.calories)}
              </div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Fat</div>
              <div className="item--nutrition-value">
                {calculateConsumption(nutrition.fat)}
              </div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Saturates</div>
              <div className="item--nutrition-value">
                {calculateConsumption(nutrition.saturates)}
              </div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Carbohydrates</div>
              <div className="item--nutrition-value">
                {calculateConsumption(nutrition.carbohydrates)}
              </div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Sugars</div>
              <div className="item--nutrition-value">
                {calculateConsumption(nutrition.sugars)}
              </div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Fibre</div>
              <div className="item--nutrition-value">
                {calculateConsumption(nutrition.fibre)}
              </div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Protein</div>
              <div className="item--nutrition-value">
                {calculateConsumption(nutrition.protein)}
              </div>
            </div>
            <div className="item--nutrition-field">
              <div className="item--nutrition-label">Salt</div>
              <div className="item--nutrition-value">
                {calculateConsumption(nutrition.salt)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
