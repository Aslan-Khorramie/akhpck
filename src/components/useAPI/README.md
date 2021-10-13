# ThemeWrapper

## _Wrapp your pages in it and inherit global theme settings_

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

useAPI, an axios based custom hook to handle all your api requests.

## Features

- Light Weigth
- Use axios
- handle CRUD requests
- Easy to use

## Arguments

List of Arguments is shown here:

- url: api endpoint string
- methos: all http request methods
- data: data object needed for specefic requests - pass null if no data is needed
- headers: headers object that specify request token and configs - pass null if no headers is needed

## How to use

```javascript
import {useAPI} from 'akhpck';

function Sample(){
const [status, response, error, apiCall] = useAPI()

apiCall(
 'api-endpoint-url',
 'request-method',
 {data object to call api with},
 {headers object to call api with}
)

console.log(status, response, error)

    return <> ... </>
}
```

## Development

Want to contribute? Great!
Create a Pull Request on akhpck [Github](https://github.com/Aslan-Khorramie/akhpck/tree/main/src/components/useAPI) page.

## License

MIT
