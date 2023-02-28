import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import { markup } from './markup/markup';
import { findByName } from './api/countries';

const DEBOUNCE_DELAY = 300;
const ERROR_MESSAGE = 'Too many matches found. Please enter a more specific name.';
const {
    generateCountriesList,
    generaCountryCard
  } = markup;
  
const inputField = document.querySelector('#search-box');
const listElement = document.querySelector('.country-list');
const cardContainer = document.querySelector('.country-info');
  
inputField.addEventListener('input', debounce(handleInputChange, DEBOUNCE_DELAY));
  
const clearContainer = () => {
    cardContainer.innerHTML = '';
    listElement.innerHTML = '';
  };
  
function handleInputChange(evt) {
    const inputData = evt.target.value.trim();
  
    clearContainer();
  
    if (!inputData) return;
  
    findByName(inputData)
      .then(data => {
        if (data.length > 10) {
            return Notify.info(ERROR_MESSAGE);
        } else if (data.length >= 2 && data.length <= 10)  {
            listElement.innerHTML = generateCountriesList(data);
        } else {
            cardContainer.innerHTML = generaCountryCard(data);
        }
        });
  }

