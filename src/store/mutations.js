export default {
    SET_NAVBAR_HEIGHT(state, height) {
      state.navbarHeight = height;
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    }
};
  