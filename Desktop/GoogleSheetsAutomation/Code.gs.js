function sendSummaryEmail() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  var body = "📋 Daily Report Summary:\n\n";
  for (var i = 1; i < data.length; i++) {
    body += "✅ " + data[i][0] + " - " + data[i][1] + "\n";
  }

  // Change this to your email or anyone's email
  var recipient = Session.getActiveUser().getEmail();
  var subject = "Your Daily Report Summary";
  
  GmailApp.sendEmail(recipient, subject, body);
  
  SpreadsheetApp.getUi().alert("✅ Email sent to: " + recipient);
}