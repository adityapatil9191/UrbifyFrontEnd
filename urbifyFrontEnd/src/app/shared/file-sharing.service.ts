import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileSharingService {

imageFiles;
sendFiles(files){
  this.imageFiles = files;
  return;
}

getFiles(){
  return this.imageFiles;
}


  constructor() { }
}
