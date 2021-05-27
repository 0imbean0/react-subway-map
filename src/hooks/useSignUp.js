import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { ROUTE } from '../constants';
import { setMessage } from '../redux';
import { request } from '../utils';

const useSignUp = () => {
  const [duplicateEmailError, setDuplicateEmailError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const checkDuplicateEmail = async ({ email }) => {
    try {
      await request.post('/members/email-check', { email });

      return false;
    } catch (error) {
      if (error.response.status === 409) {
        setDuplicateEmailError(error.response.data.message);

        return true;
      }

      console.error(error);
    }
  };

  const signUp = async ({ email, age, password }) => {
    try {
      await request.post('/members', { email, age, password });

      history.push(ROUTE.SIGN_IN.PATH);
      dispatch(setMessage({ message: '회원가입이 완료되었습니다.' }));
    } catch (error) {
      console.error(error);

      // TODO: 네트워크 에러 페이지 컴포넌트 만들기
      // history.push(ROUTE.SIGN_IN.PATH);
    }
  };

  return { duplicateEmailError, checkDuplicateEmail, signUp };
};

export default useSignUp;
