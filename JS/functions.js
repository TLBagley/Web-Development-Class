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
