import { ActionTypes } from "./action_type";

const initialState = {
  products: [
    { title:'Name', field:'name' },
    { title:'abv', field:'abv' },
    { title:'Tagline', field:'tagline' },
    { title:'Description', field:'description' },
    { title:'First Brewed', field:'first_brewed' },
    { title:'Contributed By', field:'contributed_by' }
  ]
}

export const columnReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
}