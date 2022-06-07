import axios from "axios";
import { FILTER_USERS, GET_USERS} from "./users.types";

export const getUsers = () => async (dispatch: any) => {
  try {
    let result: any = await axios.get(
      //`${process.env.REACT_APP_APIURL}/api/users` 
      `http://localhost:20619/api/users`
    );
    console.log({getUsers:result.data})
    return dispatch({
      type: GET_USERS,
      payload: result.data,
    });
  } catch (error) {
    console.log({ errorMessage: error });
  }
};

export const filterUsers =(value:string) => (dispatch:any) => {
  console.log({value});
  return dispatch({
    type: FILTER_USERS,
    payload: value,
  });
}
