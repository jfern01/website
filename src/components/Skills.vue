<template>
    <section class="skills-component section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-title display-4">Skills</h2>
                </div>
            </div>
            <div class="row mb-4" v-for="category in categories" v-bind:key="category.name">
                <div class="col-lg-3 col-sm-6 text-md-left text-center mb-4">
                    <h3>{{ category.name }}</h3>
                </div>
                <div v-for="skill in category.skills" v-bind:key="skill.name" class="col-lg-3 col-sm-6 mb-4">
                    <div class="card shadow text-center">
                        <div class="position-relative rounded-top progress-wrapper" v-bind:style="{ 'background-color': skill.color }">
                            <div class="wave" v-bind:style="{ 'bottom': skill.level + '%' }"></div>
                        </div>
                        <div class="card-footer bg-white">
                            <h4 class="card-title m-1">{{ skill.name }} ({{ skill.level }}%)</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Skills',
    data () {
        return {
            categories: [
                {
                    name: 'Languages',
                    skills: [
                        {
                            name: 'PHP',
                            color: '#8892BF',
                            level: 100,
                        },
                        {
                            name: 'Python',
                            color: '#234B6C',
                            level: 60,
                        },
                        {
                            name: 'Go',
                            color: '#00ACD7',
                            level: 50,
                        },
                        {
                            name: 'TypeScript',
                            color: '#284D80',
                            level: 75,
                        },
                        {
                            name: 'JavaScript',
                            color: '#F7E018',
                            level: 90,
                        },
                    ],
                },
                {
                    name: 'Technologies',
                    skills: [
                        {
                            name: 'HTML',
                            color: '#E54C21',
                            level: 100,
                        },
                        {
                            name: 'CSS',
                            color: '#264DE4',
                            level: 100,
                        },
                        {
                            name: 'Elasticsearch',
                            color: '#20B9AF',
                            level: 70,
                        },
                        {
                            name: 'GraphQL',
                            color: '#E10098',
                            level: 65,
                        },
                    ],
                },
                {
                    name: 'Frameworks',
                    skills: [
                        {
                            name: 'Laravel',
                            color: '#FF2D20',
                            level: 95,
                        },
                        {
                            name: 'Symfony',
                            color: '#1A171B',
                            level: 80,
                        },
                        {
                            name: 'Slim',
                            color: '#719E40',
                            level: 70,
                        },
                        {
                            name: 'Django',
                            color: '#0C4B33',
                            level: 70,
                        },
                        {
                            name: 'Vue',
                            color: '#3FB984',
                            level: 95,
                        },
                        {
                            name: 'Angular',
                            color: '#C4002B',
                            level: 75,
                        },
                        {
                            name: 'React',
                            color: '#61DAFB',
                            level: 50,
                        },
                        {
                            name: 'Bootstrap',
                            color: '#7952B3',
                            level: 100,
                        },
                        {
                            name: 'Bulma',
                            color: '#00D1B2',
                            level: 85,
                        },
                    ],
                },
                {
                    name: 'Platforms',
                    skills: [
                        {
                            name: 'WordPress',
                            color: '#0073AA',
                            level: 100,
                        },
                        {
                            name: 'Magento',
                            color: '#F2631C',
                            level: 80,
                        },
                        {
                            name: 'Sylius',
                            color: '#0FBF9C',
                            level: 60,
                        },
                    ],
                },
            ],
        };
    },
    methods: {}
};
</script>

<style scoped lang="scss">
@import '../assets/scss/components/skills.scss';
</style>