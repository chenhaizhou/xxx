<template>
  <div id="app" ref="dom">
    <div style="width:0;height:0;overflow:hidden;"><img src='./assets/images/share_logo.jpg' /></div>
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'
import { host, share } from '@/config/config'
import logo from './assets/images/share_logo.jpg'
export default {
  mounted() {
    const thisUrl = encodeURIComponent(window.location.href.split('#')[0])
    axios.get(`${host}/wx/getWxToken?url=${thisUrl}&wxNum=1`,).then((res) => {
      if (res.status === 200 && res.data && wx) {
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.data.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.data.signature, // 必填，签名
            jsApiList: [
            "onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareQZone"
            ] // 必填，需要使用的JS接口列表
        })
        // 自定义文案及图片
        const title = share.title
        const link = share.url
        const imgUrl = 'https://h5.kepuchina.cn/html/20190923/' + logo
        const desc = share.desc
        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: title, // 分享标题
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            })
            wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            })
            wx.onMenuShareQQ({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            })
            wx.onMenuShareQZone({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            })
        })
      }
    }).catch((error) => {
        // alert('SIGN_WECHAT_JS_SDK is error')
        // commit(SHOW_ERROR_TOAST, error)
    })

    document.body.addEventListener('touchmove', function (e) {
        e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
    }, {passive: false}) // passive 参数不能省略，用来兼容ios和android
  }
}
</script>

<style lang="scss">
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    overflow: hidden;
  }
  ol, ul {
    list-style: none;
  }
  #app {
    height: 100%;
    position: fixed;
    width: 100%;
    overflow: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    -webkit-overflow-scrolling: touch;
  }
  main, .wrapper {
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  h1, h2, h3, h4 ,h5, h6 {
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
  }
  .question-box {
    position: relative;
    z-index: 1;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 5rem;
    margin: 2rem auto;
    padding: 1.5rem 3rem;
    border: 1px solid #42332F;
    background-color: rgba(255, 255, 255, .7);
    font-size: 1.8rem;
    outline: 3px solid #4e3934;
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
    p {
      padding: 0;
      margin: 0;
      text-align: center;
    }
  }
  .button-circle {
    position: fixed;
    bottom: 60px;
    left: 50%;
    display: block;
    width: 100px;
    height: 100px;
    transform: translateX(-50%);
    line-height: 100px;
    text-align: center;
    font-size: 2.6rem;
    font-weight: bold;
    color: #fff;
    border: 5px solid #fff;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 10px 5px #159588 inset, 0 0 3px 3px #159588;
    background-color: rgba(0, 0, 0, .5);
    &::before, &::after {
      content: '';
      position: absolute;
      z-index: 0;
      display: block;
      width: 0;
      height: 0;
      border-width: 14px 14px 14px 0;
      border-style: solid;
      border-color: #fff transparent transparent transparent;
    }
    &::before {
      left: 0;
      top: 75%;
      transform: rotate(15deg);
    }
    &::after {
      top: 10%;
      right: -6px;
      transform: rotate(200deg);
    }
    &.last {
      display: flex;
      font-size: 1.8rem;
      line-height: 1.2;
      align-items: center;
      justify-content: center;
    }
  }
</style>
