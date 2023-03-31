<script>

</script>
<template id="app">
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
            <div class="presentation--buttons">
                <div class="presentation--buttons__icon">
                    <font-awesome-icon icon="fa-brands fa-youtube" class="pres--icon" />
                </div>
                <div class="presentation--buttons__icon">
                    <font-awesome-icon icon="fa-brands fa-instagram" class="pres--icon" />
                </div>
                <div class="presentation--buttons__icon">
                    <font-awesome-icon icon="fa-brands fa-github" class="pres--icon" />
                </div>
                <div class="presentation--buttons__icon">
                    <font-awesome-icon icon="fa-brands fa-tiktok" class="pres--icon" />
                </div>
              
                
            </div>

            <div>
                <a href=""><button class="presentation--download__button">Télécharger CV</button></a>
            </div>
        </div>
        <div>
            <img class="presentation--image" src="src/assets/images/presentation.png" alt="Image not found">
        </div>
        
            
    </div>
</template>

<style>
.pres--icon{
    /* padding: 1.2rem; */
    text-align: center;
    padding-top: 1.3rem;
    
}
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
.presentation--buttons{
    color: #fff;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    gap: 3rem;
    margin-top: 2.3rem;
    align-items: center;
    
}
.presentation--buttons__icon{
    font-size: 2.3rem;
    border-radius: 100%;
    border: 3px solid #00B0FF;
    width: 5rem;
    height: 5rem;
    color: #00B0FF;
    text-align: center;

}
.presentation--download__button{
    width: 15rem;
    height: 4rem;
    border-style: none;
    border: 2px solid #00B0FF;
    border-radius: 20px;
    font-size: 1.3rem;
    font-weight: 600;
    background-color: #00B0FF;
    color:  #0c1022;
    text-transform: uppercase;
    margin-top: 2rem;
}
.presentation--image{
    float: left;
}
</style>