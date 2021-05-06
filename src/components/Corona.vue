<template>
  <div class="corona">
    <div class="vaccination-info">
      <h5>First Vaccination</h5>
      <p>{{ firstVaccinationCount }} ppl.</p>
      <p>{{ firstVaccinationPercent }}</p>
      <div class="progress-bar">
        <div class="progress" :style="{width: firstVaccinationPercent}"></div>
      </div>
    </div>
    <div class="vaccination-info">
      <h5>Fully Vaccinated</h5>
      <p>{{ fullyVaccinationCount }} ppl.</p>
      <p>{{ fullyVaccinationPercent }}</p>
      <div class="progress-bar">
        <div class="progress" :style="{width: fullyVaccinationPercent}"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Corona extends Vue {
  firstVaccinationCount = '';
  firstVaccinationPercent = '';
  fullyVaccinationCount = '';
  fullyVaccinationPercent = '';

  created() {
    this.getCoronaInformation();
    setInterval(this.getCoronaInformation, 3600000);
  }

  public getCoronaInformation() {
    fetch(process.env.VUE_APP_API_URL + '/corona').then(res => res.json()).then(data => {
      this.firstVaccinationCount = this.numberWithCommas(data['vaccinatedCount']);
      this.firstVaccinationPercent = `${Math.round(data['vaccinatedPercent'] * 100) / 100}%`;
      this.fullyVaccinationCount = this.numberWithCommas(data['fullyVaccinatedCount']);
      this.fullyVaccinationPercent = `${Math.round(data['fullyVaccinatedPercent'] * 100) / 100}%`;
		});
  }

  private numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.corona {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  font-size: 1.5rem;

  .vaccination-info {
    display: flex;
    flex-direction: column;
    gap: .4rem;

    &:last-of-type {
      text-align: end;
    }
  }

  h5 {
    font-size: 1.7rem;
  }

  .progress-bar {
    width: 100%;
    height: 1rem;
    border-radius: .5rem;
    background-color: gray;

    .progress {
      background-color: green;
      border-radius: .5rem;
      height: 1rem;
    }
  }
}
</style>
