export default {
    navbarHeight: state => state.navbarHeight,
    getBoards: (state) => {
        return state.boards;
    },
    currentBoard: state => state.currentBoard
};