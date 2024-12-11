<template>
    <nav class="navbar">
        <h1 v-if="getBoards.length <= 1">{{ getBoards.length > 0 ? getBoards[0].name : 'Create a board' }}</h1>
        <h1 v-if="getBoards.length > 1">{{ currentBoard ? currentBoard : 'Select a board' }}</h1>
    
        <img src="../assets/img/icon-vertical-ellipsis.svg" alt="">
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Navbar',
    computed: {
        ...mapGetters(['currentBoard', 'getBoards'])
    }
}
</script> 