<template>
  <div class="text_field auto_height">
    <textarea 
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @keydown="textAreaAdjust($event.target)"
      @keyup="showPlaceholderHandler(value)"
      @blur="$emit('blur')"
    ></textarea>
    <span class="placeholder_right" v-if="showRightPlaceholder">{{placeholder_right}}</span>
  </div>
</template>

<script>

export default {
  props: ['value', 'placeholder', 'placeholder_right'],
  data: () => {
    return {
      rightPlaceholder: true,
    }
  },
  computed: {
    showRightPlaceholder() {
      return this.rightPlaceholder
    }
  },
  methods: {
    textAreaAdjust(element) {
      element.style.height = "1px";
      element.style.height = element.scrollHeight + 1 + "px";
      // anime({
      //   targets: element,
      //   height: element.scrollHeight + "px",
      //   duration: 300,
      //   easing: 'linear'
      // })
    },
    showPlaceholderHandler(val) {
      if (val) {
        this.rightPlaceholder = false
      } else {
        this.rightPlaceholder = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text_field {
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(#000, 0.3);
  &.error {
    border-color: #DC143C;
  }
}
input, textarea {
  display: block;
  padding: 0 1rem;
  width: 100%;
  font-size: 2.5rem;
  line-height: 143.2%;
  border: none;
  border-radius: 0px!important;
  background-color: transparent;
  font-family: 'Sf Pro Display', 'Arial', sans-serif;
}
.error {
  border-color: #DC143C;
}
input {
  height: 3.6rem;
  overflow: hidden;
  max-height: 141px;
}
textarea {
  height: 3.6rem;
  outline: none;
  resize: none;
  max-height: 141px;
}
input::placeholder, textarea::placeholder, .placeholder_right {
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 143.2%;
  color: rgba(#000, .5);
  font-family: 'Sf Pro Display', 'Arial', sans-serif;
}
.placeholder_right {
  position: absolute;
  padding: 1rem;
  top: 0;
  right: 0;
  font-size: 1.8rem;
  line-height: 143.2%;
  font-weight: 400;
  height: 5.6rem;
  display: flex;
  align-items: center;
}

@media (max-width: 991px) {
  input {
    height: 2.6rem;
  }
  input, textarea {
    font-size: 1.8rem;
    height: 2.6rem;
  }
  input::placeholder, textarea::placeholder {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
  .placeholder_right {
    position: absolute;
    padding: 1rem;
    top: 0;
    right: 0;
    font-size: 1.6rem;
    line-height: 143.2%;
    font-weight: 400;
    height: 4.7rem;
    display: flex;
    align-items: center;
  }
}
</style>