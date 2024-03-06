<script setup>
import { onMounted } from "vue";
import HeaderProject from "../HeaderProject.vue";
import { useStore } from "vuex";
import { getTickets } from "../api/apiTickets";

const store = useStore();
const valueFromStore = store.state.info;

onMounted(async () => {
  try {
    const response = await getTickets();
    store.commit("getOrders", response.data);
  
  
  } catch (error) {
    console.error("Ошибка при загрузке заказов:", error);
  }
});
</script>

<template>
  <div class="p">
    <HeaderProject />
    <section class="profile">
      <div class="profile__container">
        <img class="profile__photography" :src="valueFromStore.avatar" />
        <h2 class="profile__name">
          {{ valueFromStore.name }} {{ valueFromStore.surname }}
        </h2>
        <p class="profile__mail">Почта: {{ valueFromStore.email }}</p>
      </div>
      <ul class="project-list">
        <li class="project-item" v-for="card in store.state.orders" :key="card.id">
      
           
            <div class="card-content">
              <p class="card-tag">{{ card.price }}</p>
              <h3 class="h3">
                <a href="#" class="card-title">{{ card.date }}</a>
              </h3>
            
            </div>
         
        </li>
      </ul>
    </section>
  </div>
</template>
<style scoped>
.p {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile__photography {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.profile__container {
  display: flex;
  padding-top: 100px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
}
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
