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
                    <button class="prod-materials__material selected">
                        <img class="prod-materials__icon" src="http://placehold.it/50" alt="">
                        Fiberglass
                    </button>
                    <button class="prod-materials__material">
                        <img class="prod-materials__icon" src="http://placehold.it/50" alt="">
                        Wood
                    </button>
                    <button class="prod-materials__material">
                        <img class="prod-materials__icon" src="http://placehold.it/50" alt="">
                        Composite
                    </button>
                    <button class="prod-materials__material">
                        <img class="prod-materials__icon" src="http://placehold.it/50" alt="">
                        Vinyl
                    </button>
                    <button class="prod-materials__material">
                        <img class="prod-materials__icon" src="http://placehold.it/50" alt="">
                        Aluminum
                    </button>
                </div>
                <h1 class="prod-materials__title">Fiberglass</h1>
                <p class="prod-materials__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur, cumque debitis dicta dolor doloremque et ex fugit illo ipsa ipsum laudantium maxime mollitia obcaecati qui recusandae rem sunt voluptate.
                </p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'description'],
}
</script>
