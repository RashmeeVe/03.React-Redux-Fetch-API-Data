const apiData = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_DATA":
      return { ...state, data: action.data };
    default:
      return state;
  }
};
export default apiData;
