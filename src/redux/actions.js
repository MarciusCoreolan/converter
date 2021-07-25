export const getCourse = (charcode) => {
  return (dispatch) => {
    fetch(
      "https://finnhub.io/api/v1/forex/rates?base=USD&token=c3u3l1iad3iemlvdp540"
    )
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: "get/course/successes",
          payload: json,
        })
      );
  };
};
export const baseValuteWindow = () => {
  return (dispatch) => {
    dispatch({ type: "base/valute/window" });
  };
};
export const baseValuteSelect = (charcode) => {
  return (dispatch) => {
    fetch(
      `https://finnhub.io/api/v1/forex/rates?base=${charcode}&token=c3u3l1iad3iemlvdp540`
    )
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: "base/valute/select",
          payload: json,
        })
      );
  };
};
export const converterValuteWindow = () => {
  return (dispatch) => {
    dispatch({ type: "converter/valute/window" });
  };
};
export const convertingValuteSelect = (charcode) => {
  return (dispatch) => {
    dispatch({
      type: "converting/valute/select",
      payload: charcode,
    });
  };
};
