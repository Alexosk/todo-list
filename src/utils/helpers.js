export const findTodoItem = (id, arr) => {
  const foundItem = arr.find((item) => item._id === id);
  return foundItem === undefined ? null : foundItem;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

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
