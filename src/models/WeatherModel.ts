interface ICurrentCondition {
	temperature: string;
	feelsLikeTemp: string;
	description: string;
	weatherCode: string
	cloudCoverage: string;
	humidity: string;
}

interface IArea {
	areaName: string;
	country: string;
	region: string;
}

export class WeatherModel {
	currentCondition: ICurrentCondition;
	area: IArea;

	public static create(json: any): WeatherModel {
		const model = new WeatherModel();
		const condition = json.current_condition[0];
		const area = json.nearest_area[0];

		model.currentCondition = {
			temperature: condition.temp_C,
			feelsLikeTemp: condition.FeelsLikeC,
			description: condition.weatherDesc[0].value,
			weatherCode: condition.weatherCode,
			cloudCoverage: condition.cloudcover,
			humidity: condition.humidity
		};

		model.area = {
			areaName: area.areaName[0].value,
			country: area.country[0].value,
			region: area.region[0].value
		};

		return model;
	}
}
