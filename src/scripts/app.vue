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
            routeType: '',
            routeProd: '',
            routeMaterial: '',
            productTitle: '',
            productDescription: '',
            materials: {},
            productImages: {},
        };
    },
    mounted() {
        if (window.location.hash) {
            const hash = window.location.hash.substr(1);
            const routePieces = hash.split(':');
            this.routeType =  this.capitalize(routePieces[0]);
            this.routeProd = this.capitalize(routePieces[1]);
            this.routeMaterial = this.capitalize(routePieces[2]);
        }
        this.$nextTick(() => {
            this.getData();
        });
    },
    methods: {
        capitalize(str) {
            return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
        },
        getData() {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    this.products = data;
                    let type = (this.routeType !== '' && this.routeType in data.Tabs) ? this.routeType : 'Windows';

                    let tabData = data.Tabs[type].TabItems.filter(tab => this.routeProd === tab.Id)[0];
                    if (typeof tabData === 'undefined') {
                        tabData = data.Tabs[type].TabItems[0];
                    }
                    this.switchProduct(tabData);
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
