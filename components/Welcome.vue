<template>
  <div>
    <h1>Welcome to My App!</h1>
    <p>Thank you for visiting.</p>
    <div class="wrapper">
      <button @click="decrement">Decrement (-)</button>
      <h3>{{ count }}</h3>
      <button @click="increment">Increment (+)</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};

console.log("In Welcome, counter value is:", count.value);
</script>

<style scoped>
h1 {
  color: #333;
  font-size: 24px;
}

h3 {
  color: #121;
  font-size: 18px;
}

p {
  color: #666;
  font-size: 16px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  margin: "16px";
  border-radius: "8px";
  height: 25vh;
}

button {
  padding: 8px 16px;
  margin: 8px;
  border-radius: 4px;
  background: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
