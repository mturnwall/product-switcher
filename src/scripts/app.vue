<template>
    <section class="prod-switcher">
        <header class="prod-switcher__header">
            <h1 class="prod-switcher__title">{{products.Title}}</h1>
            <p class="prod-switcher__description">{{products.Description}}</p>
        </header>
        <prod-tabs :products="products.Tabs" @switch-product="switchProduct"></prod-tabs>
        <prod-tab :title="productTitle" :description="productDescription" :materials="materials" :product-images="productImages"></prod-tab>
    </section>
</template>

<script>
import prodTabs from './components/prod.tabs.vue';
import prodTab from './components/prod.tab.vue';

const apiUrl = 'http://private-d2d7a-raproductswitcher.apiary-mock.com/products';

export default {
    name: 'product-switcher',
    data() {
        return {
            products: {
                Tabs: {},
            },
            productTitle: '',
            productDescription: '',
            materials: {},
            productImages: {},
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.getData();
        });
    },
    methods: {
        getData() {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    this.products = data;
                    this.productTitle = data.Tabs.Windows.TabItems[0].Title;
                    this.productDescription = data.Tabs.Windows.TabItems[0].Description;
                    this.productImages = data.ProductImages[data.Tabs.Windows.TabItems[0].Id];
                    this.materials = data.Materials.Windows;
                });
        },
        switchProduct(product) {
            console.log(product);
            this.productTitle = product.Title;
            this.productDescription = product.Description;
            this.materials = this.products.Materials[product.MaterialsKey];
            this.productImages = this.products.ProductImages[product.Id];
        }
    },
    components: {
        prodTabs,
        prodTab,
    },
}
</script>
