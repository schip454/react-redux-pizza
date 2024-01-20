import axios from "axios";
import { FC, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Skeleton from "../components/PizzaBlock/Skeleton";

const FullPizza: FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPizzaById = async () => {
      try {
        const { data } = await axios(
          `https://659c1d9fd565feee2dac71dd.mockapi.io/items/${id}`
        );

        setPizza(data);
      } catch (error) {
        alert("Ошибка при получений пиццы!");
        navigate("/");
      }
    };
    fetchPizzaById();
  }, []);

  if (!pizza) {
    return (
      <div className="container center">
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
        laudantium.
      </p>
      <h4>{pizza.price} ₽</h4>

      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default FullPizza;
