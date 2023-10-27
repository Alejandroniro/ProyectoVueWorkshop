<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="custom-card" @click="handleCardClick">
    <v-row>
      <v-col cols="1">
        <div class="image-container">
          <img class="small-image" :src="item.image" alt="Card Logo" />
        </div>
      </v-col>
      <v-col cols="11">
        <div class="title-section">
          <v-card-title class="card-title">{{ item.title }}</v-card-title>
          <div class="skills-section">
            <span v-for="(skill, i) in item.skills" :key="i" class="skill-oval">
              {{ skill }}
            </span>
          </div>
        </div>
        <v-card-text class="info-section">
          <div v-for="(info, key) in itemInfo" :key="key" class="info">
            <v-icon>{{ info.icon }}</v-icon>
            {{ info.value }}
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>
  
<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      itemInfo: [
        { icon: 'mdi-office-building', value: this.item.company  },
        { icon: 'mdi-map-marker', value: this.item.location  },
        { icon: 'mdi-currency-usd', value: this.item.salary  },
        { icon: 'mdi-account-multiple', value: this.item.vacancies  },
        { icon: 'mdi-calendar', value: this.item.date},
      ],
    };
  },
  methods: {
    handleCardClick() {
      this.$router.push(`/enlace/${this.item.id}`);
    },
  },
};
</script>
  
<style scoped>
.custom-card {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 15px;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
}

.card-title {
  margin: 0;
  padding: 0;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
}

.small-image {
  max-width: 50px;
}

.title-section {
  margin: 10px 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.skill-oval {
  border: 1px solid black; 
  color: #000;
  border-radius: 10px;
  padding: 3px 6px;
  margin-left: 10px;
}

.info-section {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  justify-content: space-between;
}

.info {
  display: flex;
  align-items: center;
  margin-right: 10px;
  background: transparent;
}
</style>
  