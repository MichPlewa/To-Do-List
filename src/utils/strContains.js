const strContains = (title, search) => {
  if (title.toLowerCase().includes(search.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

export default strContains;
