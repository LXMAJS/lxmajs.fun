let userAgent = {

    /**
     * 设备检测
     */
    // 是否是安卓设备
    verifyAndroid: () => {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        if (isAndroid) {
            return true;
        } else {
            return false;
        }
    },

    // 是否是ios设备
    verifyIos: () => {
        var u = navigator.userAgent;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isiOS) {
            return true;
        } else {
            return false;
        }
    },

    // 是否是微信内部浏览器
    isWeiXin: () => {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/WeiBo/i) == "weibo") {
            return true;
        } else if (ua.indexOf('mobile mqqbrowser') > -1) {
            return true;
        } else if (ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1) {
            if (ua.indexOf('qq') > -1) {
                return true;
            }
        }
        return false;
    },

    // 是否是支付宝内部浏览器
    isAlipay: () => {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/AlipayClient/i) == "alipayclient") {
            return true;
        }
        return false;
    },
}

let tool = {
    // 生成一个值，支持范围 range[min, max]
    // 传入的range必须是一个2元素数组
    random: (range) => {
        var max = Math.max(range[0], range[1]);
        var min = Math.min(range[0], range[1]);
        var diff = max - min;  //差值
        var number = Math.ceil(Math.random() * diff + min);
        return number;
    },

    g: (selector) => {
        //substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
        //method：根据传入的selector确定需要的方法是'getElementByClassName'或者'getElementById'
        var method = selector.substr(0, 1) == '.' ? 'getElementsByClassName' : 'getElementById';
        return document[method](selector.substr(1));
    }
}

export {
    userAgent,
    tool
}
