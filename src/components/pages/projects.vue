<script>

</script>
<template>
    <div class="projects">
        <div class="projects__title">
            <div class="projects__title--header">
                Projets
            </div>
            <div class="projects__title--description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quaerat eligendi reiciendis veniam reprehenderit, suscipit aut delectus, a voluptatem quis eum velit incidunt quasi assumenda cum inventore ipsum soluta obcaecati.
            </div>
        </div>
        <div class="projects__cards">
            <div class="projects__cards--title">
                Refonte de site web.
            </div>
            <div class="projects__cards--description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ipsam modi quis ad reprehenderit ut sed incidunt explicabo. 
            </div>
        </div>
    </div>
</template>
<style scoped>
    .projects{
        margin: 5rem;
        color: #fff;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
    }
    .projects__title{
        color: #fff;
        grid-column: 1/3;
        grid-row: 1/3;
        padding-top: 3.5rem;
    }
    .projects__title--header{       
        font-size: 4rem;
        font-weight: 500;
    }
    .projects__title--description{
        font-size: 1.6rem;
        font-weight: 200;
    }
    .projects__cards{
        background-color: #fff;
        padding:1.2rem;
        border-radius: .3rem;
        display: flex;
        flex-direction: column;
        align-content: space-between;
    }
    .projects__cards--title{
        color: #0c1022;
        font-size: 1.6rem;
        font-weight: 700;
        text-align: center;
    }
    .projects__cards--description{
        color: #0c1022;
        text-align: justify;
        font-size: 1.3rem;
    }
</style>