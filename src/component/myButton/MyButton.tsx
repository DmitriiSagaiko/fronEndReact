import { FC } from "react";
import styles from "./MyButton.module.css";

//создаем и типизируем входные данные (пропсы)
interface IBtnProps {
    text: string,
    myClick?: () => void;
}



//передаем дженериком <IBtnProps> типа пропсов и достаем деструктуризацией интерфейса из круглых скобок из аргументов
const MyButton: FC<IBtnProps> = ({text, myClick}) => {
  const result = (
    <div>
    {/* используем пропсы в нужном месте см. дальше Sandwich */}
      <button onClick={myClick} className={`${styles.active} ${styles.button}`}>{text}</button>
    </div>
  );
  return result;
}

export default MyButton;
