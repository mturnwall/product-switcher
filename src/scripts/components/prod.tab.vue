<template>
    <div class="prod-tab">
        <section class="prod-tab__main">
            <h1 class="prod-tab__title">{{title}}</h1>
            <p class="prod-tab__description">
                {{description}}
            </p>

        </section>

        <div class="prod-tab__image">
            <img :src="productImage" alt="">
        </div>

        <div class="prod-tab__options">
            <h2 class="prod-tab__subtitle">Popular Materials</h2>
            <section class="prod-materials">
                <div class="prod-materials__list">
                    <button v-for="(material, index) in materials.Content" class="prod-materials__material" :class="{'is-selected': selectedIndex === index}" :data-index="index" @click="changeMaterial">
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
    props: ['title', 'description', 'materials', 'productImages'],
    data() {
        return {
            materialsTitle: '',
            materialsDescription: '',
            productImage: '',
            selectedIndex: 0,
        };
    },
    watch: {
        materials() {
            console.log('materials');
            this.selectedIndex = 0;
            this.updateMaterialContent();
        },
        productImages() {
            this.productImage = this.productImages[this.materialsTitle];
        },
    },
    methods: {
        updateMaterialContent() {
            this.materialsTitle = this.materials.Content[this.selectedIndex].Title;
            this.materialsDescription = this.materials.Content[this.selectedIndex].ProductMaterialDescription;
            this.productImage = this.productImages[this.materialsTitle];
        },
        changeMaterial(evt) {
            const index = evt.target.dataset.index;
            this.selectedIndex = Number(index);
            this.updateMaterialContent();
        }
    }
}
</script>
