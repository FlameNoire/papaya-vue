<template>
  <section class="page page_brief">
    <div v-if="isMobDevice" class="bg_trgls">
      <div class="trgl-1"><img src="@/assets/img/trgl-19.svg" alt=" "></div>
      <div class="trgl-2"><img src="@/assets/img/trgl-20.svg" alt=" "></div>
    </div>
    <transition name="fade">
      <MsgResponse2 v-show="showResponsePopup" @close-popup="closeResponsePopup"></MsgResponse2>
    </transition>
    <div class="page_header">
      <h1 class="page_title">{{ $t('brief.t1') }}</h1>
      <p class="page_title_caption" v-html="$t('brief.t2')"></p>
    </div>
    <div class="s_content">
      <div class="brief_form">
        <form>

          <p class="title">{{ $t('brief.t4') }}</p>
          
          <TextField 
            v-model="name"
            @blur="$v.name.$touch()"
            :placeholder="$t('brief.t5')"
            :class="{'error' : $v.name.$error}"
          />
          <TextFieldAutoHeight 
            v-model="comp_prod_serv"
            :placeholder="$t('brief.t6')"
          />
          <TextField 
            v-model="website"
            :placeholder="$t('brief.t7')"
          />

          <p class="title">{{ $t('brief.t8') }}</p>

          <TextField 
            v-model="contact_person"
            @blur="$v.contact_person.$touch()"
            :placeholder="$t('brief.t9')"
            :class="{'error' : $v.contact_person.$error}"
          />
          <TextField 
            v-model="phone"
            :placeholder="$t('brief.t10')"
          />
          <TextField 
            v-model="mail"
            @blur="$v.mail.$touch()"
            :placeholder="$t('brief.t11')"
            :class="{'error' : $v.mail.$error}"
          />

          <p class="title">{{ $t('brief.t12') }}</p>

          <TextFieldAutoHeight 
            v-model="activity_field"
            :placeholder="$t('brief.t13')"
          />
          <TextFieldAutoHeight 
            v-model="target_audience"
            :placeholder="$t('brief.t14')"
          />

          <p class="title">{{ $t('brief.t15') }}</p>
          <p class="text">{{ $t('brief.t16') }}</p>

          <div class="imgs_download">
            <div class="imgs_download_item">
              <FileUpload 
                v-model="uploading_files_logo"
                :title="'Logo'"
                :file_formats="'(svg, ai, png)'"
              />
            </div>
            <div class="imgs_download_item">
              <FileUpload 
                v-model="uploading_files_corpstyle"
                :title="'Corporate style'"
                :file_formats="'(rar, pdf, ai, doc)'"
              />
            </div>
          </div>

          <div class="need_logo">
            <div class="checkbox">
              <input v-model="need_logo" type="checkbox" id="need_logo" name="need_logo">
              <label for="need_logo"></label>
              <span>Need logo</span>
            </div>
            <div class="note">{{ $t('brief.t20') }}</div>
          </div>

          <div v-if="need_logo" class="logo_parameters">
            <TextFieldAutoHeight 
              v-model="logo_colors"
              :placeholder="$t('brief.t21')"
              :placeholder_right="$t('brief.t22')"
            />
            <TextFieldAutoHeight 
              v-model="logo_descr"
              :placeholder="$t('brief.t23')"
              :placeholder_right="$t('brief.t24')"
            />
          </div>

          <p class="title">{{ $t('brief.t25') }}</p>
          <p class="text">{{ $t('brief.t26') }}</p>

          <TextFieldAutoHeight 
            v-model="liked_websites"
            :placeholder="$t('brief.t45')"
          />
          <TextFieldAutoHeight 
            v-model="disliked_websites"
            :placeholder="$t('brief.t46')"
          />

          <p class="title">{{ $t('brief.t47') }}</p>

          <TextFieldAutoHeight 
            v-model="want_implement"
            :placeholder="$t('brief.t27')"
          />
          <TextFieldAutoHeight 
            v-model="dont_want_implement"
            :placeholder="$t('brief.t28')"
          />

          <p class="title">{{ $t('brief.t29') }}</p>
          <p class="text">{{ $t('brief.t30') }}</p>

          <TextField 
            v-model="website_functional[0]"
            :placeholder="$t('brief.t31')"
          />
          <TextField 
            v-model="website_functional[1]"
            :placeholder="$t('brief.t32')"
          />
          <TextField 
            v-model="website_functional[2]"
            :placeholder="$t('brief.t33')"
          />

          <div v-for="(val, index) in website_functional_fields" :key="index">
            <TextField
              v-if="index > 2"
              v-model="website_functional[index]"
            />
          </div>
          

          <div class="add_field">
            <a href="#" @click.prevent="add_functional">{{ $t('brief.t34') }}</a>
          </div>

          <p class="text">{{ $t('brief.t35') }}</p>

          <TextField 
            v-model="website_sections[0]"
            :placeholder="$t('brief.t36')"
          />
          <TextField 
            v-model="website_sections[1]"
            :placeholder="$t('brief.t37')"
          />
          <TextField 
            v-model="website_sections[2]"
            :placeholder="$t('brief.t38')"
          />

          <div v-for="(val, index) in website_sections_fields" :key="'website_section' + index">
            <TextField
              v-if="index > 2"
              v-model="website_sections[index]"
            />
          </div>

          <div class="add_field">
            <a href="#" @click.prevent="add_section">{{ $t('brief.t39') }}</a>
          </div>

          <p class="title">{{ $t('brief.t40') }}</p>

          <TextField 
            v-model="estimated_budget"
            :placeholder="$t('brief.t41')"
          />
          <TextField 
            v-model="required_deadline"
            :placeholder="$t('brief.t42')"
          />

          <p class="title">{{ $t('brief.t43') }}</p>

          <TextFieldAutoHeight 
            v-model="message"
            :placeholder="$t('brief.t44')"
          />

          <a href="#" class="buttons btn_request--send" @click.prevent="sendRequest">
            <i class="icon">
              <img src="@/assets/img/send.svg" alt=" ">
              <img src="@/assets/img/send.svg" alt=" ">
            </i>
            <span>{{$t('buttons.btn6')}}</span>
          </a>
        </form>
        
      </div>
      <div class="bg_image" v-if="!isMobDevice">
        <img src="@/assets/img/brief-trgls.svg" alt=" " class="bg_trgls">
        <img src="@/assets/img/cactus-1.svg" alt=" " class="bg_cactus">
      </div>
    </div>
  </section>
</template>

<script>
import { isMobile, isTablet } from "mobile-device-detect"
import MsgResponse2 from '@/components/MsgResponse2'
import anime from 'animejs/lib/anime.es.js'
import axios from "axios"
import { required, minLength, email } from 'vuelidate/lib/validators'
import TextFieldAutoHeight from '../components/TextFieldAutoHeight.vue'
import TextField from '../components/TextField.vue'
import FileUpload from '../components/FileUpload.vue'

export default {
  components: {
    MsgResponse2,
    TextFieldAutoHeight,
    TextField,
    FileUpload
  },
  data: () => {
    return {
      name: '',
      comp_prod_serv: '',
      website: '',
      contact_person: '',
      phone: '',
      mail: '',
      activity_field: '',
      target_audience: '',
      logo_colors: '',
      logo_descr: '',
      liked_websites: '',
      disliked_websites: '',
      want_implement: '',
      dont_want_implement: '',
      website_functional: ['','',''],
      website_sections: ['','',''],
      estimated_budget: '',
      required_deadline: '',
      message: '',
      uploading_files_logo: null,
      uploading_files_corpstyle: null,
      need_logo: false,
      msgResponsePopup: false,
      countdown: false,
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    contact_person: {
      required,
      minLength: minLength(2)
    },
    mail: {
      required,
      email,
    },
  },
  computed: {
    isMobDevice() {
      return isMobile || isTablet ? true : false
    },
    website_functional_fields() {
      return this.website_functional
    },
    website_sections_fields() {
      return this.website_sections
    },
    isCountdown() {
      return this.countdown
    },
    showResponsePopup() {
      return this.msgResponsePopup
    }
  },
  methods: {
    trglsMove() {
      this.countdown = false

      if( !this.countdown ) {
        this.countdown = true
        setTimeout(() => {

          let st = window.pageYOffset
          let translateVal = st / 10
          let scaleVal = st / 7000
          anime({
            targets: '.bg_image .bg_trgls',
            translateY: translateVal,
            scale: 1 + scaleVal,
            easing: 'easeOutQuad',
            duration: 500
          });
          this.countdown = false
        }, 300)
      }
      
      
    },
    add_functional() {
      this.website_functional.push('')
    },
    add_section() {
      this.website_sections.push('')
    },
    closeResponsePopup() {
      this.msgResponsePopup = false
      this.$router.push('/')
    },
    sendRequest() {
      // const url = process.env.VUE_APP_API_URL ;
      // const url = 'http://papaya.com' ;
      console.log(this.uploading_files_logo)
      console.log(this.uploading_files_corpstyle)
      this.$v.$touch()
      if(!this.$v.$invalid) {

        let formData = new FormData()

        formData.append('name', this.name)
        formData.append('comp_prod_serv', this.comp_prod_serv)
        formData.append('website', this.website)
        formData.append('contact_person', this.contact_person)
        formData.append('phone', this.phone)
        formData.append('mail', this.mail)
        formData.append('activity_field', this.activity_field)
        formData.append('target_audience', this.target_audience)
        formData.append('logo_colors', this.logo_colors)
        formData.append('logo_descr', this.logo_descr)
        formData.append('liked_websites', this.liked_websites)
        formData.append('disliked_websites', this.disliked_websites)
        formData.append('want_implement', this.want_implement)
        formData.append('dont_want_implement', this.dont_want_implement)
        formData.append('website_functional', this.website_functional)
        formData.append('website_sections', this.website_sections)
        formData.append('estimated_budget', this.estimated_budget)
        formData.append('required_deadline', this.required_deadline)
        formData.append('message', this.message)

        if (this.uploading_files_logo && this.uploading_files_logo.length > 0) {
            this.uploading_files_logo.forEach((file, indexFile) => {
                formData.append("logo_file_" + indexFile, file, file.name)
            })
        }
        if (this.uploading_files_corpstyle && this.uploading_files_corpstyle.length > 0) {
            this.uploading_files_corpstyle.forEach((file, indexFile) => {
                formData.append("corpstyle_file_" + indexFile, file, file.name)
            })
        }

        setTimeout(() => {
          this.msgResponsePopup = true
          this.clear()
        }, 300)
        
        /* axios
          .post(url + '/sendBriefForm', 
              formData,
              {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  }
              })
          .then(response => {
              const {data:{status}} = response;
              if (status === 'ok') {
                  this.msgResponsePopup = true
                  this.clear()
              }else alert('An unknown error has occurred, please try again.') ;
          })
          .catch(error => {
              alert('An unknown error has occurred, please try again.') ;
          }) */

      } else {
        window.scrollTo(0,0);
      }

    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.contact_person = ''
      this.mail = ''
    },
  },
  mounted() {
    anime({
      targets: '.page_brief',
      opacity: [0, 1],
      easing: 'linear',
      duration: 1000,
      delay: 500
    })

    let trglsMove = this.trglsMove

    document.addEventListener('wheel', function(e) {
      trglsMove()
    }, { passive: false })

  },
  beforeRouteLeave (to, from, next) {
    if (this.isMobDevice) {
      anime({
        targets: '.page_brief',
        opacity: [1, 0],
        easing: 'linear',
        duration: 500,
        delay: 0,
        complete: function() {
          next();
        }
      })
    } else {
      anime({
        targets: '.page_brief',
        opacity: [1, 0],
        easing: 'linear',
        duration: 500,
        delay: 0,
        complete: function() {
          next();
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.page_brief {
  padding-top: 11.5rem;
  color: #000;
  .page_header {
    position: relative;
    z-index: 10;
    margin-bottom: 0;
  }
  .page_title {
    margin-bottom: 4rem;
    font-size: 6rem;
    line-height: 7.2rem;
    text-transform: none;
  }
  .s_title {
    font-size: 7rem;
    line-height: 6rem;
    text-align: center;
  }
  .page_title_caption {
    margin-bottom: 7rem;
    font-size: 2.5rem;
    line-height: 3rem;
    width: 110rem;
  }
  .bg_trgls {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  .trgl-1 {
    position: fixed;
    top: 124px;
    right: -30px;
    img {
      width: 63px;
      height: 66px;
    }
  }
  .trgl-2 {
    position: fixed;
    bottom: 171px;
    left: -20px;
    img {
      width: 55px;
      height: 68px;
    }
  }
  .bg_image {
    width: 55rem;
    position: fixed;
    right: 8rem;
    bottom: 4rem;
    display: flex;
    justify-content: center;
  }
  .bg_cactus {
    position: relative;
    z-index: 10;
    width: 43rem;
  }
  .bg_trgls {
    position: absolute;
    top: 5.5rem;
    left: -1rem;
    z-index: 5;
  }
  .s_content {
    max-width: 83rem;
  }
  .title {
    margin-top: 5rem;
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3rem;
  }
  form {
    width: 100%;
  }
  input, textarea {
    padding: 1rem;
    width: 100%;
    font-size: 2.5rem;
    line-height: 143.2%;
    border: none;
    border-bottom: 1px solid rgba(#000, 0.3);
    border-radius: 0px!important;
    background-color: transparent;
  }
  .error {
    border-color: #DC143C;
  }
  input {
    margin-bottom: 2rem;
    height: 5.6rem;
  }
  textarea {
    height: 5.6rem;
    outline: none;
    resize: none;
  }
  input::placeholder, textarea::placeholder {
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 143.2%;
    color: rgba(#000, .5);
  }
  .btn_request--send {
    margin-top: 5rem;
  }
}
.brief_form {
  .text {
    margin-bottom: 2rem;
    color: rgba(#000, .5);
  }
  .imgs_download {
    position: relative;
    padding-top: 1rem;
    margin-bottom: 4rem;
    margin-left: -3rem;
    margin-right: -3rem;
    display: flex;
    justify-content: space-between;
  }
  .imgs_download_item {
    padding-left: 3rem;
    padding-right: 3rem;
    width: 50%;
  }
  .need_logo {
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 3rem;
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 143.2%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .note {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 143.2%;
      color: rgba(#000, .5);
    }
  }
}
.add_field {
  display: flex;
  margin-bottom: 5rem;
  // padding-top: 1rem;
  // padding-bottom: 1rem;
  // border-bottom: 1px solid rgba(#000, 0.3);
  color: rgba(#000, .5);
  a {
    padding: 1rem;
    font-size: 2.5rem;
    line-height: 143.2%;border-bottom: 1px solid rgba(#000, 0.3);
    &:hover {
      color: #000;
    }
  }
}
.btn_request--send {
    margin-top: 6.3rem;
    // width: 17rem;
    .icon {
      margin-right: 2.5rem;
      width: 21px;
      height: 21px;
    }
    &:hover, &:focus {
      background: #F15000;
      border-color: #F15000;
      color: #fff;
    }
  }

@media (max-width: 1599px) {
  .page_brief .page_title_caption {
    width: 100rem;
  }
}
@media (max-width: 1439px) {
  .page_brief .bg_image {
    transform: scale(0.9);
  }
}
@media (min-width: 992px) and (max-width: 1365px) {
  .page_brief {
    padding-left: 135px;
    padding-right: 135px;
    .bg_image {
      display: none;
    }
  }
}

@media (min-width: 992px) and (max-width: 1366px) {
  .mobile, .tablet {
    .page_brief {
      .page_title_caption {
        width: 100%;
      }
      .btn_request--send {
        display: inline-flex;
        width: auto;
      }
    }
    
  }
}
@media (max-width: 991px) {
  .page_brief {
    padding-top: 115px;
    padding-bottom: 115px;
    .page_title {
      margin-bottom: 2rem;
      font-size: 3rem;
      line-height: 3rem;
      text-transform: uppercase;
    }
    .page_title_caption {
      margin-bottom: 4rem;
      width: 100%;
      font-size: 1.6rem;
      line-height: 144%;
      /deep/ br {
        display: none;
      }
    }
    .title {
      margin-top: 3rem;
    }
    input, textarea {
      font-size: 1.8rem;
    }
    input::placeholder, textarea::placeholder {
      font-size: 1.8rem;
    }
    .btn_request--send {
      display: inline-flex;
      width: auto;
    }
  }
  .brief_form {
    .imgs_download {
      margin-left: 0;
      margin-right: 0;
      display: block;
    }
    .imgs_download_item {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
      margin-bottom: 30px;
    }
  }
}

@media (max-width: 767px) {
  .page_brief {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}
</style>