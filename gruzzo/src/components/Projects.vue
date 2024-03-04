<template>
    <section class="section project" aria-label="project">
        <div class="container">
            <p class="section-subtitle">Projects</p>

            <h2 class="h2 section-title">Featured Projects</h2>

            <p class="section-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry the standard dummy text ever since the when an printer
                took.
            </p>

            <ul class="project-list"  >
                <li class="project-item" v-for="card in cards" :key="card.id">
                    <div class="project-card">
                        <figure class="card-banner img-holder"  :style="`--width: 397; --height: 352`">
                            <img :src="card.img" width="397" height="352" loading="lazy"
                                :alt="card.title" class="img-cover" />
                        </figure>
                        <div class="card-content">
                            <p class="card-tag">{{ card.title }}</p>

                            <h3 class="h3">
                                <a href="#" class="card-title">{{ card.body }}</a>
                            </h3>

                            <a href="#" class="card-link">Read More</a>
                        </div>
                    </div>
                </li>

                
            </ul>
        </div>
    </section>
</template>

<script >
import cards from "../constants/cards.js"
export default {
    name: "newProjects",
    data(){
        return {
        cards:[...cards]
        
    }}
}
</script>

<style lang="scss" scoped>
.project {
    background-color: var(--alice-blue);
}

.project :is(.section-subtitle, .section-title, .section-text) {
    text-align: center;
}

.project .section-text {
    margin-block: 20px 50px;
}

.project-card {
    position: relative;
    width: 600px;
    height: auto;
}

.project-card .action-btn {
    background-color: var(--dark-orange);
    color: var(--white);
    font-size: 28px;
    padding: 16px;
    position: absolute;
    top: 30px;
    left: 30px;
    opacity: 0;
    transition: var(--transition);
}

.project-card:is(:hover, :focus-within) .action-btn {
    opacity: 1;
}

.project-card .card-tag {
    color: var(--dark-orange);
    font-size: var(--fs-9);
}

.project-card .card-content {
    position: relative;
    background-color: var(--white);
    padding: 20px 30px;
    margin-block-start: -50px;
    margin-inline-start: 30px;
}

.project-card .h3 {
    font-size: var(--fs-7);
}

.project-card .card-title {
    transition: var(--transition);
}

.project-card :is(.card-title, .card-link):is(:hover, :focus) {
    color: var(--dark-orange);
}

.project-card .card-link {
    color: var(--prussian-blue);
    font-size: var(--fs-10);
    font-weight: var(--fw-600);
    text-transform: uppercase;
    margin-block-start: 5px;
    transition: var(--transition);
}

.project-list {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding-block-end: 40px;
    scroll-snap-type: inline mandatory;
}

.project-item {
    scroll-snap-align: start;
    
  
}

.project-list::-webkit-scrollbar {
    height: 15px;
}

.project-list::-webkit-scrollbar-track {
    outline: 2px solid var(--dark-orange);
    border-radius: 10px;
}

.project-list::-webkit-scrollbar-thumb {
    border: 3px solid var(--cultured-1);
    border-radius: 10px;
    background-color: var(--dark-orange);
}

.project-list::-webkit-scrollbar-button {
    width: calc(25% - 40px);
}
</style>