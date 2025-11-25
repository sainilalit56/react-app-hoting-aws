// actions/dataActions.js
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" }); // Dispatch action to show loading state
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = [...(await response.json())];
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data }); // Dispatch success action with data
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message }); // Dispatch failure action with error
    }
  };
};
