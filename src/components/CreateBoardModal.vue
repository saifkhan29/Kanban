<template>
    <div class="create-board" id="create-board">
        <h3>Add New Board</h3>
        {{ newBoardName }} 

        <aside>
            <label for="">Board Name</label>
            <input 
                v-model="newBoardName" 
                placeholder="Board Name" 
                class="board-name-input" 
            />
        </aside>

        <aside class="column-input-container">
            <label for="">Columns</label>
            <div 
            v-for="(column, index) in columns" 
            :key="'column' + index"
            class="column-input"
            >
            <input 
                placeholder="Add Column" 
                class="board-name-input" 
                :id="'column' + index"
                v-model="column.name"
                type="text"
            />

            <span>
                <img @click="deleteColumn(index)" src="../assets/img/icon-cross.svg" alt="">
            </span>
            </div>

            <button @click="addColumn" class="btn btn--outline">+ Add New Column</button>
        </aside>

        <div class="btn-container">
            <button class="btn" @click="submitBoardName">Create New Board</button>
            <button class="btn--cancel" @click="closeModal">
                <img src="../assets/img/icon-close.svg" alt="Close icon">
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'CreateBoardModal',
    data() {
        return {
            newBoardName: '', // Holds the new board name
            columns: [{ name: '' }],
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
        },
        addColumn() {
            this.columns.push({ name: '' })
        },
        deleteColumn(idx) {
            this.columns.splice(idx, 1)
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
