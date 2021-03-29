const initialState = [{ data: "", country: "", login: false, approval: null, ProductId: "", searchValue: "", fitlter: ["suraj", "aalok"], userData: null, userIn: false, userOut: false }];

const rootReducer = (state = initialState, action) => {
<<<<<<< HEAD
  // console.log(action)
=======
  console.log(action)
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
  switch (action.type) {
    case "new": {
      return {
        ...state,
        data: action.data,
        login: true,
      };
    }
    case "login Success": {
      return {
        ...state,
        login: true,
      };
    }
    case "signOut": {
      return {
        ...state,
        login: false,
      };
    }
    case "reachProduct": {
      return {
        ...state,
        productId: action.productId,
      };
    }
    case "countryName": {
      return {
        ...state,
        country: action.country,
      };
    }
    case "submission Successful": {
      console.log("Succeessful");
      return {
        ...state,
      };
    }
    case "setUser": {
      return {
        ...state,
        userIn: action.userIn,
        userOut: action.userOut,
      };
    }
    case "filter added": {
      console.log("filter added");
      return {
        ...state,
      };
    }
    case "filter removed": {
      console.log("filter removed");
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default rootReducer;
