hostname=cxdng.cpic.com.cn, *.youth.cn, ios.baertt.com, api.m.jd.com, api.inews.qq.com, *.video.qq.com, *.iqiyi.com, sf-integral-sign-in.weixinjia.net, mcs-mimp-web.sf-express.com, *.bilibili.com, huiyuan.163.com, as.xiaojukeji.com, superapp.kiwa-tech.com, activity-1.m.duiba.com.cn, m.weibo.cn, mobwsa.ximalaya.com, 


# 太好购
^https://cxdng\.cpic\.com\.cn/taieshop/api/CustomerFansInfo/GetFansInfo url script-request-header https://raw.githubusercontent.com/id77/QuantumultX/master/task/thg.cookie.js
# 网易游戏会员
^https:\/\/huiyuan\.163\.com\/jf\-mall\-api\/api\/sign_up\/(lucky|fixed) url script-request-header https://raw.githubusercontent.com/id77/QuantumultX/master/task/163GameVip.cookie.js
# geekhub
^https:\/\/geekhub\.com\/checkins\/start url script-request-header https://raw.githubusercontent.com/id77/QuantumultX/master/task/geekhub.cookie.js


# 中青看点
https:\/\/\w+\.youth\.cn\/TaskCenter\/(sign|getSign) url script-request-header https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js
https?:\/\/ios\.baertt\.com\/v5\/article\/complete url script-request-body https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js
https:\/\/ios\.baertt\.com\/v5\/article\/red_packet url script-request-body https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js
https:\/\/ios\.baertt\.com\/v5\/user\/app_stay\.json url script-request-body https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js
# 京东 Get cookie
# https://bean.m.jd.com/
https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js
# 腾讯新闻
https:\/\/api\.inews\.qq\.com\/event\/v1\/user\/event\/report\? url script-request-body https://raw.githubusercontent.com/Sunert/Scripts/master/Task/txnews.js
# 腾讯视频签到，获取cookie成功后注释
^https:\/\/access.video.qq.com\/user\/auth_refresh url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/videoqq/videoqq.cookie.js
# 爱奇艺获取cookie
https?:\/\/.*\.iqiyi\.com\/.*authcookie= url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js
# 顺丰[商店版]
# 打开 APP, 访问下我的顺丰 > 去签到 (访问下去签到的页面即可, 不用点签到), 系统提示: 获取Cookie: 成功
# 打开 APP, 访问下27周年庆, 系统提示: 获取Cookie: 成功 (27周年)
# 获取cookie成功可以注释掉
^https:\/\/sf-integral-sign-in.weixinjia.net\/app\/index url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js
^https:\/\/mcs-mimp-web.sf-express.com\/mcs-mimp\/share\/(.*?)Redirect url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js
# bilibili
^https:\/\/(www|live)\.bilibili\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.cookie.js
# 滴滴出行活动
^https:\/\/as\.xiaojukeji\.com\/ep\/as\/toggles\? url script-request-header https://raw.githubusercontent.com/zZPiglet/Task/master/DiDi/DiDi.js
# 海底涝
^https:\/\/superapp\.kiwa-tech\.com\/app\/coupon\/customerLevelShow url script-request-body https://raw.githubusercontent.com/zZPiglet/Task/master/Haidilao/Haidilao.js
^https:\/\/activity-1\.m\.duiba\.com\.cn\/signactivity\/getSignInfo url script-request-header https://raw.githubusercontent.com/zZPiglet/Task/master/Haidilao/Haidilao.js
# 微博通知 (By @zZPiglet)
^https:\/\/m\.weibo\.cn\/feed\/ url script-request-header https://raw.githubusercontent.com/zZPiglet/Task/master/Weibo/Weibo.js
# 喜马拉雅
^https?:\/\/.*\/mobile\-user\/homePage\/.* url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/ximalaya/ximalaya.cookie.js