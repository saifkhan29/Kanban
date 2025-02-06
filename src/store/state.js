import { loadBoardsFromLocalStorage } from "./localStorage";

export default {
    navbarHeight: 0,
    boards: loadBoardsFromLocalStorage(),
    currentBoard: null
};