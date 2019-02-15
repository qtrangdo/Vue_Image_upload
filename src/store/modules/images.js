const state = {
  images: []
};

const getters = {
  allimages: state => state.images,
};

const actions = {
  fetchImages() {
    
  }
};

const mutations = {
  setImages: (state, images) => state.images = images,
};