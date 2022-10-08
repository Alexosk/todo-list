export const findTodoItem = (id, arr) => arr.find((item) => (item._id === id ? item : null));

export const detectBrowser = () => {
  let isMobile = '';
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = 'is-mobile';
    return isMobile;
  } else {
    isMobile = 'is-desktop';
    return isMobile;
  }
};
