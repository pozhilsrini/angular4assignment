import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from 'app/model/Contact'
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

constructor(private http:Http) {}

    postContactData(contactReq): Observable<Contact> {
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/proxy/paperflite/addContact', contactReq , options)
            .map(res => res.json());
    }

    getContactList(): Observable<Contact[]> {
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('/proxy/paperflite/getContact', options)
            .map(res => 
            res.json());
    }

     searchByFirstName(value : String): Observable<Contact[]> {
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(`/proxy/paperflite/searchByValue/${value}`, options)
            .map(res => 
            res.json());
    }

    
     updateContactData(contactReq): Observable<Contact> {
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put('/proxy/paperflite/updateContact', contactReq , options)
            .map(res => res.json());
    }

    deleteContactData(contactId : Number): Observable<Contact> {
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(`/proxy/paperflite/deleteContact/${contactId}`,  options)
            .map(res => res.json());
    }


}
