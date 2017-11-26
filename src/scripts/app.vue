<template>
    <div class="prod-switcher">
        <prod-tabs :products="products.Tabs" @switch-product="switchProduct"></prod-tabs>
        <prod-tab :title="productTitle" :description="productDescription" :materials="materials"></prod-tab>
    </div>
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
                    this.materials = data.Materials.Windows;
                });
        },
        switchProduct(product) {
            this.productTitle = product.Title;
            this.productDescription = product.Description;
            this.materials = this.products.Materials[product.MaterialsKey];
        }
    },
    components: {
        prodTabs,
        prodTab,
    },
}
</script>
