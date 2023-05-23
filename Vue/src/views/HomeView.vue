<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Home'
  // Dark Mode Checkbox Listener
  document.querySelector('#toggle_input').addEventListener('change', (e) => {
    if (e.target.checked) {
      document.body.classList.add('dark')
      document.getElementsByTagName('header')[0].classList.add('dark')
    } else {
      document.body.classList.remove('dark')
      document.getElementsByTagName('header')[0].classList.remove('dark')
    }
  })
})
</script>

<template>
  <section>
    <h2>Dark mode toggle</h2>

    <div className="toggle__container">
      <input type="checkbox" id="toggle_input" className="toggle__input" />
      <label for="toggle__input" className="toggle__label">
        <span className="toggle__label__text">Dark mode</span>
        <span className="toggle__label__icon"></span>
      </label>
      <div className="toggle__background"></div>
    </div>

    <div className="empty__space">
      <p>"Some Text"</p>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 3.5rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

section > .empty__space {
  height: 50vh;
}
</style>
