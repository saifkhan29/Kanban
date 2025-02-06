export default {
  updateNavbarHeight({ commit }) {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const height = navbar.offsetHeight;
      commit('SET_NAVBAR_HEIGHT', height);
    }
  },
  // This creates a new board
  createBoard({ commit }, boardName) {
    const newBoard = {
      id: Date.now(),
      name: boardName
    };

    commit('ADD_BOARD', newBoard)
  },
  // This sets the current board on clicking on the side bar on each individual board 
  setCurrentBoard({ commit }, board) {
    commit('CURRENT_BOARD', board);
  }
};