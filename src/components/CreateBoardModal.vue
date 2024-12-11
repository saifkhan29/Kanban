<template>
    <div>
        <h3>Create New Board</h3>
        {{ newBoardName }}
        <input 
            v-model="newBoardName" 
            placeholder="Board Name" 
            class="board-name-input" 
        />
        <div class="modal-buttons">
            <button @click="submitBoardName">Create</button>
            <button @click="closeModal">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateBoardModal',
    data() {
        return {
            newBoardName: '', // Holds the new board name
        };
    },
    methods: {
        // Renamed method for submitting the board name
        submitBoardName() {
            if (this.newBoardName.trim() === '') {
                alert('Please provide a board name.');
                return;
            }

            // Emit the board name to the parent component (Sidebar)
            this.$emit('board-name-submitted', this.newBoardName);
            this.newBoardName = ''; // Clear input after submitting
        },
        closeModal() {
            this.$emit('close'); // Close the modal when cancel is clicked
        }
    }
};
</script>

<style scoped>
.board-name-input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.modal-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}

.modal-buttons button {
    padding: 8px 16px;
    border: none;
    background-color: #4CAF50;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

.modal-buttons button:nth-child(2) {
    background-color: #f44336;
}

.modal-buttons button:hover {
    opacity: 0.8;
}
</style>
