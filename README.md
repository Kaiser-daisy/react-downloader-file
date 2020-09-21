# react-download-file
react file stream download

## Install
```
$ yarn add react-download-file
$ npm install react-download-file
```
## Example
```
import React from 'react';
import DownLoadFile,{DownloadFileProps} from 'react-download-file';

const ExampleComponent:React.FC<DownloadFileProps> = props =>{
    return (
        <DownLoadFile
            url="/user/info"
            headerParams={{
                method:'POST',
                credentials:'include',
            }}
        >
         <Button>下载</Button>
        </DownLoadFile>
   )
}
export default ExampleComponent;
```
## License
*react-download-file* available under the MIT License

## Keywords

[react](https://www.npmjs.com/search?q=keywords:react) [fetch](https://www.npmjs.com/search?q=keywords:fetch)





