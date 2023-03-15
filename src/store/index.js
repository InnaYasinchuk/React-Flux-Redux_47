import { legacy_createStore } from "redux";

const counterReducer = (
  state = { coffee: 0, sugar: 0, isLoggedIn: false },
  action
) => {
  if (action.type === "incrementCoffee") {
    return {
      coffee: state.coffee + 1,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
    };
  }
  if (action.type === "decrementCoffee") {
    return {
      coffee: state.coffee - 1,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
    };
  }
  if (action.type === "increase") {
    return {
      coffee: state.coffee + action.number,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
    };
  }

  if (action.type === "incrementSugar") {
    return {
      sugar: state.sugar + 1,
      coffee: state.coffee,
      isLoggedIn: state.isLoggedIn,
    };
  }
  if (action.type === "decrementSugar") {
    return {
      sugar: state.sugar - 1,
      coffee: state.coffee,
      isLoggedIn: state.isLoggedIn,
    };
  }
  if (action.type === "increaseSugar") {
    return {
      coffee: state.coffee,
      sugar: state.sugar + action.number,
      isLoggedIn: state.isLoggedIn,
    };
  }
  if (action.type === "logIn") {
    return {
      coffee: state.coffee,
      sugar: state.sugar,
      isLoggedIn: true,
    };
  }
  return state;
};

const store = legacy_createStore(counterReducer);

export default store;
