import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private baseUrl: string = environment.baseUrl
    constructor(private http: HttpClient){}
    getUsers(): Observable<any>{
        // data.numsolicitud = Math.random();
        // data.numsolicitud = '12345';
        // delete data.documentIdName;
        return this.http.get(`${this.baseUrl}/users`) 
        // return this.http.post(`${this.baseUrl}/api/rtg`, data)
    };
    getBands(): Observable<any>{
        // data.numsolicitud = Math.random();
        // data.numsolicitud = '12345';
        // delete data.documentIdName;
        return this.http.get(`${this.baseUrl}/bands`) 
        // return this.http.post(`${this.baseUrl}/api/rtg`, data)
    };
    delete(id: string):Observable<any>{
        return this.http.delete(`${this.baseUrl}/users/${id}`)
    }
}