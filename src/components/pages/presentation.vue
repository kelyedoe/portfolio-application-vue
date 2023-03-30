<script>

</script>
<template>
    <div class="presentation">
        <div class="presentation--text">
            <div class="presentation--text__greetings">Salut, moi c'est</div>
            <div class="presentation--text__name">Edoé Agbodjan ...</div>
            <div class="presentation--text__intro">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Mollitia eveniet, dolore fugiat voluptas, tempore quod 
                    aliquid omnis labore nulla illo repudiandae quibusdam d
                    oloribus sit. Veritatis voluptas provident accusantium velit. Error?
                </p>
            </div>
        </div>
        <div class="presentation--image">
            <img src="./assets/images/pres.jpg" alt="Image not found">
        </div>
    </div>
</template>

<style>
.presentation{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    color: white;
    margin: 7rem;
}
.presentation--text{
    display: flex;
    flex-direction: column;
    align-content: space-between;

}
.presentation--text__greetings{
    font-size: 2rem;
    font-weight: 500;
    color: #fff;

}
.presentation--text__name{
    color: #00B0FF;
    font-size: 2.5rem;
}
.presentation--text__intro{
    color: #fff;
    font-size: 1.5rem;
    text-align: justify;
    cursor: pointer;
}
</style>