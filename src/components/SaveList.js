import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SaveList = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);
  const dispatch = useDispatch();

  const saveInfo = () => {
    localStorage.setItem("coffee", coffee);
    localStorage.setItem("sugar", sugar);
  };

  const clearInfo = () => {
    localStorage.removeItem("coffee");
    localStorage.removeItem("sugar");
  };

  useEffect(() => {
    if (localStorage.getItem("coffee")) {
      dispatch({
        type: "setState",
        state: {
          coffee: +localStorage.getItem("coffee"),
          sugar: +localStorage.getItem("sugar"),
        },
      });
    }
  }, []);

  if (isLoggedIn) {
    return (
      <div className="save">
        <button onClick={saveInfo}>SAVE</button>
        <button onClick={clearInfo}>CLEAR</button>
      </div>
    );
  } else {
    return <p>You must be logged in to save the list</p>;
  }
};

export default SaveList;
