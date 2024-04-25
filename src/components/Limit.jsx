import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Limit({ limit, setLimit }) {
  
  const nextHandler = () => {
    if (limit === 20) return;
    setLimit(limit + 10);
  };
  const downHandler = () => {
    if (limit === 10) return;
    setLimit(limit - 10);
  };

  return (
    <>
      {limit === 10 ? (
        <div onClick={nextHandler}>
          <IoIosArrowDown />
        </div>
      ) : (
        <div onClick={downHandler}>
          <IoIosArrowUp />
        </div>
      )}
    </>
  );
}
