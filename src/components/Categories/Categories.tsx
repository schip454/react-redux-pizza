import React, { FC } from "react";

interface ICategoriesProps {
  value: number;
  onClickCategory: (i: number) => void;
}

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: FC<ICategoriesProps> = React.memo(
  ({ value, onClickCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, i) => (
            <li
              key={categoryName}
              onClick={() => onClickCategory(i)}
              className={value === i ? "active" : ""}>
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
