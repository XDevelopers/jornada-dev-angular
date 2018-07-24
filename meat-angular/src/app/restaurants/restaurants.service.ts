import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IRestaurant } from './restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error.handler';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http) {}

    restaurants(): Observable<IRestaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        // validar quando backend não retornar dados
        .catch(ErrorHandler.handlerError);
    }

    restaurantById(id: string): Observable<IRestaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }
}
