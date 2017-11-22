var Nightmare = require("nightmare");
require("nightmare-iframe-manager")(Nightmare);

function undtfd(first, last, email, password, license) {
  var nightmare = Nightmare({webPreferences: {webSecurity: false, show: true}});
  nightmare.goto("https://mail.google.com")
    .type("input[type=email]", email)
    .click("#next")
    .wait("#Passwd")
    .type("#Passwd", password)
    .click("#next")
    .wait(".aAU")
    .wait(2000)
    .goto("https://www.youtube.com/watch?v=euaGS3tPRBw")
    .wait(5000)
    .goto("https://enter.undefeated.com/user/register")
    .wait("#edit-field-first-name-und-0-value")
    .type("#edit-field-first-name-und-0-value", first)
    .type("#edit-field-last-name-und-0-value", last)
    .type("#edit-field-last-4-id-und-0-value", license)
    .type("#edit-mail", email)
    .enterIFrame("[width='304']")
    .click(".recaptcha-checkbox-checkmark")
    .wait(3000)
    .exitIFrame()
    .click("#edit-submit")
    .wait(2000)
    .evaluate(function(mail) {
      if (document.querySelectorAll(".messages.messages-status").length > 0) {
        return "Check email";
      } else {
        return "Failed";
      }
    })
    .end()
    .then(function (result) {
      console.log(result);
    })
}
