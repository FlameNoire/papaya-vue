<template>
  <div class="file_field">
    <transition name="fade">
      <div v-if="!uploading" class="before_upload file_field_inner">
        <div class="title">{{title}}</div>
        <a href="#" class="file_link" @click.prevent="upload_file">Download file</a>
        <input
          type='file'
          @change="handleFileChange"
          multiple
        >
        <span class="file_formats">{{file_formats}}</span>
      </div>
    </transition>
    <transition name="fade" @enter="progress">
        <div v-if="uploading" class="on_upload file_field_inner" :class="{'uploading' : uploading}">
          <div class="progress_value"><span id="progress_value">0</span>%</div>
          <div class="progress_bar"><span></span></div>
          <span class="file_formats">{{ $t('brief.t48') }}</span>
        </div>
    </transition>
    
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
  // props: {value: File},
  props: ['title', 'file_formats'],
  data: () => {
    return {
      rightPlaceholder: true,
      uploading: false,
    }
  },
  computed: {
    isUploading() {
      return this.uploading
    },
  },
  methods: {
    upload_file(e) {
      let fileLink = e.target
      let fileInput = fileLink.nextSibling

      fileInput.click()

      // setTimeout(() => {
      //   this.uploading = true
      // }, 300)
    },
    handleFileChange(e) {
      // Whenever the file changes, emit the 'input' event with the file data.
      this.$emit('input', e.target.files)
      
      this.uploading = true

      setTimeout(() => {
        this.uploading = false
      }, 2000)
    },
    progress() {
      anime({
        targets: '#progress_value',
        innerHTML: [0, 100],
        easing: 'easeOutQuad',
        round: 1,
        duration: 1000,
        delay: 500
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes progress {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.file_field {
  position: relative;
  color: rgba(#000, .5);
  height: 18.7rem;
  .file_field_inner {
    height: 18.7rem;
    background: #F8F8F8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  input {
    border: none;
    background: none;
    border-radius: 0;
    display: none;
  }
  .title {
    margin-bottom: 1.8rem;
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 143.2%;
  }
  .file_link {
    position: relative;
    font-weight: 300;
    font-size: 2rem;
    line-height: 143.2%;
    color: #000;
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 2px;
      left: 0;
      height: 1px;
      width: 100%;
      opacity: 1;
      background: #000;
      transition: opacity .2s;
    }
    &:hover {
      &::after {
        opacity: 0;
      }
    }
  }
  .file_formats {
    margin-top: 2.8rem;
    font-size: 1.8rem;
    line-height: 143.2%;
    color: #808080;
  }
}
.before_upload {
  &.fade-enter-active {
    animation: fade-in .5s forwards;
  }
}
.on_upload {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 18%;
  padding-right: 18%;
  &.fade-leave-active {
    animation: fade-in .5s reverse forwards;
  }
  .file_formats {
    margin-top: 4.2rem;
  }
}
.progress_bar {
  position: relative;
  width: 100%;
  height: 2px;
  background: rgba(#000, .3);
  span {
    position: absolute;
    width: 0;
    height: 2px;
    top: 0;
    left: 0;
    background: #E56915;
    animation: progress 1s .5s forwards;
  }
}
.progress_value {
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 143.2%;
  margin-bottom: 3.3rem;
}
</style>