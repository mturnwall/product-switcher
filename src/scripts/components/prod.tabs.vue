<template>
    <div class="prod-tabs">
        <div class="prod-tabs__group prod-tabs__group--windows">
            <button v-for="window in windows" class="prod-tabs__tab" data-prod-type="window">{{window}}</button>
        </div>
        <div class="prod-tabs__group prod-tabs__group--doors">
            <button v-for="door in doors" class="prod-tabs__tab" data-prod-type="door">{{door}}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['products'],
    computed: {
        windows() {
            return this.products.windows;
        },
        doors() {
            return this.products.doors;
        },
    },
}
</script>
