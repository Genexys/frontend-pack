(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-64850491-5', 'auto');
  ga('send', 'pageview');

setTimeout("ga('send', 'event', 'read', '1_seconds')", 1000);
setTimeout("ga('send', 'event', 'read', '10_seconds')", 10000);
setTimeout("ga('send', 'event', 'read', '20_seconds')", 20000);
setTimeout("ga('send', 'event', 'read', '30_seconds')", 30000);
setTimeout("ga('send', 'event', 'read', '40_seconds')", 40000);


$('.ga-video').click(function() {
  ga('send', 'event', 'video', 'click');
});

$('.ga-photo').click(function() {
  ga('send', 'event', 'photo', 'click');
});
$('.ga-film').click(function() {
  ga('send', 'event', 'film', 'click');
});
$('.ga-ticket').click(function() {
  ga('send', 'event', 'ticket', 'click');
});
