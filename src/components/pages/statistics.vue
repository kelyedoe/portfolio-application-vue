<script setup>
    
</script>
<template>
    <div class="statistics">
        <div class="statistics__card">
            <div class="statistics__car--number">
                24
            </div>
            <div class="statistic__card--description">
                Tutoriel et formations Youtube
            </div>
        </div>
        <div class="statistics__card">
            <div class="statistics__car--number">
                40 +
            </div>
            <div class="statistic__card--description">
                Projets GitHub
            </div>
        </div>
        <div class="statistics__card">
            <div class="statistics__car--number">
                20
            </div>
            <div class="statistic__card--description">
                Podcasts et interviews
            </div>
        </div>
    </div>
</template>
<style scoped>
    .statistics{
        font-size: 2.3rem;
        background-color: #fff;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 2rem;
        gap: 3rem;
        border-radius: .7rem;
    }
    .statistics__card{
        /* border: 1px solid rgb(108, 106, 106); */
    }
    .statistics__car--number{
        text-align: center;
        font-size: 3rem;
        font-weight: 700;
        color: #00B0FF ;
    }
    .statistic__card--description{
        text-align: center;
        font-size: 2rem;
        color:#0c1022 ;
        font-weight: 500;
    }
</style>