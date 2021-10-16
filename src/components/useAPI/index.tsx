import { useState } from 'react';
import axios, {
  Method as methods,
  AxiosRequestHeaders as headers,
} from 'axios';

export function useAPI() {
  const [status, setStatus] = useState('idle');
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<any>();

  type APICallProps = {
    url: string;
    method: methods;
    data?: object;
    headers?: headers;
  };

  const apiCall = (props: APICallProps) => {
    setStatus('pending');
    axios({
      url: props.url,
      method: props.method,
      data: props.data,
      headers: props.headers,
    })
      .then((res) => {
        setResponse(res.data);
        setError(null);
        setStatus('succeed');
      })
      .catch((err) => {
        setError(err);
        setResponse(null);
        setStatus('error');
      });
  };

  return [status, response, error, apiCall];
}
