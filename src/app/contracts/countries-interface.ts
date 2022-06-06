export interface CountriesInterface {
    name: {
        common: string;
    }
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: string[];
    demonyn: string;
    area: number;
    timezones: string;
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: string[];
    languages: string[];
    translations: any;
    flags: {
        png:any;
    };
    regionalBlocks: any;
    coic: string
}
