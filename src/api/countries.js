import { Notify } from 'notiflix';

const BASE_URL = 'https://restcountries.com/v3.1/';
const NOT_FOUND = 'Oops, there is no country with that name';

export const findByName = (countryName) => {
    return fetch(`${BASE_URL}/name/${countryName}?fields=name,capital,population,flags,languages`)
            .then(response => {
                console.log(response);

                if (!response.ok) {
                    Notify.failure(NOT_FOUND);                                
                }                
                return response.json();
            }            
            )        
} 