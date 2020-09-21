import React from 'react';
import {fetch} from "umi-request";

interface HeaderParamsProps{
    method: 'POST' | 'GET'
    credentials?:'omit' | 'same-origin' | 'include'
}

export interface DownloadFileProps {
   url:string
   headerParams:HeaderParamsProps
   children:React.ReactNode
}

const DownLoadFile:React.FC<DownloadFileProps> = props =>{
    const {url,headerParams,children} = props;
    const {method,credentials="include",...rest} = headerParams;
    const reg = new RegExp('"', 'g');
    const handleClick = async () =>{
        const response = await fetch(url,{
            method,
            headers:new Headers({
                Accept:'application/json',
                credentials,
                ...rest,
            }),
            responseType:'blob',
        });
        if(response){
            response.blob().then((blob: any) =>{
                const tag = document.createElement('a');
                const fileUrl = window.URL.createObjectURL(blob);
                const file = response.headers
                    .get('Content-Disposition')
                    .split('filename=')[1]
                    .replace(reg,'');
                const fileName = file.split('.');
                tag.href = fileUrl;
                tag.download = `${decodeURI(fileName[0])}.${fileName[1]}`;
                tag.style.display = 'none';
                document.body.append(tag);
                tag.click();
                window.URL.revokeObjectURL(fileUrl);
                document.body.removeChild(tag);
            })
                .catch(() =>{
                    console.log('文件下载失败');
                })
        }
    };
    return (<div onClick={handleClick}>{children}</div>)
};
export default DownLoadFile;
