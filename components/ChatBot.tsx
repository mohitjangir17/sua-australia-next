import Script from 'next/script';

const ChatBot = () => {
  return (
    <div>
      <div id="comm100-button-350a2c38-beee-4259-abb6-76f9476f8f30"></div>
      <Script id="comm-100-script" type="text/javascript">
        {`var Comm100API=Comm100API||{};
      (function(t){function e(e) { var a = document.createElement("script"), 
      c = document.getElementsByTagName("script")[0]; 
      a.type = "text/javascript", 
      a.async = !0, 
      a.src = e + t.site_id, 
      c.parentNode.insertBefore(a, c) }t.chat_buttons=t.chat_buttons||[],
      t.chat_buttons.push({code_plan:"350a2c38-beee-4259-abb6-76f9476f8f30",
      div_id:"comm100-button-350a2c38-beee-4259-abb6-76f9476f8f30"}),t.site_id=90003215,
      t.main_code_plan="350a2c38-beee-4259-abb6-76f9476f8f30",
      e("https://vue.comm100.com/livechat.ashx?siteId="),
      setTimeout(function(){t.loaded || e("https://standby.comm100vue.com/livechat.ashx?siteId=")},5e3)})
      (Comm100API||{})`}
      </Script>
    </div>
  );
};

export default ChatBot;
