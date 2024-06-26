import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { decrement, incrementAsync } from "../../counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>{count}</h2>
      <div className="buttons">
        <button
          className="button is-primary"
          onClick={() => dispatch(incrementAsync(5))}
        >
          Increment
        </button>
        <button
          className="button is-warning"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
