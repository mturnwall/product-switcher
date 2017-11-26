<template>
    <div class="prod-tab">
        <section class="prod-tab__main">
            <h1 class="prod-tab__title">{{title}}</h1>
            <p class="prod-tab__description">
                {{description}}
            </p>

        </section>

        <div class="prod-tab__image">
            <img src="http://placehold.it/400" alt="">
        </div>

        <div class="prod-tab__options">
            <h2 class="prod-tab__subtitle">Popular Materials</h2>
            <section class="prod-materials">
                <div class="prod-materials__list">
                    <button v-for="(material, index) in materials.Content" class="prod-materials__material" @click="changeProduct">
                        <img class="prod-materials__icon" :src="material.ProductMaterialIcon" alt="">
                        {{material.ProductMaterialIconTitle}}
                    </button>
                </div>
                <h1 class="prod-materials__title">{{materialsTitle}}</h1>
                <p class="prod-materials__description">
                    {{materialsDescription}}
                </p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'description', 'materials'],
    data() {
        return {
            materialsTitle: '',
            materialsDescription: '',
        };
    },
    watch: {
        materials() {
            this.materialsTitle = this.materials.Content[0].Title;
            this.materialsDescription = this.materials.Content[0].ProductMaterialDescription;
        }
    },
    methods: {
        changeProduct(evt) {

        }
    }
}
</script>
