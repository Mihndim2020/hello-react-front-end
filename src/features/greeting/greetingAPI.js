import axios from 'axios';

const GET_MESSAGE = 'message/slice/GET_MESSAGE';
const GET_MESSAGE_SUCCESS = 'message/slice/GET_MESSAGE_SUCCESS';
const GET_MESSAGE_ERR = 'message/slice/GET_MESSAGE_ERR';

const baseUrl = 'http://localhost:3090/v1/messages'



const getMessage = () => async (dispatch) => {
  dispatch({ type: GET_MESSAGE });
  const response = await axios.get(baseUrl);
  const message = await response.data;
  console.log(message.body);
  return dispatch({ type: GET_MESSAGE_SUCCESS, message });
};

export {
  getMessage as default,
  GET_MESSAGE,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_ERR,
};