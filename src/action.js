export const fetchAPIdata = () => (dispatch) => {
  //   let url = "https://jsonplaceholder.typicode.com/todos";
  let url = " https://jsonplaceholder.typicode.com/users";

  let result = fetch(url).then((data) => {
    data.json().then((apiData) => {
      return dispatch({
        type: "FETCH_API_DATA",
        data: apiData,
      });
    });
  });
};
