const getMoneyTransform = (store) => store.moneyTransform.transform;

// const isUserInList = (id) => (store) => {
//   return store.users.users.some((item) => item.id === id);
// };

const selectors = {
  // isUserInList,
  getMoneyTransform,
};

export default selectors;
