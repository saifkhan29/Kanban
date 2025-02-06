<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal">
            <slot></slot> <!-- Slot for the actual modal content -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalContainer',
    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('close'); // Emit 'close' event to parent to hide the modal
        }
    }
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.modal {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    width: 300px;
    text-align: center;
}
</style>
