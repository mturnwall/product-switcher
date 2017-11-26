<template>
    <div class="prod-tabs">
        <div class="prod-tabs__group prod-tabs__group--windows">
            <button v-for="(window, index) in windows.TabItems" class="prod-tabs__tab" data-prod-type="Windows" :data-index="index" @click="switchProduct">
                <img :src="window.HeaderIcon" :alt="(`${window.HeaderIconTitle} icon`)">
                {{window.HeaderIconTitle}}</button>
        </div>
        <div class="prod-tabs__group prod-tabs__group--doors">
            <button v-for="(door, index) in doors.TabItems" class="prod-tabs__tab" data-prod-type="Doors" :data-index="index" @click="switchProduct">
                <img :src="door.HeaderIcon" :alt="(`${door.HeaderIconTitle} icon`)">
                {{door.HeaderIconTitle}}
            </button>
        </div>
        <div class="prod-tabs__pointer"></div>
    </div>
</template>

<script>
export default {
    name: 'prod-tabs',
    props: {
        products: {
            type: Object,
            required: true,
        }
    },
    computed: {
        windows() {
            return ('Windows' in this.products) ? this.products.Windows : [];
        },
        doors() {
            return ('Doors' in this.products) ? this.products.Doors : [];
        },
    },
    methods: {
        movePointer(el) {
            const left = el.offsetLeft;
            const width = el.offsetWidth;
            const pointer = document.querySelector('.prod-tabs__pointer');
            console.log(`'translate3d(${left + (width / 2)}px, 0, 0)'`);
            pointer.style.transform = `translate3d(${left + (width / 2)}px, 0, 0)`;
        },
        switchProduct(evt) {
            const index = evt.target.dataset.index;
            const type = evt.target.dataset.prodType;
            this.$emit('switch-product', this.products[type].TabItems[index]);
            this.movePointer(evt.target);
        },
    },
}
</script>
