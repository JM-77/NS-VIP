//复制统计
function copy(obj, channel,$key) {
  var href = window.location.href;
  var channel = channel;
    /*搜索词获取*/
    var getParms = function (url) {
    url = url.split('?')[1]+'';
    var data = {};
    if(url.indexOf('=')!==-1){
        var kv = url.split('&');
        if(kv.length){
            kv.forEach(function(e){
                if(e.indexOf('=')!==-1){
                    var em = e.split('=');
                    data[em[0]] = em[1];
                }
            });
        }
    }
        return data;
    };
    var self =  {};
    //获取来源链接
    var str = window.parent.document.referrer;
    if(str){
        //有参数
        if(str.indexOf('?')!==-1){
            //获取参数
            self.data =  getParms(str);
        }
        //百度
        if(str.search('.baidu.com/') !==-1){
            self.kw = self.data['word'];
            self.fm = 'bd';
        //搜狗
        }else if(str.search('.sogou.com/') !==-1){
            //搜狗有几种方式
            if(self.data['query']){
                self.kw = self.data['query'];
            }
            if(self.data['keyword']){
                self.kw =self.data['keyword'];
            }
            if(str.search('.jsp?') !==-1){
                self.kw = 'wap' ;
            }
            self.fm = 'sg';
        //好搜
        }else if(str.search('.so.com/') !==-1){
            self.kw = self.data['q'];
            self.fm = '360';
        //神马
        }else if(str.search('.sm.cn/') !==-1){
            self.kw = self.data['q'];
            self.fm = 'sm';
        }else{
        //其他
            self.fm = 'ot';
        }
    }
    if(typeof(self.kw) != "undefined"){
        var seek = decodeURIComponent(self.kw);
    }else{
        var seek = "0";
    }
  var url = "http://neworder.ccygcj.com/user/copy/create";
  var wechat = $(obj).last().text();
  $.ajax({ 
    dataType: 'jsonp',
    jsonp: 'callback',
    data: { href: href, channel: channel, wechat: wechat, key: $key,seek:seek },
    url: url,

    success: function (data) {
      //console.log(data)
    },
    error: function () { }
  })
}



