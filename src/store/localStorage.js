export const loadBoardsFromLocalStorage = () => {
    const boards = localStorage.getItem('boards');
    return boards ? JSON.parse(boards) : [];
}

export const saveBoardsToLocalStorage = (boards) => {
    localStorage.setItem('boards', JSON.stringify(boards));
}