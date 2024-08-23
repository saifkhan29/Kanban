export default {
    updateNavbarHeight({ commit }) {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const height = navbar.offsetHeight;
        commit('SET_NAVBAR_HEIGHT', height);
      }
    }
};