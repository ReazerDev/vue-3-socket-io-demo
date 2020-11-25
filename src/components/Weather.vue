<template>
  <div class="weather">
    <div v-if="typeof weather.currentCondition != 'undefined'" class="current">
      <img :src="getImgUrl(currentCondition.icon)" class="weather-icon" :alt="currentCondition.name">
      <p class="description">{{ currentCondition.name }} - {{ weather.currentCondition.temperature }}°C</p>
      <p>Feels like: {{ weather.currentCondition.feelsLikeTemp }}°C</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { WeatherModel } from '../models/WeatherModel'
import { WeatherCodeMapping, IWeatherCode } from '../models/WeatherCodeMapping';

export default class Weather extends Vue {
  weather: WeatherModel = new WeatherModel();
  currentCondition: IWeatherCode;
  codeMapping: WeatherCodeMapping = new WeatherCodeMapping();

  public created() {
    this.getWeather();
		setInterval(this.getWeather, 3600000); // Every hour
  }

  private getWeather() {
    fetch('http://v2.wttr.in/Bemerode?format=j1').then(res => res.json()).then(data => {
      this.weather = WeatherModel.create(data);
      this.currentCondition = this.codeMapping.getElement(this.weather.currentCondition.weatherCode);
		});
  }

  public getImgUrl(picture: string) {
    return require('@/assets/icons/' + picture + '.svg');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.weather {
    display: flex;
    justify-content: center;

  .current {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    p {
      font-size: 30px;
    }

    .weather-icon {
      height: 120px;
    }
  }
}
</style>
