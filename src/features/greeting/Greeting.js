import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMessage from './greetingAPI';

const Greeting = () => {
  const dispatch = useDispatch();

  const greeting = useSelector((state) => state.messageReducer.message);
  console.log(greeting);

  useEffect(async () => {
    dispatch(getMessage());
  }, []);

  return (
    <>
      <h1>
        Greeting:
        {' '}
        {greeting}
      </h1>
    </>
  );
};

export default Greeting;
