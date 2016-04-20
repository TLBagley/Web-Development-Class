function SendSubmitContactForm()
{

  var name = document.getElementById ("name").value;

  var mail = document.getElementById ("mail").value;

  var comment = document.getElementById ("comment").value;

  var mailTo = "mailto:TLBagley@Gmail.com?reply-to="+mail+"&Subject=feedback&body="+encodeURIComponent(comment);
  alert(mailTo);
  window.location=mailTo;

//  window.location.href = "mailto:TLBagley@Gmail.com?subject="
//        + encodeURIComponent("Contact")
//        + "&body=" + encodeURIComponent(comment);

}


function enableEasterEgg()
{

  var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function() {
    jQuery('#egggif').fadeIn(500, function() {
      window.setTimeout(function() { jQuery('#egggif').hide(); }, 5000);
    });
  }).listen();
}
