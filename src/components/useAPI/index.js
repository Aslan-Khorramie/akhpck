import { useState } from 'react';
import axios from 'axios';

export function useAPI() {
  const [status, setStatus] = useState('idle');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const apiCall = (url = '', method = '', data = {}, headers = {}) => {
    setStatus('pending');
    axios({
      url: url,
      method: method,
      data: data && data,
      headers: headers && headers,
    })
      .then((res) => {
        setResponse(res.data);
        setError(null);
        setStatus('succeed');
      })
      .catch((err) => {
        setError(err.response);
        setResponse(null);
        setStatus('error');
      });
  };

  return [status, response, error, apiCall];
}
