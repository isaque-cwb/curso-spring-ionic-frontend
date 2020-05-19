import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../config/api.config';
import { EstadoDTO } from '../../models/estados.dto';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EstadoService{

    constructor(public http: HttpClient){
    }

    findyAll() : Observable<EstadoDTO[]> {
        return this.http.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}/estados`);
    }
}