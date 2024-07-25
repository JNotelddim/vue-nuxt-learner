export const count = ref(0);
export const increment = () => {
  count.value++;
};
export const decrement = () => {
  count.value--;
};
