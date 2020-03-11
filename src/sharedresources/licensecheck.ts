// License check for all web parts as part of intranet solution with shared global variable cdblck66
//import for rest calls
import {
    SPHttpClient,
    SPHttpClientResponse   
  } from '@microsoft/sp-http';

  export interface ISPKeys {
    value: ISPKeyList[];
  }
  export interface ISPKeyList{
    Title:string;
    MultiSchoolPath:string;
  }
export class CDBLicense {
    constructor(){
        //nothing
    }

    private _getKeyData(cdbcontext: any): Promise<ISPKeys> {
        return cdbcontext.spHttpClient.get(window.location.protocol + `//` + window.location.host + `/sites/cdbconfig/_api/web/lists/GetByTitle('cdb')/Items?$select=Title,MultiSchoolPath&$top=50&$orderby=ID desc`, SPHttpClient.configurations.v1)
          .then((response: SPHttpClientResponse) => {
            return response.json();
          });
      }
      //check multi school path
    private _renderkeydata(items: ISPKeyList[]):boolean{
        //loop through multischool
        let foundmultischool:boolean = false;
        let cdblck66 = false;
        items.forEach((item: ISPKeyList) => {
            if(!foundmultischool){
                if((window.location).toString().toLowerCase().indexOf(item.MultiSchoolPath.toLowerCase()) !== -1){
                    foundmultischool = true;
                    //check license key
                    if(this.chkall(item.Title)){
                        cdblck66 = true;
                    }
                }
            }
        });
        // if matching multi-school has not been found - try last license key
        // if(!foundmultischool){
        //     if(this.chkall(lastitemTitle)){
        //         cdblck66 = true;
        //     }
        // }
        // annoying warning if license has expired
        if(!cdblck66){
            alert("License not valid for web parts - contact https://www.clouddesignbox.co.uk to renew or remove the web parts from the page to remove this warning");
            console.log("License not valid for web parts - contact https://www.clouddesignbox.co.uk to renew or remove the web parts from the page to remove this warning");
        }   
        return cdblck66;
    }
    private cdbtapcpn(cdbvartemp: string, cdbkey :number):string{
        let numarr: Array<number> = cdbvartemp.split("").map(myc => myc.charCodeAt(0)^(cdbkey));
        return String.fromCharCode.apply(undefined,numarr);
    }
    private cdbck:boolean = false;
    private chkall(cdbkstring:string):boolean{
        try{
            let localcdbkstringarray: Array<string> = this.cdbtapcpn(decodeURIComponent(encodeURI(atob(cdbkstring))),42).split("/");
            let todaydate: Date = new Date();
            let datecode: boolean = false;
            if(todaydate.getFullYear() < parseInt(localcdbkstringarray[1])){
                datecode = true;
            }else if(todaydate.getFullYear() == parseInt(localcdbkstringarray[1])){
                if((todaydate.getMonth() + 1) <= parseInt(localcdbkstringarray[0])){
                    datecode = true;
                }
            }
            if(datecode){
                if(localcdbkstringarray[2] == window.location.host.split(".")[0]){
                    this.cdbck = true;
                }
            }    
        }
        catch(err){
            return false;
        }      
        return this.cdbck; 
    }


    public checklickey(thiscontext:any): Promise<boolean>{
        return this._getKeyData(thiscontext)
        .then((response) => {
            return this._renderkeydata(response.value);
        });
    }
}