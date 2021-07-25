const initialState = {
  valute: [],
  baseValute: "",
  baseValuteSelected: false,
  valuteLoad: true,
  convertingValute: "",
  converterValuteWindow: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "get/course/successes":
      return {
        ...state,
        valute: Object.entries(action.payload.quote),
        baseValute: action.payload.base,
        valuteLoad: false,
      };
    case "base/valute/window":
      return {
        ...state,
        baseValuteSelected: !state.baseValuteSelected,
      };
    case "base/valute/select":
      return {
        ...state,
        valute: Object.entries(action.payload.quote),
        baseValute: action.payload.base,
        baseValuteSelected: false,
      };
    case "converter/valute/window":
      return {
        ...state,
        converterValuteWindow: !state.converterValuteWindow,
      };
    case "converting/valute/select":
      return {
        ...state,
        convertingValute: state.valute.filter((item) => {
          return item[0] === action.payload;
        }),
        converterValuteWindow: false,
      };

    default:
      return state;
  }
};
