import { Dispatch, SetStateAction, useState } from "react";

const useToggle = (
  defaultValue: boolean = false
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [state, setState] = useState(defaultValue);

  const toggleState = () => {
    setState((prev) => !prev);
  };

  return [state, toggleState, setState];
};

export default useToggle;
