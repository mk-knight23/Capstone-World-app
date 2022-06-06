import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CountriesInterface } from '../contracts/countries-interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {
  private url =`https://restcountries.com/v3.1/all`;
  private urlConti = `https://restcountries.com/v3.1/region/`;


  constructor(private http: HttpClient) { }
  /* continent trial */
  getCountriesByContinent(continentName: string): Observable<CountriesInterface[]> {
    return this.http.get<CountriesInterface[]>(`${this.urlConti}${continentName}`);
  }
  /* Continent trial */
  getCountries(): Observable<CountriesInterface[]> {
    return this.http.get<CountriesInterface[]>(this.url).pipe(
      tap(data => console.log( /*'All: ' + JSON.stringify(data)*/)),
      catchError((e:any) => {return throwError(e)})
    );

  }

  getCountry(countryName:any, callback: (data:any) => void) {
    return this.getCountries().subscribe(result => {
      console.log('---------');
      let returnObj = {};
      const matchedResult = result.map(country => {
        if (country.name.common == countryName) {
          console.log('returning country details ', country);
          returnObj = country;
        }
      });
      console.log('---------');
      callback(returnObj);  // execute the callback function to act on the matched result;
    },
      error => {
        console.log(error);
      }
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error:any): Observable<T> => {
      console.log(error);
      return of(result as T)
    }
  }


}
