//Function to send Email
//Reference: http://rcmdnk.github.io/en/blog/2014/12/11/blog-javascript/

function sendMail(){
    var senderName = document.getElementById("name").value;
    var senderPhone = document.getElementById("Phone").value;
    var senderEmail = document.getElementById("Email").value;
    var textContent = document.getElementById("message-textarea").value;
    var textHeader = '<h1 style="color:#8e44ad; font-size=20px">' + "You have a new request/query from NG-Graphics.com"+ '</h1>';
    var emailMessage = textHeader + '<p style="color:#8e44ad; font-size:16px;">' + "Name: " + senderName + '<br>' + "Email:" + senderEmail + '<br>' + "Phone:" +senderPhone + '<br>' + "Message: " + textContent + '</p>';
    console.log(emailMessage);
    
    
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': '6zoSrTUbBOnJrK7IYmWx1g',
      'message': {
        'from_email': 'webrequests@nggraphics.com',
        'to': [
          {
            'email': 'payak.keyur@gmail.com',
            'name': 'Gopal Tiwari',
            'type': 'to'
          }
        ],
        'subject': 'Request from NG Graphics.com',
        'html': emailMessage
      }
    }
  });
}