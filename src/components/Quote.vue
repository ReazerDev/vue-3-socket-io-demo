<template>
  <div class="quote">
    <p class="content">"{{ quote }}"</p>
    <p class="author">- {{ author }}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Socket } from 'vue-socket.io-extended';

export default class Time extends Vue {
    quote = '';
    author = '';

    @Socket()
    changeQuote(data: any) {
        this.quote = data['content']
        this.author = data['author'];
    }

    created() {
        this.getQuote();
        this.startTimeout();
    }

    public startTimeout() {
        const now = new Date();
        var etaMs = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0, 0).getTime() - Date.now();
        
        if (etaMs < 0) {
            etaMs += 86400000;
            this.getQuote();
        }
        setTimeout(() => {
            this.getQuote();
            this.startTimeout();
        }, etaMs);
    }

    public getQuote() {
      fetch('http://api.quotable.io/random?tags=technology|business|famous-quotes|inspirational|science|success|wisdom&maxLength=50').then(res => res.json()).then(data => {
        this.quote = data['content']
        this.author = data['author'];
		  });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.quote {
    transition: 500ms all;

    .content {
        font-size: 40px;
    }

    .author {
        font-size: 40px;
        text-align: end;
    }
}
</style>
