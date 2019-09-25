<template>
  <div class="wrapper">
    <div class="share-mask" v-if="showMask" @click="handleMask">
      <div class="share-icon">
        <svg width="119px" height="203px" viewBox="0 0 119 203" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M40.2761387,1 L117.276139,7.74421735 L82.8743775,76.7124389 L68.3184564,52.2460937 C58.1831236,62.1155032 50.7329149,70.2709516 45.9678304,76.7124389 C38.3315601,87.0352229 30.2814885,97.8159503 24.3405627,113.738549 C12.83887,144.564861 9.20779512,172.985345 13.4473381,199 C-0.654322609,166.928736 -2.77409412,133.928736 7.08802361,100 C16.9501413,66.0712641 32.2270391,40.3169239 52.9187168,22.7369792 L40.2761387,1 Z" id="Path" stroke="#979797" fill="#FFFFFF"></path>
          </g>
        </svg>
      </div>
      <div class="text">
        分享给小伙伴，<br />一起涨知识赢好礼吧
      </div>
    </div>
    <div class="container" v-if="!showForm">
      <ResultBox :result="success" :name="name" :submitStatus="submitStatus" />
      <div class="button-circle" v-if="success && !isLast" @click="handleShowForm">填写地址</div>
      <div class="button-group" v-if="isLast">
        <div class="button-circle" @click="handleReset">再玩一次</div>
        <div class="button-circle" @click="handleMask">{{shareText}}</div>
      </div>
    </div>
    <div class="form" v-else>
      <p>
        请填写您的相关信息<br />工作人员会与您取得联系并邮寄奖品
      </p>
      <div v-if="error" class="error">{{errorMsg}}</div>
      <ul>
        <li>
          <input type="text" name="username" v-model="formObj.username" placeholder="| 姓名" />
        </li>
        <li>
          <input type="number" name="phone" v-model="formObj.phone" placeholder="| 电话" />
        </li>
        <li>
          <input type="text" name="address" v-model="formObj.address" placeholder="| 地址" />
        </li>
      </ul>
      <div class="submit-button" @click="submitForm($event)"></div>
      <div class="button-circle" @click="submitForm($event)">确定提交</div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { host } from '@/config/config'
import ResultBox from '@/components/ResultBox'
const isValid = obj => {
  for(let key  in obj){
    if(obj.hasOwnProperty(key)) {
      return obj[key] && obj[key] !== ''
    }
  }
  return true
}
export default {
  data () {
    return {
      name: this.$route.params.name,
      success: true,
      showMask: false,
      submitStatus: false,
      showForm: false,
      error: false,
      token: '',
      errorMsg: '* 所有信息都必须正确填写！',
      formObj: {
        username: '',
        phone: '',
        address: ''
      }
    }
  },
  components: {
    ResultBox
  },
  methods: {
    handleMask () {
      this.showMask = !this.showMask
    },
    handleShowForm () {
      this.showForm = !this.showForm
    },
    handleReset () {
      window.location.href = window.location.href.split('#')[0]
    },
    submitForm (event) {
      event.preventDefault()
      const data = {
        code: this.token,
        address: this.formObj.address,
        mobile: this.formObj.phone,
        name: this.formObj.username
      }
      
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('mobile', data.mobile)
      formData.append('address', data.address)
      formData.append('code', data.code)
      if(isValid(data)) {
        this.error = false
        axios.post(`${host}/animalActivity/ajaxExchangeAward`, formData).then(res => {
          if (res.data.code === 0) {
            this.showForm = false
            this.submitStatus = true
          } else {
            this.error = true
            this.errorMsg = res.data.msg
          }
        }).catch(err => {
          console.error('Error:', err)
        })
      } else {
        this.error = true
      }
    },
    requestResult () {
      axios.get(`${host}/animalActivity/ajaxGetAward/`).then(res => {
        const {code, data} = res.data;
        this.success = data.code !== ''
        this.token = data.code;
      }).catch(err => {
        console.error('Error:', err)
      })
    }
  },
  computed: {
    isLast () {
      return this.success ? this.submitStatus : true
    },
    shareText () {
      return this.success ? '分享喜悦' : '分享历程'
    }
  },
  mounted () {
    this.requestResult()
  }
}
</script>
<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(../assets/images/bg/bg7.png);
  }
  .container {
    width: 80%;
    height: 80vh;
    margin: 0 auto;
  }
  .button-circle {
    position: absolute;
    font-size: 2rem;
    bottom: 15%;
  }
  .button-group {
    position: absolute;
    bottom: 20%;
    left: 10%;
    right: 10%;
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
    }
    .button-circle {
      position: relative;
      transform: none;
      top: 0;
      left: 0;
    }
  }
  .share-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, .75);
    .text {
      position: absolute;
      top: 25%;
      width: 50%;
      left: 35%;
      color: #fff;
      font-size: 1.8rem;
    }
    .share-icon {
      position: absolute;
      right: 8%;
      top: 5%;
      width: 60px;
      height: 140px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  .form {
    position: absolute;
    left: 0;
    top: 15%;
    width: 100%;
    height: 80%;
    p {
      font-size: 1.6rem;
      color: #fff;
      text-align: center;
      font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
    }
    ul {
      width: 70%;
      margin: 0 auto;
      padding: 0;
    }
    li {
      margin: 1.5rem 0;
      input {
        box-sizing: border-box;
        width: 100%;
        padding: 1.5rem;
        border-radius: 10px;
        font-size: 1.4rem;
        border: 0;
        outline: none;
        color: #012c4d;
      }
    }
    .button-circle {
      position: relative;
      top: 70px;
      bottom: auto;
      z-index: 0;
    }
  }
  .error {
    text-align: center;
    font-size: 1.4rem;
    color: #e00;
  }
</style>
