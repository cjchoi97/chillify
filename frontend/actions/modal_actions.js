export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, song) => {
  // console.log(modal);
  // console.log(song.title);
  return {
    type: OPEN_MODAL,
    modal,
    song
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};