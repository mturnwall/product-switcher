<template>
    <div class="prod-switcher">
        <prod-tabs :products="products.Tabs" @switch-product="switchProduct"></prod-tabs>
        <prod-tab :title="productTitle" :description="productDescription"></prod-tab>
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
                });
        },
        switchProduct(product) {
            this.productTitle = product.Title;
            this.productDescription = product.Description;
        }
    },
    components: {
        prodTabs,
        prodTab,
    },
}
</script>
