# react-downloader-file
react file stream download

## Install
```
$ yarn add react-downloader-file
$ npm install react-downloader-file
```
## Example
```
import React from 'react';
import DownLoadFile,{DownloadFileProps} from 'react-downloader-file';

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
*react-downloader-file* available under the MIT License

## Keywords

[react](https://www.npmjs.com/search?q=keywords:react) [fetch](https://www.npmjs.com/search?q=keywords:fetch)





