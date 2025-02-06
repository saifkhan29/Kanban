import { saveBoardsToLocalStorage } from "./localStorage";

export default {
  SET_NAVBAR_HEIGHT(state, height) {
    state.navbarHeight = height;
    document.documentElement.style.setProperty('--navbar-height', `${height}px`);
  },
  ADD_BOARD(state, newBoard) {
    state.boards.push(newBoard)

    // Save the board to local storage 
    saveBoardsToLocalStorage(state.boards);
  },
  CURRENT_BOARD(state, board) {
    state.currentBoard = board;
  }
};
  