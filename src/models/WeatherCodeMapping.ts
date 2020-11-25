export interface IWeatherCode {
    code: string;
    name: string;
    icon: string;
}

export class WeatherCodeMapping {
    private mappingTable: IWeatherCode[] = [
        {
            code: '113',
            name: 'Sunny',
            icon: 'sunny'
        },
        {
            code: '116',
            name: 'Partly Cloudy',
            icon: 'partly-cloudy'
        },
        {
            code: '119',
            name: 'Cloudy',
            icon: 'cloudy'
        },
        {
            code: '122',
            name: 'Very Cloudy',
            icon: 'very-cloudy'
        },
        {
            code: '143',
            name: 'Foggy',
            icon: 'foggy'
        },
        {
            code: '176',
            name: 'Light Showers',
            icon: 'light-rain'
        },
        {
            code: '179',
            name: 'Light Sleet Showers',
            icon: 'sleet'
        },
        {
            code: '182',
            name: 'Light Sleet',
            icon: 'sleet'
        },
        {
            code: '185',
            name: 'Light Sleet',
            icon: 'sleet'
        },
        {
            code: '200',
            name: 'Thundery Showers',
            icon: 'thunderstorm'
        },
        {
            code: '227',
            name: 'Light Snow',
            icon: 'light-snow'
        },
        {
            code: '230',
            name: 'Heavy Snow',
            icon: 'heavy-snow'
        },
        {
            code: '248',
            name: 'Foggy',
            icon: 'foggy'
        },
        {
            code: '260',
            name: 'Foggy',
            icon: 'foggy'
        },
        {
            code: '263',
            name: 'Light Showers',
            icon: 'light-rain'
        },
        {
            code: '266',
            name: 'Light Rain',
            icon: 'light-rain'
        },
        {
            code: '281',
            name: 'Light Sleet',
            icon: 'sleet'
        },
        {
            code: '284',
            name: 'Light Sleet',
            icon: 'sleet'
        },
        {
            code: '293',
            name: 'Light Rain',
            icon: 'light-rain'
        },
        {
            code: '296',
            name: 'Light Rain',
            icon: 'light-rain'
        },
        {
            code: '299',
            name: 'Heavy Showers',
            icon: 'heavy-rain'
        },
        {
            code: '302',
            name: 'Heavy Rain',
            icon: 'heavy-rain'
        },
        {
            code: '305',
            name: 'Heavy Showers',
            icon: 'heavy-rain'
        },
        {
            code: '308',
            name: 'Heavy Rain',
            icon: 'heavy-rain'
        },
        {
            code: '311',
            name: 'Light Sleet',
            icon: 'sleet'
        },
        {
            code: '314',
            name: 'Light Sleet',
            icon: 'sleet'
        },
        {
            code: '317',
            name: 'Light Sleet',
            icon: 'sleet'
        },
        {
            code: '320',
            name: 'Light Snow',
            icon: 'light-snow'
        },
        {
            code: '323',
            name: 'Light Snow Showers',
            icon: 'light-snow'
        },
        {
            code: '326',
            name: 'Light Snow Showers',
            icon: 'light-snow'
        },
        {
            code: '329',
            name: 'Heavy Snow',
            icon: 'heavy-snow'
        },
        {
            code: '332',
            name: 'Heavy Snow',
            icon: 'heavy-snow'
        },
        {
            code: '335',
            name: 'Heavy Snow Showers',
            icon: 'heavy-snow'
        },
        {
            code: '338',
            name: 'Heavy Snow',
            icon: 'heavy-snow'
        },
        {
            code: '350',
            name: 'Light Sleet',
            icon: 'sleet'
        },
        {
            code: '353',
            name: 'Light Showers',
            icon: 'light-rain'
        },
        {
            code: '356',
            name: 'Heavy Showers',
            icon: 'heavy-rain'
        },
        {
            code: '359',
            name: 'Heavy Rain',
            icon: 'heavy-rain'
        },
        {
            code: '362',
            name: 'Light Sleet Showers',
            icon: 'sleet'
        },
        {
            code: '365',
            name: 'Light Sleet Showers',
            icon: 'sleet'
        },
        {
            code: '368',
            name: 'Light Snow Showers',
            icon: 'light-snow'
        },
        {
            code: '371',
            name: 'Heavy Snow Showers',
            icon: 'heavy-snow'
        },
        {
            code: '374',
            name: 'Light Sleet Showers',
            icon: 'sleet'
        },
        {
            code: '377',
            name: 'Light Sleet',
            icon: 'sleet'
        },
        {
            code: '386',
            name: 'Thundery Showers',
            icon: 'thunderstorm'
        },
        {
            code: '389',
            name: 'Thundery Heavy Rain',
            icon: 'thunderstorm'
        },
        {
            code: '392',
            name: 'Thundery Snow Showers',
            icon: 'thunderstorm-snow'
        },
        {
            code: '395',
            name: 'Heavy Snow Showers',
            icon: 'heavy-snow'
        }
    ]

    public getElement(code: string): IWeatherCode {
        return this.mappingTable[this.mappingTable.findIndex(x => x.code == code)];
    }
}