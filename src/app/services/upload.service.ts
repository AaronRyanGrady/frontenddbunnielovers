import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import {User} from '../models/user';
import {GLOBAL} from './global';

@Injectable()
export class UploadService {
    public url:string;
    

    constructor()
{
    this.url=GLOBAL.url;
}

makeFileRequest(url:string,params:Array<string>,files:Array<File>,token:string,name:string){

    return new Promise(function(resolve,reject){
        var formData: any =new FormData();
        var xhr = new XMLHttpRequest();

        for(var i=0; i< files.length; i++) {
            formData.append(name,files[i],files[i].name);
        }

        xhr.onreadystatechange = function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    resolve(JSON.parse(xhr.response));
                }
                else{
                    reject(xhr.response);
                }
            }
        }

        xhr.open('POST', url, true);
        
       

        // Configuramos los encabezados de CORS
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'Authorization');

        xhr.send(formData);
        

    });
}


}