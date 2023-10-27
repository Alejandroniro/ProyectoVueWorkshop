<template>
  <v-container>
    <v-row class="flex-container">
      <v-col v-for="(item, index) in items" :key="index" cols="12">
        <CustomCard :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CustomCard from './Card.vue';

export default {
  name: 'ProyectoVue',
  components: {
    CustomCard,
  },
  data() {
    return {
      items: [
        {
          title: 'Java Developer',
          company: 'Datacenter Colombia S.A.S',
          location: 'Remote in Colombia',
          salary: '$7M - $7.3M COP',
          vacancies: '5 Vacancies',
          date: 'about 2 hours ago',
          benefits: '',
          skills: ['JavaScript', 'Vue.js', 'HTML'],
          image: require('@/assets/logo.png'),

        }, {
          title: 'Java Developer',
          company: 'Datacenter Colombia S.A.S',
          location: 'Remote in Colombia',
          salary: '$7M - $7.3M COP',
          vacancies: '5 Vacancies',
          date: 'about 2 hours ago',
          benefits: '',
          skills: ['JavaScript', 'Vue.js', 'HTML'],
          image: require('@/assets/logo.png'),
        }, {
          title: 'Java Developer',
          company: 'Datacenter Colombia S.A.S',
          location: 'Remote in Colombia',
          salary: '$7M - $7.3M COP',
          vacancies: '5 Vacancies',
          date: 'about 2 hours ago',
          benefits: '',
          skills: ['JavaScript', 'Vue.js', 'HTML'],
          image: require('@/assets/logo.png'),
        }, {
          title: 'Java Developer',
          company: 'Datacenter Colombia S.A.S',
          location: 'Remote in Colombia',
          salary: '$7M - $7.3M COP',
          vacancies: '5 Vacancies',
          date: 'about 2 hours ago',
          benefits: '',
          skills: ['JavaScript', 'Vue.js', 'HTML'],
          image: require('@/assets/logo.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
