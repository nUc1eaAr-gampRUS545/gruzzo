<script setup>
import { onMounted } from "vue";
import HeaderProject from "../HeaderProject.vue";
import { useStore } from "vuex";
import { getTickets } from "../api/apiTickets";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const valueFromStore = store.state.info;
const isLoginedIn = store.state.isLoginedIn;

onMounted(async () => {
  try {
    if (isLoginedIn) {
      const response = await getTickets();
      const filtredOrders = response.data.filter(
        (card) => valueFromStore.id == card.createduserid
      );
      store.commit("getOrders", filtredOrders);
    } else {
      router.push("/login");
    }
  } catch (error) {
    console.error("Ошибка при загрузке заказов:", error);
  }
});
</script>

<template>
  <div class="p" v-if="isLoginedIn">
    <HeaderProject style="background-color: hsl(130, 100%, 33%)" />
    <section class="profile">
      <div class="profile__container">
        <img class="profile__photography" :src="valueFromStore.avatar" />
        <h2 class="profile__name">
          {{ valueFromStore.name }} {{ valueFromStore.surname }}
        </h2>
        <p class="profile__mail">Почта: {{ valueFromStore.email }}</p>
      </div>
      <ul class="project-list">
        <li
          class="project-item"
          v-for="card in store.state.orders"
          :key="card.id"
        >
          <div class="card-content">
            <p class="card-tag">{{ card.date.split("T")[0] }}</p>
            <h3 class="h3">
              <div class="card-title">{{ card.price }}&nbsp;₽</div>
            </h3>
            <p class="card-tag">{{ card.placea}} - {{ card.placeb}}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<style scoped>
.p {
  display: flex;
  margin-top: 40px;
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
.card-content {
  width: 200px;
  padding-left: 10px;
  height: 150px;
  color: white;
  background-color: hsl(130, 100%, 33%);
  border-radius: 6px;
}
.card-tag{
  color: white;
  padding-top:10px;
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
  display: grid;
  overflow-x: auto;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 150px 150px;
  gap: 20px;
  padding-block-end: 40px;
  scroll-snap-type: inline mandatory;
}
</style>
