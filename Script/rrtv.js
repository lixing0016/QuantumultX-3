/* 
[rewrite_local]
# 人人视频 旧版本api限制解除
^https:\/\/api\.rr\.tv url script-request-header https://raw.githubusercontent.com/id77/QuantumultX/master/Script/rrtv.js

[mitm]
hostname = *.rr.tv
*/

var headers = JSON.parse(
  JSON.stringify($request.headers).replace(/4\.\d\.\d/g, '4.10.1')
);

const data = { headers };

if ($request.url) data.url = $request.url.replace(/4\.\d\.\d/g, '4.10.1');

if ($request.path) data.path = $request.path.replace(/4\.\d\.\d/g, '4.10.1');

$done(data);
