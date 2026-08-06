// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Form",
      "content": "\u003Cstyle\u003E\n  \u002F* === YOUR EXISTING STYLES === *\u002F\n  .consent-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .page-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .study-subtitle {\n    font-size: 20px;\n    font-weight: 600;\n    color: #2c3e50;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 5px;\n  }\n  .researcher-info {\n    text-align: center;\n    font-size: 15px;\n    color: #455a64;\n    margin-bottom: 25px;\n    padding: 12px;\n    background: #f5f7fa;\n    border-radius: 6px;\n  }\n  .section-heading {\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-top: 20px;\n    margin-bottom: 8px;\n    padding-bottom: 5px;\n    border-bottom: 2px solid #e8eaf6;\n  }\n  .section-text {\n    font-size: 15px;\n    color: #37474f;\n    margin-bottom: 12px;\n    padding-left: 5px;\n  }\n  .styled-list {\n    padding-left: 25px;\n    margin-bottom: 12px;\n  }\n  .styled-list li {\n    font-size: 15px;\n    color: #37474f;\n    margin-bottom: 4px;\n  }\n  .checklist {\n    background: #f8f9fa;\n    padding: 15px 20px;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n    margin-bottom: 12px;\n  }\n  .checklist-item {\n    font-size: 15px;\n    color: #37474f;\n    margin-bottom: 4px;\n  }\n  .checklist-item .check {\n    color: #1a237e;\n    font-weight: 700;\n  }\n  .consent-box {\n    background: #f0f4ff;\n    padding: 18px 20px;\n    border-radius: 8px;\n    border: 2px solid #1a237e;\n    margin-top: 25px;\n    margin-bottom: 20px;\n  }\n  .custom-checkbox {\n    display: flex;\n    align-items: flex-start;\n    gap: 12px;\n    cursor: pointer;\n  }\n  .custom-checkbox input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n    min-width: 18px;\n    margin-top: 2px;\n    accent-color: #1a237e;\n    cursor: pointer;\n  }\n  .custom-checkbox label {\n    font-size: 16px;\n    color: #1a237e;\n    font-weight: 500;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  .contact-info {\n    margin-top: 15px;\n    padding: 12px 15px;\n    background: #f5f7fa;\n    border-radius: 6px;\n    font-size: 14px;\n    color: #455a64;\n    text-align: center;\n    border-left: 4px solid #1a237e;\n  }\n  .contact-info a {\n    color: #1a237e;\n    text-decoration: none;\n    font-weight: 500;\n  }\n  .contact-info a:hover {\n    text-decoration: underline;\n  }\n  @media (max-width: 600px) {\n    .consent-container {\n      padding: 15px;\n    }\n    .page-title {\n      font-size: 20px;\n    }\n    .study-subtitle {\n      font-size: 17px;\n    }\n    .custom-checkbox label {\n      font-size: 14px;\n    }\n    .submit-btn {\n      font-size: 16px;\n      padding: 12px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"consent-container\"\u003E\n\n  \u003Ch1 class=\"page-title\"\u003E📄 Consent to Participate in Study\u003C\u002Fh1\u003E\n  \u003Ch2 class=\"study-subtitle\"\u003EThe Effect of Alert Volume and AI Assistance on Cognitive Load in Security Alert Triage\u003C\u002Fh2\u003E\n\n  \u003Cdiv class=\"researcher-info\"\u003E\n    \u003Cstrong\u003EResearcher:\u003C\u002Fstrong\u003E Josmi Jose, Master's Student, Albstadt-Sigmaringen University\u003Cbr\u003E\n    \u003Cstrong\u003ESupervisor:\u003C\u002Fstrong\u003E Professor Stefan Sutterlin\n  \u003C\u002Fdiv\u003E\n\n  \u003Ch4 class=\"section-heading\"\u003E📋 What is the purpose of this study?\u003C\u002Fh4\u003E\n  \u003Cp class=\"section-text\"\u003EThis study investigates how alert volume and AI assistance affect decision-making accuracy, response time, and cognitive load during security alert triage.\u003C\u002Fp\u003E\n\n  \u003Ch4 class=\"section-heading\"\u003E⚙️ What will I do as a participant?\u003C\u002Fh4\u003E\n  \u003Cp class=\"section-text\"\u003EYou will complete a 60-minute online experiment consisting of:\u003C\u002Fp\u003E\n  \u003Cul class=\"styled-list\"\u003E\n    \u003Cli\u003E\u003Cstrong\u003E4 blocks\u003C\u002Fstrong\u003E of alert triage tasks (8–10 minutes each)\u003C\u002Fli\u003E\n    \u003Cli\u003EA short \u003Cstrong\u003ENASA-TLX questionnaire\u003C\u002Fstrong\u003E after each block (3 minutes each)\u003C\u002Fli\u003E\n    \u003Cli\u003E\u003Cstrong\u003ETotal time:\u003C\u002Fstrong\u003E approximately 60 minutes including breaks\u003C\u002Fli\u003E\n  \u003C\u002Ful\u003E\n\n  \u003Ch4 class=\"section-heading\"\u003E🛡️ Are there any risks?\u003C\u002Fh4\u003E\n  \u003Cp class=\"section-text\"\u003ENo physical or psychological risks are anticipated.\u003C\u002Fp\u003E\n\n  \u003Ch4 class=\"section-heading\"\u003E🔒 Is my data confidential?\u003C\u002Fh4\u003E\n  \u003Cdiv class=\"checklist\"\u003E\n    \u003Cdiv class=\"checklist-item\"\u003E\u003Cspan class=\"check\"\u003E✅\u003C\u002Fspan\u003E All data will be collected anonymously.\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"checklist-item\"\u003E\u003Cspan class=\"check\"\u003E✅\u003C\u002Fspan\u003E No personal identifying information (name, email, IP address) will be stored.\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"checklist-item\"\u003E\u003Cspan class=\"check\"\u003E✅\u003C\u002Fspan\u003E Data will be analyzed only in aggregated form.\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Ch4 class=\"section-heading\"\u003E✋ Do I have to participate?\u003C\u002Fh4\u003E\n  \u003Cp class=\"section-text\"\u003ENo. Participation is entirely voluntary. You may stop at any time without penalty.\u003C\u002Fp\u003E\n\n  \u003Ch4 class=\"section-heading\"\u003E❓ What if I have questions?\u003C\u002Fh4\u003E\n  \u003Cdiv class=\"contact-info\"\u003E\n    Contact the researcher: \u003Ca href=\"mailto:josejosm@hs-albsig.de\"\u003EJosmi Jose – josejosm@hs-albsig.de\u003C\u002Fa\u003E\u003Cbr\u003E\n    Or the supervisor: \u003Ca href=\"mailto:suetterlin@hs-albsig.de\"\u003EProfessor Stefan Sutterlin – suetterlin@hs-albsig.de\u003C\u002Fa\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- === CONSENT CHECKBOX FORM === --\u003E\n  \u003C!-- Added a hidden input to trigger Lab.js navigation --\u003E\n  \u003Cform id=\"consentForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003C!-- \u003Cinput type=\"hidden\" name=\"consent_submitted\" value=\"true\"\u003E --\u003E\n    \n    \u003Cdiv class=\"consent-box\"\u003E\n      \u003Cdiv class=\"custom-checkbox\"\u003E\n        \u003Cinput type=\"checkbox\" id=\"consentCheck\" name=\"consent\" value=\"agreed\" required\u003E\n        \u003Clabel for=\"consentCheck\"\u003E\n          \u003Cstrong\u003EI have read and understood the above information and agree to participate in this study.\u003C\u002Fstrong\u003E\n        \u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\" id=\"consentButton\"\u003E✓ I Agree & Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n  \u003C!-- \u003Cform id=\"consentForm\"\u003E\n  \u003Cinput name=\"variable\" hidden\u003E\n  \u003Cinput type=\"checkbox\" id=\"consentCheck\" name=\"consent\" value=\"agreed\" required\u003E\n  \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E --\u003E\n\n\u003C\u002Fdiv\u003E\n",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
// ==========================================
// OPTIONAL: Custom Behavior for Native Form
// RUN EVENT
// ==========================================

console.log('=== Consent Screen Loaded ===');

// --- STEP 1: Wait for the form to be ready ---
setTimeout(function() {
  // Find the checkbox and button in the native form
  var checkbox = document.querySelector('input[type="checkbox"]');
  var button = document.querySelector('button[type="submit"]');
  
  console.log('Checkbox found:', checkbox);
  console.log('Button found:', button);
  
  if (checkbox && button) {
    // --- OPTIONAL: Add custom styling to the validation message ---
    // When the form is invalid, style the message
    var form = checkbox.closest('form');
    if (form) {
      form.addEventListener('invalid', function(e) {
        // This runs when the form validation fails
        console.log('Form validation failed:', e.target);
        
        // You can add custom styling here
        var errorMessages = document.querySelectorAll('.labjs-validation-error, .validation-error');
        errorMessages.forEach(function(msg) {
          msg.style.color = '#d32f2f';
          msg.style.fontWeight = 'bold';
          msg.style.fontSize = '16px';
        });
      }, true); // Use capturing phase to catch the event
    }
    
    // --- OPTIONAL: Log when consent is given ---
    form.addEventListener('submit', function(e) {
      if (checkbox.checked) {
        console.log('✅ Consent given!');
        // You can add additional logging here
        // labjs.data.set('consent', 'agreed');
      }
    });
    
    console.log('✅ Custom behavior attached successfully.');
  } else {
    console.error('❌ Checkbox or button not found.');
  }
}, 300); // Wait for DOM to be ready

console.log('=== Consent Script Setup Complete ===');
}
      },
      "title": "Consent Form"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cstyle\u003E\n  \u002F* === TRAINING INSTRUCTIONS STYLES (Matching Consent Form) === *\u002F\n  .training-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .page-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .training-content {\n    font-size: 16px;\n    color: #37474f;\n    line-height: 1.7;\n    margin-bottom: 25px;\n  }\n  .training-content ul {\n    padding-left: 25px;\n    margin-bottom: 15px;\n  }\n  .training-content ul li {\n    margin-bottom: 8px;\n  }\n  .start-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    text-align: center;\n  }\n  .start-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .training-container {\n      padding: 15px;\n    }\n    .page-title {\n      font-size: 20px;\n    }\n    .start-btn {\n      font-size: 16px;\n      padding: 12px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"training-container\"\u003E\n\n  \u003Ch1 class=\"page-title\"\u003E📋 Training Session\u003C\u002Fh1\u003E\n\n  \u003Cdiv class=\"training-content\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003EYou will now complete 5 practice trials.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n    \u003Cp\u003EFor each alert, you will see:\u003C\u002Fp\u003E\n    \u003Cul\u003E\n      \u003Cli\u003EAlert details (timestamp, source IP, event code, description)\u003C\u002Fli\u003E\n      \u003Cli\u003EYou must classify it as \u003Cstrong\u003E\"Malicious\"\u003C\u002Fstrong\u003E or \u003Cstrong\u003E\"Benign\"\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n    \u003Cp\u003EAfter each trial, you will receive feedback on whether your answer was correct.\u003C\u002Fp\u003E\n    \u003Cp style=\"margin-top: 20px; font-weight: 500;\"\u003EClick the button below to begin the practice session.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- === START PRACTICE FORM === --\u003E\n  \u003Cform\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"start-btn\"\u003E▶ Start Practice\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Training Instructions"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "timestamp": "15-08-2024 14:32",
          "sourceIP": "192.168.1.45",
          "eventCode": "4625",
          "alertDescription": "Multiple failed logins from suspicious IP address josmihhh",
          "correctAnswer": "Malicious",
          "": ""
        },
        {
          "timestamp": "15-08-2024 15:10",
          "sourceIP": "10.0.0.23",
          "eventCode": "4624",
          "alertDescription": "Successful login during normal business hours",
          "correctAnswer": "Benign",
          "": ""
        },
        {
          "timestamp": "15-08-2024 16:45",
          "sourceIP": "172.16.5.100",
          "eventCode": "4688",
          "alertDescription": "Suspicious process execution: powershell -enc",
          "correctAnswer": "Malicious",
          "": ""
        },
        {
          "timestamp": "15-08-2024 17:20",
          "sourceIP": "8.8.8.8",
          "eventCode": "5145",
          "alertDescription": "Unusual network share access from external IP",
          "correctAnswer": "Malicious",
          "": ""
        },
        {
          "timestamp": "15-08-2024 18:05",
          "sourceIP": "192.168.1.1",
          "eventCode": "4663",
          "alertDescription": "File access to sensitive HR folder by user",
          "correctAnswer": "Benign",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "5"
      },
      "files": {
        "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Practice Loop",
      "tardy": true,
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Form",
            "content": "\u003Cstyle\u003E\n  \u002F* === PRACTICE ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍 Practice Alert\u003C\u002Fh1\u003E\n\n  \u003Cdiv class=\"alert-details\"\u003E\n   \u003Cp\u003ETimestamp: ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n\n\u003Cp\u003ESource IP: ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n\n\u003Cp\u003EEvent Code: ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n\n\u003Cp\u003EAlert: ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"practiceForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
            "scrollTop": true,
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
  // === UPDATE THE TITLE WITH THE TRIAL NUMBER ===
  (function() {
    // Get the current trial count from sessionStorage (managed by the loop)
    var trialCount = parseInt(sessionStorage.getItem('practiceTrialCount')) || 0;
    trialCount += 1;
    sessionStorage.setItem('practiceTrialCount', trialCount);
    
    // Update the title
    var titleElement = document.getElementById('alertTitle');
    if (titleElement) {
      titleElement.textContent = '🔍 Practice Alert ' + trialCount + ' of 5';
    }
    
    console.log('Practice trial:', trialCount);
  })();

  // === STORE THE CORRECT ANSWER FOR THE FEEDBACK SCREEN ===
  document.getElementById('practiceForm').addEventListener('submit', function(e) {
    // Get the selected radio button
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      // Store the participant's response
      sessionStorage.setItem('participantResponse', selected.value);
      
      // Get the correct answer from the hidden field
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      // If no option is selected, prevent submission
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
            },
            "title": "Practice Alert"
          },
          {
            "type": "lab.html.Form",
            "content": "\u003Cstyle\u003E\n  \u002F* === PRACTICE FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Practice Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
            "scrollTop": true,
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    // Get the stored participant response
    var participantResponse = sessionStorage.getItem('participantResponse');
    
    // Get the correct answer from sessionStorage
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    // If not found, use a fallback
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    // Clean up the participant response
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    // Determine if the answer is correct
    var isCorrect = (participantResponse === correctAnswer);
    
    // Get the display elements
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    // Display the result
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done! You are ready for the main experiment.</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER LAST TRIAL ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    var trialCount = parseInt(sessionStorage.getItem('practiceTrialCount')) || 0;
    if (trialCount >= 5) {
      sessionStorage.setItem('practiceTrialCount', '0');
      sessionStorage.removeItem('correctAnswer');
      sessionStorage.removeItem('currentTrialData');
      console.log('Practice session complete. Trial count reset.');
    }
  });
}
            },
            "title": "Practice Feedback"
          }
        ]
      }
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cstyle\u003E\n  \u002F* === TRANSITION TO MAIN STYLES === *\u002F\n  .transition-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 40px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .transition-title {\n    font-size: 28px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n  }\n  .transition-text {\n    font-size: 18px;\n    color: #37474f;\n    line-height: 1.8;\n    margin-bottom: 30px;\n    text-align: left;\n  }\n  .transition-text strong {\n    color: #1a237e;\n  }\n  .transition-text ul {\n    padding-left: 20px;\n  }\n  .transition-text ul li {\n    margin-bottom: 8px;\n  }\n  .transition-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .transition-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  .progress-summary {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 8px;\n    margin: 15px 0;\n    font-size: 16px;\n    color: #455a64;\n    border-left: 4px solid #1a237e;\n    text-align: left;\n  }\n  .progress-summary p {\n    margin: 5px 0;\n  }\n  .duration-box {\n    background: #fff3e0;\n    padding: 12px 18px;\n    border-radius: 8px;\n    border-left: 4px solid #e65100;\n    margin-bottom: 20px;\n    text-align: left;\n  }\n  .duration-box p {\n    margin: 0;\n    font-size: 16px;\n    color: #e65100;\n    font-weight: 600;\n  }\n  .duration-box .sub {\n    font-weight: 400;\n    font-size: 14px;\n    color: #bf360c;\n    margin-top: 4px;\n  }\n  @media (max-width: 600px) {\n    .transition-container {\n      padding: 15px;\n    }\n    .transition-title {\n      font-size: 22px;\n    }\n    .transition-text {\n      font-size: 16px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"transition-container\"\u003E\n\n  \u003Ch1 class=\"transition-title\"\u003EPractice Complete!\u003C\u002Fh1\u003E\n\n  \u003C!-- Duration message --\u003E\n  \u003Cdiv class=\"duration-box\"\u003E\n    \u003Cp\u003EEstimated time: 30-40 minutes\u003C\u002Fp\u003E\n    \u003Cp class=\"sub\"\u003EPlease ensure you have enough time to complete the main experiment in one sitting.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"transition-text\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003EYou have completed the practice session.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n    \u003Cp\u003EYou will now begin the \u003Cstrong\u003Emain experiment\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n    \u003Cp\u003ERemember:\u003C\u002Fp\u003E\n    \u003Cul\u003E\n      \u003Cli\u003EClassify each alert as \u003Cstrong\u003EMalicious\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBenign\u003C\u002Fstrong\u003E.\u003C\u002Fli\u003E\n      \u003Cli\u003ESome blocks will include AI recommendations.\u003C\u002Fli\u003E\n      \u003Cli\u003EAfter each block, you will complete a short questionnaire.\u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"progress-summary\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003EWhat to expect:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n    \u003Cp\u003EYou will complete \u003Cstrong\u003E4 blocks\u003C\u002Fstrong\u003E of alerts.\u003C\u002Fp\u003E\n    \u003Cp\u003EEach block contains either \u003Cstrong\u003E10\u003C\u002Fstrong\u003E or \u003Cstrong\u003E30\u003C\u002Fstrong\u003E alerts.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"transition-btn\"\u003EStart Main Experiment\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Transition to Main"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "versionToRun": "1"
        },
        {
          "versionToRun": "2"
        },
        {
          "versionToRun": "3"
        },
        {
          "versionToRun": "4"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "1"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Select One Version",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "title": "Version Selector",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "content": [
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// Set the initial block for Version 1
sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
sessionStorage.setItem('trialTotal', '10');
sessionStorage.setItem('trialPosition', '0');
console.log('Version 1 started - Block 1 - Low NoAI');
}
            },
            "title": "Version 1",
            "skip": "${ parameters.versionToRun != '1' }",
            "content": [
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 10:45:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 11:15:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 14:00:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 14:32:00",
                    "sourceIP": "185.142.53.40",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'backup_user' from IP 185.142.53.40",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 15:10:00",
                    "sourceIP": "203.0.113.50",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'webadmin' from IP 203.0.113.50",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:45:00",
                    "sourceIP": "198.51.100.30",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sql_admin' from IP 198.51.100.30",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 18:05:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'wscript.exe' launched from Downloads folder",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 19:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Users\\admin\\Documents\\passwords.txt",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "10"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "10"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
sessionStorage.setItem('trialTotal', '10');
sessionStorage.setItem('trialPosition', '0');

this.parameters.blockName = 'Block 1 - Low NoAI';
this.parameters.blockTotal = '10';

console.log('[LOOP] set blockName to', this.parameters.blockName);
}
                },
                "title": "Block 1 - Low NoAI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n\u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 08:30:00",
                    "sourceIP": "10.0.20.65",
                    "eventCode": "4624",
                    "alertDescription": "User 'hlee' logged in from 10.0.20.65 at 8:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "85",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 09:45:00",
                    "sourceIP": "192.168.1.135",
                    "eventCode": "4624",
                    "alertDescription": "User 'twong' logged in from 192.168.1.135 at 9:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "90",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 11:00:00",
                    "sourceIP": "10.0.20.70",
                    "eventCode": "4624",
                    "alertDescription": "User 'mkim' logged in from 10.0.20.70 at 11:00 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "78",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 12:15:00",
                    "sourceIP": "192.168.1.140",
                    "eventCode": "4624",
                    "alertDescription": "User 'jchen' logged in from 192.168.1.140 at 12:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "82",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 13:45:00",
                    "sourceIP": "10.0.20.75",
                    "eventCode": "4624",
                    "alertDescription": "User 'alin' logged in from 10.0.20.75 at 1:45 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "88",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 14:32:00",
                    "sourceIP": "185.142.53.41",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'domain_admin' from IP 185.142.53.41",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "92",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 15:10:00",
                    "sourceIP": "203.0.113.51",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'service_acc' from IP 203.0.113.51",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "87",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:45:00",
                    "sourceIP": "198.51.100.31",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'it_support' from IP 198.51.100.31",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "45",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 18:05:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'reg.exe' modifying Windows Defender settings",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "82",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 19:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to IPC$ from external IP 45.33.22.11",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "79",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "10"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "10"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 2: LOW, WITH AI ===
sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
sessionStorage.setItem('trialTotal', '10');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS


this.parameters.blockName = 'Block 2 - Low AI';
this.parameters.blockTotal = '10';

console.log('Block 2 started');
}
                },
                "title": "Block 2 - Low AI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n\n  \u002F* === AI RECOMMENDATION STYLES === *\u002F\n  .ai-box {\n    background: #e8f5e9;\n    padding: 12px 16px;\n    border-radius: 6px;\n    border-left: 4px solid #2e7d32;\n    margin-bottom: 15px;\n    text-align: center;\n  }\n  .ai-box .ai-label {\n    font-weight: 600;\n    color: #1a237e;\n  }\n  .ai-box .ai-recommendation {\n    color: #2e7d32;\n    font-weight: 700;\n    font-size: 18px;\n  }\n  .ai-box .ai-confidence {\n    color: #455a64;\n    font-size: 14px;\n  }\n  .ai-box .ai-note {\n    font-size: 13px;\n    color: #455a64;\n    font-style: italic;\n    margin-top: 4px;\n  }\n\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍 Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n      \u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- === AI RECOMMENDATION (Shows only if aiRecommendation exists) === --\u003E\n  \u003Cdiv class=\"ai-box\"\u003E\n    \u003Cspan class=\"ai-label\"\u003E🤖 AI Recommendation:\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-recommendation\"\u003E${ this.parameters.aiRecommendation }\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-confidence\"\u003E(Confidence: ${ this.parameters.aiConfidence || 'N\u002FA' }%)\u003C\u002Fspan\u003E\n    \u003Cdiv class=\"ai-note\"\u003EThis is an AI-generated suggestion. Please make your own decision.\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 15:15:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "192.168.1.130",
                    "eventCode": "4624",
                    "alertDescription": "User 'kpatel' logged in from 192.168.1.130 at 4:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "10.0.20.80",
                    "eventCode": "4624",
                    "alertDescription": "User 'rkim' logged in from 10.0.20.80 at 5:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 08:45:00",
                    "sourceIP": "192.168.1.145",
                    "eventCode": "4624",
                    "alertDescription": "User 'sgupta' logged in from 192.168.1.145 at 8:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 10:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 13:15:00",
                    "sourceIP": "185.142.53.42",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'helpdesk' from IP 185.142.53.42",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 14:45:00",
                    "sourceIP": "203.0.113.52",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sysadmin' from IP 203.0.113.52",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "198.51.100.32",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'network_admin' from IP 198.51.100.32",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "185.142.53.43",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'security_audit' from IP 185.142.53.43",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 18:45:00",
                    "sourceIP": "203.0.113.53",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'db_admin' from IP 203.0.113.53",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "10"
                  },
                  {
                    "timestamp": "2024-08-15 19:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to ADMIN$ from 10.0.0.45 at 2:15 AM",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "11"
                  },
                  {
                    "timestamp": "2024-08-15 20:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\System32\\drivers\\etc\\hosts",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "12"
                  },
                  {
                    "timestamp": "2024-08-15 20:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'schtasks.exe' creating new scheduled task",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "13"
                  },
                  {
                    "timestamp": "2024-08-15 21:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to C$ from workstation at 3:30 AM",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "14"
                  },
                  {
                    "timestamp": "2024-08-15 22:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\ProgramData\\Microsoft\\Windows\\Start Menu",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "15"
                  },
                  {
                    "timestamp": "2024-08-15 23:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4648",
                    "alertDescription": "User 'Administrator' login from non-admin workstation",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "16"
                  },
                  {
                    "timestamp": "2024-08-15 23:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'mshta.exe' with suspicious URL parameter",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "17"
                  },
                  {
                    "timestamp": "2024-08-15 00:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to print$ from unknown IP",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "18"
                  },
                  {
                    "timestamp": "2024-08-15 01:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\Temp\\suspicious.exe",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "19"
                  },
                  {
                    "timestamp": "2024-08-15 02:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'rundll32.exe' executing from temp folder",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "20"
                  },
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "198.51.100.33",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'app_user' from IP 198.51.100.33",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "21"
                  },
                  {
                    "timestamp": "2024-08-15 10:15:00",
                    "sourceIP": "185.142.53.44",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'test_admin' from IP 185.142.53.44",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "22"
                  },
                  {
                    "timestamp": "2024-08-15 11:45:00",
                    "sourceIP": "203.0.113.54",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'prod_admin' from IP 203.0.113.54",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "23"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "198.51.100.34",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'legacy_admin' from IP 198.51.100.34",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "24"
                  },
                  {
                    "timestamp": "2024-08-15 13:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "25"
                  },
                  {
                    "timestamp": "2024-08-15 14:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "26"
                  },
                  {
                    "timestamp": "2024-08-15 15:30:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "27"
                  },
                  {
                    "timestamp": "2024-08-15 16:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "28"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "29"
                  },
                  {
                    "timestamp": "2024-08-15 18:30:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "30"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "30"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 3: HIGH, NO AI ===
sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
sessionStorage.setItem('trialTotal', '30');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 3 - High NoAI';
this.parameters.blockTotal = '30';

console.log('Block 3 started');
}
                },
                "title": "Block 3 - High NoAI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n\u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 15:15:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "84",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "192.168.1.130",
                    "eventCode": "4624",
                    "alertDescription": "User 'kpatel' logged in from 192.168.1.130 at 4:00 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "91",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "10.0.20.80",
                    "eventCode": "4624",
                    "alertDescription": "User 'rkim' logged in from 10.0.20.80 at 5:30 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "77",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 08:45:00",
                    "sourceIP": "192.168.1.145",
                    "eventCode": "4624",
                    "alertDescription": "User 'sgupta' logged in from 192.168.1.145 at 8:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "83",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 10:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "89",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 13:15:00",
                    "sourceIP": "185.142.53.42",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'helpdesk' from IP 185.142.53.42",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "93",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 14:45:00",
                    "sourceIP": "203.0.113.52",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sysadmin' from IP 203.0.113.52",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "86",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "198.51.100.32",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'network_admin' from IP 198.51.100.32",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "42",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "185.142.53.43",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'security_audit' from IP 185.142.53.43",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "81",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 18:45:00",
                    "sourceIP": "203.0.113.53",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'db_admin' from IP 203.0.113.53",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "88",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "10"
                  },
                  {
                    "timestamp": "2024-08-15 19:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to ADMIN$ from 10.0.0.45 at 2:15 AM",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "80",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "11"
                  },
                  {
                    "timestamp": "2024-08-15 20:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\System32\\drivers\\etc\\hosts",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "76",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "12"
                  },
                  {
                    "timestamp": "2024-08-15 20:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'schtasks.exe' creating new scheduled task",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "85",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "13"
                  },
                  {
                    "timestamp": "2024-08-15 21:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to C$ from workstation at 3:30 AM",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "38",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "14"
                  },
                  {
                    "timestamp": "2024-08-15 22:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\ProgramData\\Microsoft\\Windows\\Start Menu",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "75",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "15"
                  },
                  {
                    "timestamp": "2024-08-15 23:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4648",
                    "alertDescription": "User 'Administrator' login from non-admin workstation",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "90",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "16"
                  },
                  {
                    "timestamp": "2024-08-15 23:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'mshta.exe' with suspicious URL parameter",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "87",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "17"
                  },
                  {
                    "timestamp": "2024-08-15 00:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to print$ from unknown IP",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "79",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "18"
                  },
                  {
                    "timestamp": "2024-08-15 01:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\Temp\\suspicious.exe",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "82",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "19"
                  },
                  {
                    "timestamp": "2024-08-15 02:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'rundll32.exe' executing from temp folder",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "78",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "20"
                  },
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "198.51.100.33",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'app_user' from IP 198.51.100.33",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "85",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "21"
                  },
                  {
                    "timestamp": "2024-08-15 10:15:00",
                    "sourceIP": "185.142.53.44",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'test_admin' from IP 185.142.53.44",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "41",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "22"
                  },
                  {
                    "timestamp": "2024-08-15 11:45:00",
                    "sourceIP": "203.0.113.54",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'prod_admin' from IP 203.0.113.54",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "89",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "23"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "198.51.100.34",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'legacy_admin' from IP 198.51.100.34",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "84",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "24"
                  },
                  {
                    "timestamp": "2024-08-15 13:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "80",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "25"
                  },
                  {
                    "timestamp": "2024-08-15 14:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "92",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "26"
                  },
                  {
                    "timestamp": "2024-08-15 15:30:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "77",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "27"
                  },
                  {
                    "timestamp": "2024-08-15 16:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "86",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "28"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "79",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "29"
                  },
                  {
                    "timestamp": "2024-08-15 18:30:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "83",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "30"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "30"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 4: HIGH, WITH AI ===
sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
sessionStorage.setItem('trialTotal', '30');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 4 - High AI';
this.parameters.blockTotal = '30';

console.log('Block 4 started');


}
                },
                "title": "Block 4 - High AI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n\n  \u002F* === AI RECOMMENDATION STYLES === *\u002F\n  .ai-box {\n    background: #e8f5e9;\n    padding: 12px 16px;\n    border-radius: 6px;\n    border-left: 4px solid #2e7d32;\n    margin-bottom: 15px;\n    text-align: center;\n  }\n  .ai-box .ai-label {\n    font-weight: 600;\n    color: #1a237e;\n  }\n  .ai-box .ai-recommendation {\n    color: #2e7d32;\n    font-weight: 700;\n    font-size: 18px;\n  }\n  .ai-box .ai-confidence {\n    color: #455a64;\n    font-size: 14px;\n  }\n  .ai-box .ai-note {\n    font-size: 13px;\n    color: #455a64;\n    font-style: italic;\n    margin-top: 4px;\n  }\n\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍 Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n      \u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- === AI RECOMMENDATION (Shows only if aiRecommendation exists) === --\u003E\n  \u003Cdiv class=\"ai-box\"\u003E\n    \u003Cspan class=\"ai-label\"\u003E🤖 AI Recommendation:\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-recommendation\"\u003E${ this.parameters.aiRecommendation }\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-confidence\"\u003E(Confidence: ${ this.parameters.aiConfidence || 'N\u002FA' }%)\u003C\u002Fspan\u003E\n    \u003Cdiv class=\"ai-note\"\u003EThis is an AI-generated suggestion. Please make your own decision.\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire\u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              }
            ]
          },
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// Set the initial block for Version 2
sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
sessionStorage.setItem('trialTotal', '10');
sessionStorage.setItem('trialPosition', '0');
console.log('Version 2 started - Block 2 - Low AI');
}
            },
            "title": "Version 2",
            "skip": "${ parameters.versionToRun != '2' }",
            "content": [
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 08:30:00",
                    "sourceIP": "10.0.20.65",
                    "eventCode": "4624",
                    "alertDescription": "User 'hlee' logged in from 10.0.20.65 at 8:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "85",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 09:45:00",
                    "sourceIP": "192.168.1.135",
                    "eventCode": "4624",
                    "alertDescription": "User 'twong' logged in from 192.168.1.135 at 9:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "90",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 11:00:00",
                    "sourceIP": "10.0.20.70",
                    "eventCode": "4624",
                    "alertDescription": "User 'mkim' logged in from 10.0.20.70 at 11:00 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "78",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 12:15:00",
                    "sourceIP": "192.168.1.140",
                    "eventCode": "4624",
                    "alertDescription": "User 'jchen' logged in from 192.168.1.140 at 12:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "82",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 13:45:00",
                    "sourceIP": "10.0.20.75",
                    "eventCode": "4624",
                    "alertDescription": "User 'alin' logged in from 10.0.20.75 at 1:45 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "88",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 14:32:00",
                    "sourceIP": "185.142.53.41",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'domain_admin' from IP 185.142.53.41",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "92",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 15:10:00",
                    "sourceIP": "203.0.113.51",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'service_acc' from IP 203.0.113.51",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "87",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:45:00",
                    "sourceIP": "198.51.100.31",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'it_support' from IP 198.51.100.31",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "45",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 18:05:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'reg.exe' modifying Windows Defender settings",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "82",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 19:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to IPC$ from external IP 45.33.22.11",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "79",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "10"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "10"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 2: LOW, WITH AI ===
sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
sessionStorage.setItem('trialTotal', '10');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 2 - Low AI';
this.parameters.blockTotal = '10';

console.log('Block 2 started');


}
                },
                "title": "Block 2 - Low AI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n\n  \u002F* === AI RECOMMENDATION STYLES === *\u002F\n  .ai-box {\n    background: #e8f5e9;\n    padding: 12px 16px;\n    border-radius: 6px;\n    border-left: 4px solid #2e7d32;\n    margin-bottom: 15px;\n    text-align: center;\n  }\n  .ai-box .ai-label {\n    font-weight: 600;\n    color: #1a237e;\n  }\n  .ai-box .ai-recommendation {\n    color: #2e7d32;\n    font-weight: 700;\n    font-size: 18px;\n  }\n  .ai-box .ai-confidence {\n    color: #455a64;\n    font-size: 14px;\n  }\n  .ai-box .ai-note {\n    font-size: 13px;\n    color: #455a64;\n    font-style: italic;\n    margin-top: 4px;\n  }\n\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍 Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n      \u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- === AI RECOMMENDATION (Shows only if aiRecommendation exists) === --\u003E\n  \u003Cdiv class=\"ai-box\"\u003E\n    \u003Cspan class=\"ai-label\"\u003E🤖 AI Recommendation:\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-recommendation\"\u003E${ this.parameters.aiRecommendation }\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-confidence\"\u003E(Confidence: ${ this.parameters.aiConfidence || 'N\u002FA' }%)\u003C\u002Fspan\u003E\n    \u003Cdiv class=\"ai-note\"\u003EThis is an AI-generated suggestion. Please make your own decision.\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 15:15:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "84",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "192.168.1.130",
                    "eventCode": "4624",
                    "alertDescription": "User 'kpatel' logged in from 192.168.1.130 at 4:00 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "91",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "10.0.20.80",
                    "eventCode": "4624",
                    "alertDescription": "User 'rkim' logged in from 10.0.20.80 at 5:30 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "77",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 08:45:00",
                    "sourceIP": "192.168.1.145",
                    "eventCode": "4624",
                    "alertDescription": "User 'sgupta' logged in from 192.168.1.145 at 8:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "83",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 10:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "89",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 13:15:00",
                    "sourceIP": "185.142.53.42",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'helpdesk' from IP 185.142.53.42",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "93",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 14:45:00",
                    "sourceIP": "203.0.113.52",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sysadmin' from IP 203.0.113.52",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "86",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "198.51.100.32",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'network_admin' from IP 198.51.100.32",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "42",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "185.142.53.43",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'security_audit' from IP 185.142.53.43",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "81",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 18:45:00",
                    "sourceIP": "203.0.113.53",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'db_admin' from IP 203.0.113.53",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "88",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "10"
                  },
                  {
                    "timestamp": "2024-08-15 19:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to ADMIN$ from 10.0.0.45 at 2:15 AM",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "80",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "11"
                  },
                  {
                    "timestamp": "2024-08-15 20:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\System32\\drivers\\etc\\hosts",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "76",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "12"
                  },
                  {
                    "timestamp": "2024-08-15 20:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'schtasks.exe' creating new scheduled task",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "85",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "13"
                  },
                  {
                    "timestamp": "2024-08-15 21:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to C$ from workstation at 3:30 AM",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "38",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "14"
                  },
                  {
                    "timestamp": "2024-08-15 22:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\ProgramData\\Microsoft\\Windows\\Start Menu",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "75",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "15"
                  },
                  {
                    "timestamp": "2024-08-15 23:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4648",
                    "alertDescription": "User 'Administrator' login from non-admin workstation",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "90",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "16"
                  },
                  {
                    "timestamp": "2024-08-15 23:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'mshta.exe' with suspicious URL parameter",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "87",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "17"
                  },
                  {
                    "timestamp": "2024-08-15 00:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to print$ from unknown IP",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "79",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "18"
                  },
                  {
                    "timestamp": "2024-08-15 01:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\Temp\\suspicious.exe",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "82",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "19"
                  },
                  {
                    "timestamp": "2024-08-15 02:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'rundll32.exe' executing from temp folder",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "78",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "20"
                  },
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "198.51.100.33",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'app_user' from IP 198.51.100.33",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "85",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "21"
                  },
                  {
                    "timestamp": "2024-08-15 10:15:00",
                    "sourceIP": "185.142.53.44",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'test_admin' from IP 185.142.53.44",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "41",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "22"
                  },
                  {
                    "timestamp": "2024-08-15 11:45:00",
                    "sourceIP": "203.0.113.54",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'prod_admin' from IP 203.0.113.54",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "89",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "23"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "198.51.100.34",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'legacy_admin' from IP 198.51.100.34",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "84",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "24"
                  },
                  {
                    "timestamp": "2024-08-15 13:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "80",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "25"
                  },
                  {
                    "timestamp": "2024-08-15 14:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "92",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "26"
                  },
                  {
                    "timestamp": "2024-08-15 15:30:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "77",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "27"
                  },
                  {
                    "timestamp": "2024-08-15 16:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "86",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "28"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "79",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "29"
                  },
                  {
                    "timestamp": "2024-08-15 18:30:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "83",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "30"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "30"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 4: HIGH, WITH AI ===
sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
sessionStorage.setItem('trialTotal', '30');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 4 - High AI';
this.parameters.blockTotal = '30';

console.log('Block 4 started');
}
                },
                "title": "Block 4 - High AI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n\n  \u002F* === AI RECOMMENDATION STYLES === *\u002F\n  .ai-box {\n    background: #e8f5e9;\n    padding: 12px 16px;\n    border-radius: 6px;\n    border-left: 4px solid #2e7d32;\n    margin-bottom: 15px;\n    text-align: center;\n  }\n  .ai-box .ai-label {\n    font-weight: 600;\n    color: #1a237e;\n  }\n  .ai-box .ai-recommendation {\n    color: #2e7d32;\n    font-weight: 700;\n    font-size: 18px;\n  }\n  .ai-box .ai-confidence {\n    color: #455a64;\n    font-size: 14px;\n  }\n  .ai-box .ai-note {\n    font-size: 13px;\n    color: #455a64;\n    font-style: italic;\n    margin-top: 4px;\n  }\n\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍 Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n      \u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- === AI RECOMMENDATION (Shows only if aiRecommendation exists) === --\u003E\n  \u003Cdiv class=\"ai-box\"\u003E\n    \u003Cspan class=\"ai-label\"\u003E🤖 AI Recommendation:\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-recommendation\"\u003E${ this.parameters.aiRecommendation }\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-confidence\"\u003E(Confidence: ${ this.parameters.aiConfidence || 'N\u002FA' }%)\u003C\u002Fspan\u003E\n    \u003Cdiv class=\"ai-note\"\u003EThis is an AI-generated suggestion. Please make your own decision.\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 10:45:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 11:15:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 14:00:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 14:32:00",
                    "sourceIP": "185.142.53.40",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'backup_user' from IP 185.142.53.40",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 15:10:00",
                    "sourceIP": "203.0.113.50",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'webadmin' from IP 203.0.113.50",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:45:00",
                    "sourceIP": "198.51.100.30",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sql_admin' from IP 198.51.100.30",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 18:05:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'wscript.exe' launched from Downloads folder",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 19:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Users\\admin\\Documents\\passwords.txt",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "10"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "10"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
sessionStorage.setItem('trialTotal', '10');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 1 - Low NoAI';
this.parameters.blockTotal = '10';

console.log('Block 1 started');
}
                },
                "title": "Block 1 - Low NoAI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n\u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 15:15:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "192.168.1.130",
                    "eventCode": "4624",
                    "alertDescription": "User 'kpatel' logged in from 192.168.1.130 at 4:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "10.0.20.80",
                    "eventCode": "4624",
                    "alertDescription": "User 'rkim' logged in from 10.0.20.80 at 5:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 08:45:00",
                    "sourceIP": "192.168.1.145",
                    "eventCode": "4624",
                    "alertDescription": "User 'sgupta' logged in from 192.168.1.145 at 8:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 10:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 13:15:00",
                    "sourceIP": "185.142.53.42",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'helpdesk' from IP 185.142.53.42",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 14:45:00",
                    "sourceIP": "203.0.113.52",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sysadmin' from IP 203.0.113.52",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "198.51.100.32",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'network_admin' from IP 198.51.100.32",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "185.142.53.43",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'security_audit' from IP 185.142.53.43",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 18:45:00",
                    "sourceIP": "203.0.113.53",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'db_admin' from IP 203.0.113.53",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "10"
                  },
                  {
                    "timestamp": "2024-08-15 19:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to ADMIN$ from 10.0.0.45 at 2:15 AM",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "11"
                  },
                  {
                    "timestamp": "2024-08-15 20:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\System32\\drivers\\etc\\hosts",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "12"
                  },
                  {
                    "timestamp": "2024-08-15 20:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'schtasks.exe' creating new scheduled task",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "13"
                  },
                  {
                    "timestamp": "2024-08-15 21:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to C$ from workstation at 3:30 AM",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "14"
                  },
                  {
                    "timestamp": "2024-08-15 22:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\ProgramData\\Microsoft\\Windows\\Start Menu",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "15"
                  },
                  {
                    "timestamp": "2024-08-15 23:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4648",
                    "alertDescription": "User 'Administrator' login from non-admin workstation",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "16"
                  },
                  {
                    "timestamp": "2024-08-15 23:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'mshta.exe' with suspicious URL parameter",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "17"
                  },
                  {
                    "timestamp": "2024-08-15 00:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to print$ from unknown IP",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "18"
                  },
                  {
                    "timestamp": "2024-08-15 01:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\Temp\\suspicious.exe",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "19"
                  },
                  {
                    "timestamp": "2024-08-15 02:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'rundll32.exe' executing from temp folder",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "20"
                  },
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "198.51.100.33",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'app_user' from IP 198.51.100.33",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "21"
                  },
                  {
                    "timestamp": "2024-08-15 10:15:00",
                    "sourceIP": "185.142.53.44",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'test_admin' from IP 185.142.53.44",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "22"
                  },
                  {
                    "timestamp": "2024-08-15 11:45:00",
                    "sourceIP": "203.0.113.54",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'prod_admin' from IP 203.0.113.54",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "23"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "198.51.100.34",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'legacy_admin' from IP 198.51.100.34",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "24"
                  },
                  {
                    "timestamp": "2024-08-15 13:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "25"
                  },
                  {
                    "timestamp": "2024-08-15 14:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "26"
                  },
                  {
                    "timestamp": "2024-08-15 15:30:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "27"
                  },
                  {
                    "timestamp": "2024-08-15 16:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "28"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "29"
                  },
                  {
                    "timestamp": "2024-08-15 18:30:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "30"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "30"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 3: HIGH, NO AI ===Block 3 - High NoAI
sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
sessionStorage.setItem('trialTotal', '30');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 3 - High NoAI';
this.parameters.blockTotal = '30';

console.log('Block 3 started');
}
                },
                "title": "Block 3 - High NoAI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n\u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              }
            ]
          },
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// Set the initial block for Version 3
sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
sessionStorage.setItem('trialTotal', '30');
sessionStorage.setItem('trialPosition', '0');
console.log('Version 3 started - Block 3 - High NoAI');
}
            },
            "title": "Version 3",
            "skip": "${ parameters.versionToRun != '3' }",
            "content": [
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 15:15:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "192.168.1.130",
                    "eventCode": "4624",
                    "alertDescription": "User 'kpatel' logged in from 192.168.1.130 at 4:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "10.0.20.80",
                    "eventCode": "4624",
                    "alertDescription": "User 'rkim' logged in from 10.0.20.80 at 5:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 08:45:00",
                    "sourceIP": "192.168.1.145",
                    "eventCode": "4624",
                    "alertDescription": "User 'sgupta' logged in from 192.168.1.145 at 8:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 10:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 13:15:00",
                    "sourceIP": "185.142.53.42",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'helpdesk' from IP 185.142.53.42",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 14:45:00",
                    "sourceIP": "203.0.113.52",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sysadmin' from IP 203.0.113.52",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "198.51.100.32",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'network_admin' from IP 198.51.100.32",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "185.142.53.43",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'security_audit' from IP 185.142.53.43",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 18:45:00",
                    "sourceIP": "203.0.113.53",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'db_admin' from IP 203.0.113.53",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "10"
                  },
                  {
                    "timestamp": "2024-08-15 19:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to ADMIN$ from 10.0.0.45 at 2:15 AM",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "11"
                  },
                  {
                    "timestamp": "2024-08-15 20:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\System32\\drivers\\etc\\hosts",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "12"
                  },
                  {
                    "timestamp": "2024-08-15 20:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'schtasks.exe' creating new scheduled task",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "13"
                  },
                  {
                    "timestamp": "2024-08-15 21:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to C$ from workstation at 3:30 AM",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "14"
                  },
                  {
                    "timestamp": "2024-08-15 22:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\ProgramData\\Microsoft\\Windows\\Start Menu",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "15"
                  },
                  {
                    "timestamp": "2024-08-15 23:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4648",
                    "alertDescription": "User 'Administrator' login from non-admin workstation",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "16"
                  },
                  {
                    "timestamp": "2024-08-15 23:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'mshta.exe' with suspicious URL parameter",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "17"
                  },
                  {
                    "timestamp": "2024-08-15 00:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to print$ from unknown IP",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "18"
                  },
                  {
                    "timestamp": "2024-08-15 01:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\Temp\\suspicious.exe",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "19"
                  },
                  {
                    "timestamp": "2024-08-15 02:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'rundll32.exe' executing from temp folder",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "20"
                  },
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "198.51.100.33",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'app_user' from IP 198.51.100.33",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "21"
                  },
                  {
                    "timestamp": "2024-08-15 10:15:00",
                    "sourceIP": "185.142.53.44",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'test_admin' from IP 185.142.53.44",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "22"
                  },
                  {
                    "timestamp": "2024-08-15 11:45:00",
                    "sourceIP": "203.0.113.54",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'prod_admin' from IP 203.0.113.54",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "23"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "198.51.100.34",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'legacy_admin' from IP 198.51.100.34",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "24"
                  },
                  {
                    "timestamp": "2024-08-15 13:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "25"
                  },
                  {
                    "timestamp": "2024-08-15 14:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "26"
                  },
                  {
                    "timestamp": "2024-08-15 15:30:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "27"
                  },
                  {
                    "timestamp": "2024-08-15 16:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "28"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "29"
                  },
                  {
                    "timestamp": "2024-08-15 18:30:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "30"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "30"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 3: HIGH, NO AI ===
sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
sessionStorage.setItem('trialTotal', '30');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 3 - High NoAI';
this.parameters.blockTotal = '30';

console.log('Block 3 started');
}
                },
                "title": "Block 3 - High NoAI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n\u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 10:45:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 11:15:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 14:00:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 14:32:00",
                    "sourceIP": "185.142.53.40",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'backup_user' from IP 185.142.53.40",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 15:10:00",
                    "sourceIP": "203.0.113.50",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'webadmin' from IP 203.0.113.50",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:45:00",
                    "sourceIP": "198.51.100.30",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sql_admin' from IP 198.51.100.30",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 18:05:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'wscript.exe' launched from Downloads folder",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 19:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Users\\admin\\Documents\\passwords.txt",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "10"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "10"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
sessionStorage.setItem('trialTotal', '10');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 1 - Low NoAI';
this.parameters.blockTotal = '10';

console.log('Block 1 started');
}
                },
                "title": "Block 1 - Low NoAI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n\u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 08:30:00",
                    "sourceIP": "10.0.20.65",
                    "eventCode": "4624",
                    "alertDescription": "User 'hlee' logged in from 10.0.20.65 at 8:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "85",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 09:45:00",
                    "sourceIP": "192.168.1.135",
                    "eventCode": "4624",
                    "alertDescription": "User 'twong' logged in from 192.168.1.135 at 9:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "90",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 11:00:00",
                    "sourceIP": "10.0.20.70",
                    "eventCode": "4624",
                    "alertDescription": "User 'mkim' logged in from 10.0.20.70 at 11:00 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "78",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 12:15:00",
                    "sourceIP": "192.168.1.140",
                    "eventCode": "4624",
                    "alertDescription": "User 'jchen' logged in from 192.168.1.140 at 12:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "82",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 13:45:00",
                    "sourceIP": "10.0.20.75",
                    "eventCode": "4624",
                    "alertDescription": "User 'alin' logged in from 10.0.20.75 at 1:45 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "88",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 14:32:00",
                    "sourceIP": "185.142.53.41",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'domain_admin' from IP 185.142.53.41",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "92",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 15:10:00",
                    "sourceIP": "203.0.113.51",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'service_acc' from IP 203.0.113.51",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "87",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:45:00",
                    "sourceIP": "198.51.100.31",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'it_support' from IP 198.51.100.31",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "45",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 18:05:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'reg.exe' modifying Windows Defender settings",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "82",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 19:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to IPC$ from external IP 45.33.22.11",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "79",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "10"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "10"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 2: LOW, WITH AI ===
sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
sessionStorage.setItem('trialTotal', '10');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 2 - Low AI';
this.parameters.blockTotal = '10';

console.log('Block 2 started');
}
                },
                "title": "Block 2 - Low AI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n\n  \u002F* === AI RECOMMENDATION STYLES === *\u002F\n  .ai-box {\n    background: #e8f5e9;\n    padding: 12px 16px;\n    border-radius: 6px;\n    border-left: 4px solid #2e7d32;\n    margin-bottom: 15px;\n    text-align: center;\n  }\n  .ai-box .ai-label {\n    font-weight: 600;\n    color: #1a237e;\n  }\n  .ai-box .ai-recommendation {\n    color: #2e7d32;\n    font-weight: 700;\n    font-size: 18px;\n  }\n  .ai-box .ai-confidence {\n    color: #455a64;\n    font-size: 14px;\n  }\n  .ai-box .ai-note {\n    font-size: 13px;\n    color: #455a64;\n    font-style: italic;\n    margin-top: 4px;\n  }\n\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍 Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n      \u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- === AI RECOMMENDATION (Shows only if aiRecommendation exists) === --\u003E\n  \u003Cdiv class=\"ai-box\"\u003E\n    \u003Cspan class=\"ai-label\"\u003E🤖 AI Recommendation:\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-recommendation\"\u003E${ this.parameters.aiRecommendation }\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-confidence\"\u003E(Confidence: ${ this.parameters.aiConfidence || 'N\u002FA' }%)\u003C\u002Fspan\u003E\n    \u003Cdiv class=\"ai-note\"\u003EThis is an AI-generated suggestion. Please make your own decision.\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 15:15:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "84",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "192.168.1.130",
                    "eventCode": "4624",
                    "alertDescription": "User 'kpatel' logged in from 192.168.1.130 at 4:00 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "91",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "10.0.20.80",
                    "eventCode": "4624",
                    "alertDescription": "User 'rkim' logged in from 10.0.20.80 at 5:30 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "77",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 08:45:00",
                    "sourceIP": "192.168.1.145",
                    "eventCode": "4624",
                    "alertDescription": "User 'sgupta' logged in from 192.168.1.145 at 8:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "83",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 10:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "89",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 13:15:00",
                    "sourceIP": "185.142.53.42",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'helpdesk' from IP 185.142.53.42",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "93",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 14:45:00",
                    "sourceIP": "203.0.113.52",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sysadmin' from IP 203.0.113.52",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "86",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "198.51.100.32",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'network_admin' from IP 198.51.100.32",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "42",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "185.142.53.43",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'security_audit' from IP 185.142.53.43",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "81",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 18:45:00",
                    "sourceIP": "203.0.113.53",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'db_admin' from IP 203.0.113.53",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "88",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "10"
                  },
                  {
                    "timestamp": "2024-08-15 19:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to ADMIN$ from 10.0.0.45 at 2:15 AM",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "80",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "11"
                  },
                  {
                    "timestamp": "2024-08-15 20:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\System32\\drivers\\etc\\hosts",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "76",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "12"
                  },
                  {
                    "timestamp": "2024-08-15 20:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'schtasks.exe' creating new scheduled task",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "85",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "13"
                  },
                  {
                    "timestamp": "2024-08-15 21:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to C$ from workstation at 3:30 AM",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "38",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "14"
                  },
                  {
                    "timestamp": "2024-08-15 22:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\ProgramData\\Microsoft\\Windows\\Start Menu",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "75",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "15"
                  },
                  {
                    "timestamp": "2024-08-15 23:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4648",
                    "alertDescription": "User 'Administrator' login from non-admin workstation",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "90",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "16"
                  },
                  {
                    "timestamp": "2024-08-15 23:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'mshta.exe' with suspicious URL parameter",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "87",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "17"
                  },
                  {
                    "timestamp": "2024-08-15 00:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to print$ from unknown IP",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "79",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "18"
                  },
                  {
                    "timestamp": "2024-08-15 01:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\Temp\\suspicious.exe",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "82",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "19"
                  },
                  {
                    "timestamp": "2024-08-15 02:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'rundll32.exe' executing from temp folder",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "78",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "20"
                  },
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "198.51.100.33",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'app_user' from IP 198.51.100.33",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "85",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "21"
                  },
                  {
                    "timestamp": "2024-08-15 10:15:00",
                    "sourceIP": "185.142.53.44",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'test_admin' from IP 185.142.53.44",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "41",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "22"
                  },
                  {
                    "timestamp": "2024-08-15 11:45:00",
                    "sourceIP": "203.0.113.54",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'prod_admin' from IP 203.0.113.54",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "89",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "23"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "198.51.100.34",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'legacy_admin' from IP 198.51.100.34",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "84",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "24"
                  },
                  {
                    "timestamp": "2024-08-15 13:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "80",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "25"
                  },
                  {
                    "timestamp": "2024-08-15 14:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "92",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "26"
                  },
                  {
                    "timestamp": "2024-08-15 15:30:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "77",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "27"
                  },
                  {
                    "timestamp": "2024-08-15 16:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "86",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "28"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "79",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "29"
                  },
                  {
                    "timestamp": "2024-08-15 18:30:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "83",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "30"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "30"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 4: HIGH, WITH AI ===
sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
sessionStorage.setItem('trialTotal', '30');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 4 - High AI';
this.parameters.blockTotal = '30';

console.log('Block 4 started');
}
                },
                "title": "Block 4 - High AI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n\n  \u002F* === AI RECOMMENDATION STYLES === *\u002F\n  .ai-box {\n    background: #e8f5e9;\n    padding: 12px 16px;\n    border-radius: 6px;\n    border-left: 4px solid #2e7d32;\n    margin-bottom: 15px;\n    text-align: center;\n  }\n  .ai-box .ai-label {\n    font-weight: 600;\n    color: #1a237e;\n  }\n  .ai-box .ai-recommendation {\n    color: #2e7d32;\n    font-weight: 700;\n    font-size: 18px;\n  }\n  .ai-box .ai-confidence {\n    color: #455a64;\n    font-size: 14px;\n  }\n  .ai-box .ai-note {\n    font-size: 13px;\n    color: #455a64;\n    font-style: italic;\n    margin-top: 4px;\n  }\n\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍 Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n      \u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- === AI RECOMMENDATION (Shows only if aiRecommendation exists) === --\u003E\n  \u003Cdiv class=\"ai-box\"\u003E\n    \u003Cspan class=\"ai-label\"\u003E🤖 AI Recommendation:\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-recommendation\"\u003E${ this.parameters.aiRecommendation }\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-confidence\"\u003E(Confidence: ${ this.parameters.aiConfidence || 'N\u002FA' }%)\u003C\u002Fspan\u003E\n    \u003Cdiv class=\"ai-note\"\u003EThis is an AI-generated suggestion. Please make your own decision.\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              }
            ]
          },
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// === BLOCK 4: HIGH, WITH AI ===
sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
sessionStorage.setItem('trialTotal', '30');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS
console.log('Block 4 started');
}
            },
            "title": "Version 4",
            "skip": "${ parameters.versionToRun != '4' }",
            "content": [
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 15:15:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "84",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "192.168.1.130",
                    "eventCode": "4624",
                    "alertDescription": "User 'kpatel' logged in from 192.168.1.130 at 4:00 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "91",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "10.0.20.80",
                    "eventCode": "4624",
                    "alertDescription": "User 'rkim' logged in from 10.0.20.80 at 5:30 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "77",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 08:45:00",
                    "sourceIP": "192.168.1.145",
                    "eventCode": "4624",
                    "alertDescription": "User 'sgupta' logged in from 192.168.1.145 at 8:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "83",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 10:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "89",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 13:15:00",
                    "sourceIP": "185.142.53.42",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'helpdesk' from IP 185.142.53.42",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "93",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 14:45:00",
                    "sourceIP": "203.0.113.52",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sysadmin' from IP 203.0.113.52",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "86",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "198.51.100.32",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'network_admin' from IP 198.51.100.32",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "42",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "185.142.53.43",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'security_audit' from IP 185.142.53.43",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "81",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 18:45:00",
                    "sourceIP": "203.0.113.53",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'db_admin' from IP 203.0.113.53",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "88",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "10"
                  },
                  {
                    "timestamp": "2024-08-15 19:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to ADMIN$ from 10.0.0.45 at 2:15 AM",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "80",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "11"
                  },
                  {
                    "timestamp": "2024-08-15 20:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\System32\\drivers\\etc\\hosts",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "76",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "12"
                  },
                  {
                    "timestamp": "2024-08-15 20:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'schtasks.exe' creating new scheduled task",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "85",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "13"
                  },
                  {
                    "timestamp": "2024-08-15 21:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to C$ from workstation at 3:30 AM",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "38",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "14"
                  },
                  {
                    "timestamp": "2024-08-15 22:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\ProgramData\\Microsoft\\Windows\\Start Menu",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "75",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "15"
                  },
                  {
                    "timestamp": "2024-08-15 23:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4648",
                    "alertDescription": "User 'Administrator' login from non-admin workstation",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "90",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "16"
                  },
                  {
                    "timestamp": "2024-08-15 23:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'mshta.exe' with suspicious URL parameter",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "87",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "17"
                  },
                  {
                    "timestamp": "2024-08-15 00:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to print$ from unknown IP",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "79",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "18"
                  },
                  {
                    "timestamp": "2024-08-15 01:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\Temp\\suspicious.exe",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "82",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "19"
                  },
                  {
                    "timestamp": "2024-08-15 02:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'rundll32.exe' executing from temp folder",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "78",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "20"
                  },
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "198.51.100.33",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'app_user' from IP 198.51.100.33",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "85",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "21"
                  },
                  {
                    "timestamp": "2024-08-15 10:15:00",
                    "sourceIP": "185.142.53.44",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'test_admin' from IP 185.142.53.44",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "41",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "22"
                  },
                  {
                    "timestamp": "2024-08-15 11:45:00",
                    "sourceIP": "203.0.113.54",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'prod_admin' from IP 203.0.113.54",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "89",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "23"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "198.51.100.34",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'legacy_admin' from IP 198.51.100.34",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "84",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "24"
                  },
                  {
                    "timestamp": "2024-08-15 13:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "80",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "25"
                  },
                  {
                    "timestamp": "2024-08-15 14:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "92",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "26"
                  },
                  {
                    "timestamp": "2024-08-15 15:30:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "77",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "27"
                  },
                  {
                    "timestamp": "2024-08-15 16:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "86",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "28"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "79",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "29"
                  },
                  {
                    "timestamp": "2024-08-15 18:30:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "83",
                    "blockName": "Block 4 - High AI",
                    "blockTotal": "30",
                    "position": "30"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "30"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 4: HIGH, WITH AI ===
sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
sessionStorage.setItem('trialTotal', '30');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 4 - High AI';
this.parameters.blockTotal = '30';

console.log('Block 4 started');
}
                },
                "title": "Block 4 - High AI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n\n  \u002F* === AI RECOMMENDATION STYLES === *\u002F\n  .ai-box {\n    background: #e8f5e9;\n    padding: 12px 16px;\n    border-radius: 6px;\n    border-left: 4px solid #2e7d32;\n    margin-bottom: 15px;\n    text-align: center;\n  }\n  .ai-box .ai-label {\n    font-weight: 600;\n    color: #1a237e;\n  }\n  .ai-box .ai-recommendation {\n    color: #2e7d32;\n    font-weight: 700;\n    font-size: 18px;\n  }\n  .ai-box .ai-confidence {\n    color: #455a64;\n    font-size: 14px;\n  }\n  .ai-box .ai-note {\n    font-size: 13px;\n    color: #455a64;\n    font-style: italic;\n    margin-top: 4px;\n  }\n\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍 Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n      \u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- === AI RECOMMENDATION (Shows only if aiRecommendation exists) === --\u003E\n  \u003Cdiv class=\"ai-box\"\u003E\n    \u003Cspan class=\"ai-label\"\u003E🤖 AI Recommendation:\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-recommendation\"\u003E${ this.parameters.aiRecommendation }\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-confidence\"\u003E(Confidence: ${ this.parameters.aiConfidence || 'N\u002FA' }%)\u003C\u002Fspan\u003E\n    \u003Cdiv class=\"ai-note\"\u003EThis is an AI-generated suggestion. Please make your own decision.\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 15:15:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "192.168.1.130",
                    "eventCode": "4624",
                    "alertDescription": "User 'kpatel' logged in from 192.168.1.130 at 4:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "10.0.20.80",
                    "eventCode": "4624",
                    "alertDescription": "User 'rkim' logged in from 10.0.20.80 at 5:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 08:45:00",
                    "sourceIP": "192.168.1.145",
                    "eventCode": "4624",
                    "alertDescription": "User 'sgupta' logged in from 192.168.1.145 at 8:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 10:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 13:15:00",
                    "sourceIP": "185.142.53.42",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'helpdesk' from IP 185.142.53.42",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 14:45:00",
                    "sourceIP": "203.0.113.52",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sysadmin' from IP 203.0.113.52",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:00:00",
                    "sourceIP": "198.51.100.32",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'network_admin' from IP 198.51.100.32",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "185.142.53.43",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'security_audit' from IP 185.142.53.43",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 18:45:00",
                    "sourceIP": "203.0.113.53",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'db_admin' from IP 203.0.113.53",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "10"
                  },
                  {
                    "timestamp": "2024-08-15 19:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to ADMIN$ from 10.0.0.45 at 2:15 AM",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "11"
                  },
                  {
                    "timestamp": "2024-08-15 20:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\System32\\drivers\\etc\\hosts",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "12"
                  },
                  {
                    "timestamp": "2024-08-15 20:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'schtasks.exe' creating new scheduled task",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "13"
                  },
                  {
                    "timestamp": "2024-08-15 21:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to C$ from workstation at 3:30 AM",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "14"
                  },
                  {
                    "timestamp": "2024-08-15 22:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\ProgramData\\Microsoft\\Windows\\Start Menu",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "15"
                  },
                  {
                    "timestamp": "2024-08-15 23:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4648",
                    "alertDescription": "User 'Administrator' login from non-admin workstation",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "16"
                  },
                  {
                    "timestamp": "2024-08-15 23:45:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'mshta.exe' with suspicious URL parameter",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "17"
                  },
                  {
                    "timestamp": "2024-08-15 00:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to print$ from unknown IP",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "18"
                  },
                  {
                    "timestamp": "2024-08-15 01:15:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Windows\\Temp\\suspicious.exe",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "19"
                  },
                  {
                    "timestamp": "2024-08-15 02:00:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'rundll32.exe' executing from temp folder",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "20"
                  },
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "198.51.100.33",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'app_user' from IP 198.51.100.33",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "21"
                  },
                  {
                    "timestamp": "2024-08-15 10:15:00",
                    "sourceIP": "185.142.53.44",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'test_admin' from IP 185.142.53.44",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "22"
                  },
                  {
                    "timestamp": "2024-08-15 11:45:00",
                    "sourceIP": "203.0.113.54",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'prod_admin' from IP 203.0.113.54",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "23"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "198.51.100.34",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'legacy_admin' from IP 198.51.100.34",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "24"
                  },
                  {
                    "timestamp": "2024-08-15 13:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "25"
                  },
                  {
                    "timestamp": "2024-08-15 14:30:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "26"
                  },
                  {
                    "timestamp": "2024-08-15 15:30:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "27"
                  },
                  {
                    "timestamp": "2024-08-15 16:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "28"
                  },
                  {
                    "timestamp": "2024-08-15 17:30:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "29"
                  },
                  {
                    "timestamp": "2024-08-15 18:30:00",
                    "sourceIP": "10.0.20.60",
                    "eventCode": "4624",
                    "alertDescription": "User 'ndavis' logged in from 10.0.20.60 at 3:15 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 3 - High NoAI",
                    "blockTotal": "30",
                    "position": "30"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "30"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 3: HIGH, NO AI ===
sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
sessionStorage.setItem('trialTotal', '30');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 3 - High NoAI';
this.parameters.blockTotal = '30';

console.log('Block 3 started');
}
                },
                "title": "Block 3 - High NoAI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n\u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 08:30:00",
                    "sourceIP": "10.0.20.65",
                    "eventCode": "4624",
                    "alertDescription": "User 'hlee' logged in from 10.0.20.65 at 8:30 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "85",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 09:45:00",
                    "sourceIP": "192.168.1.135",
                    "eventCode": "4624",
                    "alertDescription": "User 'twong' logged in from 192.168.1.135 at 9:45 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "90",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 11:00:00",
                    "sourceIP": "10.0.20.70",
                    "eventCode": "4624",
                    "alertDescription": "User 'mkim' logged in from 10.0.20.70 at 11:00 AM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "78",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 12:15:00",
                    "sourceIP": "192.168.1.140",
                    "eventCode": "4624",
                    "alertDescription": "User 'jchen' logged in from 192.168.1.140 at 12:15 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "82",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 13:45:00",
                    "sourceIP": "10.0.20.75",
                    "eventCode": "4624",
                    "alertDescription": "User 'alin' logged in from 10.0.20.75 at 1:45 PM",
                    "correctAnswer": "Benign",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "88",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 14:32:00",
                    "sourceIP": "185.142.53.41",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'domain_admin' from IP 185.142.53.41",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "92",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 15:10:00",
                    "sourceIP": "203.0.113.51",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'service_acc' from IP 203.0.113.51",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "87",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:45:00",
                    "sourceIP": "198.51.100.31",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'it_support' from IP 198.51.100.31",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Benign",
                    "aiConfidence": "45",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 18:05:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'reg.exe' modifying Windows Defender settings",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "82",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 19:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "5145",
                    "alertDescription": "Network share access to IPC$ from external IP 45.33.22.11",
                    "correctAnswer": "Malicious",
                    "aiRecommendation": "Malicious",
                    "aiConfidence": "79",
                    "blockName": "Block 2 - Low AI",
                    "blockTotal": "10",
                    "position": "10"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "10"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === BLOCK 2: LOW, WITH AI ===
sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
sessionStorage.setItem('trialTotal', '10');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS

this.parameters.blockName = 'Block 2 - Low AI';
this.parameters.blockTotal = '10';

console.log('Block 2 started');
}
                },
                "title": "Block 2 - Low AI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n\n  \u002F* === AI RECOMMENDATION STYLES === *\u002F\n  .ai-box {\n    background: #e8f5e9;\n    padding: 12px 16px;\n    border-radius: 6px;\n    border-left: 4px solid #2e7d32;\n    margin-bottom: 15px;\n    text-align: center;\n  }\n  .ai-box .ai-label {\n    font-weight: 600;\n    color: #1a237e;\n  }\n  .ai-box .ai-recommendation {\n    color: #2e7d32;\n    font-weight: 700;\n    font-size: 18px;\n  }\n  .ai-box .ai-confidence {\n    color: #455a64;\n    font-size: 14px;\n  }\n  .ai-box .ai-note {\n    font-size: 13px;\n    color: #455a64;\n    font-style: italic;\n    margin-top: 4px;\n  }\n\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍 Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n      \u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- === AI RECOMMENDATION (Shows only if aiRecommendation exists) === --\u003E\n  \u003Cdiv class=\"ai-box\"\u003E\n    \u003Cspan class=\"ai-label\"\u003E🤖 AI Recommendation:\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-recommendation\"\u003E${ this.parameters.aiRecommendation }\u003C\u002Fspan\u003E\n    \u003Cspan class=\"ai-confidence\"\u003E(Confidence: ${ this.parameters.aiConfidence || 'N\u002FA' }%)\u003C\u002Fspan\u003E\n    \u003Cdiv class=\"ai-note\"\u003EThis is an AI-generated suggestion. Please make your own decision.\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "timestamp": "2024-08-15 09:30:00",
                    "sourceIP": "192.168.1.110",
                    "eventCode": "4624",
                    "alertDescription": "User 'rpatel' logged in from 192.168.1.110 at 9:30 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "1"
                  },
                  {
                    "timestamp": "2024-08-15 10:45:00",
                    "sourceIP": "10.0.20.50",
                    "eventCode": "4624",
                    "alertDescription": "User 'slee' logged in from 10.0.20.50 at 10:45 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "2"
                  },
                  {
                    "timestamp": "2024-08-15 11:15:00",
                    "sourceIP": "192.168.1.115",
                    "eventCode": "4624",
                    "alertDescription": "User 'mchen' logged in from 192.168.1.115 at 11:15 AM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "3"
                  },
                  {
                    "timestamp": "2024-08-15 12:30:00",
                    "sourceIP": "10.0.20.55",
                    "eventCode": "4624",
                    "alertDescription": "User 'agarcia' logged in from 10.0.20.55 at 12:30 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "4"
                  },
                  {
                    "timestamp": "2024-08-15 14:00:00",
                    "sourceIP": "192.168.1.125",
                    "eventCode": "4624",
                    "alertDescription": "User 'jwilson' logged in from 192.168.1.125 at 2:00 PM",
                    "correctAnswer": "Benign",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "5"
                  },
                  {
                    "timestamp": "2024-08-15 14:32:00",
                    "sourceIP": "185.142.53.40",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'backup_user' from IP 185.142.53.40",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "6"
                  },
                  {
                    "timestamp": "2024-08-15 15:10:00",
                    "sourceIP": "203.0.113.50",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'webadmin' from IP 203.0.113.50",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "7"
                  },
                  {
                    "timestamp": "2024-08-15 16:45:00",
                    "sourceIP": "198.51.100.30",
                    "eventCode": "4625",
                    "alertDescription": "Failed login for 'sql_admin' from IP 198.51.100.30",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "8"
                  },
                  {
                    "timestamp": "2024-08-15 18:05:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4688",
                    "alertDescription": "Process 'wscript.exe' launched from Downloads folder",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "9"
                  },
                  {
                    "timestamp": "2024-08-15 19:30:00",
                    "sourceIP": "10.0.0.45",
                    "eventCode": "4663",
                    "alertDescription": "File access to C:\\Users\\admin\\Documents\\passwords.txt",
                    "correctAnswer": "Malicious",
                    "blockName": "Block 1 - Low NoAI",
                    "blockTotal": "10",
                    "position": "10"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "10"
                },
                "files": {
                  "practice_data.csv": "embedded\u002F9f0947ade9ea2814571708c4f41ebcd49616dd6a923e02f0b4008f7010cd78af.csv"
                },
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
sessionStorage.setItem('trialTotal', '10');
sessionStorage.setItem('trialPosition', '0');  // ← ADD THIS


this.parameters.blockName = 'Block 1 - Low NoAI';
this.parameters.blockTotal = '10';

console.log('Block 1 started');
}
                },
                "title": "Block 1 - Low NoAI",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Sequence",
                  "content": [
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN ALERT STYLES === *\u002F\n  .alert-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .alert-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 10px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .progress-container {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 16px;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 10px 15px;\n    border-radius: 6px;\n    border: 1px solid #c5cae9;\n    font-weight: 600;\n  }\n  .progress-container .block-name {\n    color: #0d47a1;\n  }\n  .progress-container .count {\n    color: #1a237e;\n    font-size: 18px;\n  }\n  .progress-container .total {\n    color: #455a64;\n  }\n  .progress-bar-container {\n    width: 100%;\n    background-color: #e0e0e0;\n    border-radius: 8px;\n    margin-top: 8px;\n    overflow: hidden;\n    height: 8px;\n  }\n  .progress-bar {\n    height: 100%;\n    background-color: #1a237e;\n    border-radius: 8px;\n    width: 0%;\n    transition: width 0.3s ease;\n  }\n  .alert-details {\n    background: #f5f7fa;\n    padding: 15px 20px;\n    border-radius: 6px;\n    margin-bottom: 20px;\n    font-size: 15px;\n    color: #37474f;\n    border-left: 4px solid #1a237e;\n  }\n  .alert-details p {\n    margin: 5px 0;\n  }\n  .alert-question {\n    font-size: 18px;\n    font-weight: 600;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .response-options {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-bottom: 20px;\n  }\n  .response-options label {\n    font-size: 16px;\n    font-weight: 500;\n    color: #37474f;\n    cursor: pointer;\n  }\n  .response-options input[type=\"radio\"] {\n    width: 18px;\n    height: 18px;\n    accent-color: #1a237e;\n    margin-right: 8px;\n    cursor: pointer;\n  }\n  .submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .alert-container {\n      padding: 15px;\n    }\n    .response-options {\n      flex-direction: column;\n      align-items: center;\n      gap: 10px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"alert-container\"\u003E\n\n  \u003C!-- ALERT TITLE --\u003E\n  \u003Ch1 class=\"alert-title\" id=\"alertTitle\"\u003E🔍Alert \u003Cspan id=\"alertNumber\"\u003E-\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\n  \u003C!-- === PROGRESS INDICATOR === --\u003E\n  \u003Cdiv class=\"progress-container\"\u003E\n    \u003Cdiv\u003E\n      📊 \u003Cspan class=\"block-name\" id=\"blockNameDisplay\"\u003E${ this.parameters.blockName }\u003C\u002Fspan\u003E:\n\u003Cspan class=\"count\" id=\"currentPosition\"\u003E${ this.parameters.position }\u003C\u002Fspan\u003E \u002F \u003Cspan class=\"total\" id=\"totalTrials\"\u003E${ this.parameters.blockTotal }\u003C\u002Fspan\u003E alerts\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"progress-bar-container\"\u003E\n      \u003Cdiv class=\"progress-bar\" id=\"progressBar\" style=\"width: 0%;\"\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003C!-- ALERT DETAILS --\u003E\n  \u003Cdiv class=\"alert-details\"\u003E\n    \u003Cp\u003E\u003Cstrong\u003ETimestamp:\u003C\u002Fstrong\u003E ${ this.parameters.timestamp }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESource IP:\u003C\u002Fstrong\u003E ${ this.parameters.sourceIP }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EEvent Code:\u003C\u002Fstrong\u003E ${ this.parameters.eventCode }\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EDescription:\u003C\u002Fstrong\u003E ${ this.parameters.alertDescription }\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"alert-question\"\u003E\n    Is this alert \u003Cstrong\u003EMALICIOUS\u003C\u002Fstrong\u003E or \u003Cstrong\u003EBENIGN\u003C\u002Fstrong\u003E?\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"alertForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \n    \u003Cdiv class=\"response-options\"\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Malicious\" required\u003E\n        Malicious\n      \u003C\u002Flabel\u003E\n      \u003Clabel\u003E\n        \u003Cinput type=\"radio\" name=\"response\" value=\"Benign\" required\u003E\n        Benign\n      \u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"submit-btn\"\u003E✓ Submit Answer\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n  \u003C!-- HIDDEN ELEMENT TO STORE THE CORRECT ANSWER --\u003E\n  \u003Cinput type=\"hidden\" id=\"correctAnswerField\" value=\"${ this.parameters.correctAnswer }\"\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
var self = this;
var blockName = self.parameters.blockName;
var total = parseInt(self.parameters.blockTotal);
var position = parseInt(self.parameters.position);

sessionStorage.setItem('currentBlock', blockName);   // keep if you use this for data export
sessionStorage.setItem('trialTotal', total);

var alertNumber = document.getElementById('alertNumber');
if (alertNumber) alertNumber.textContent = position;

var positionElement = document.getElementById('currentPosition');
var totalElement = document.getElementById('totalTrials');
var blockNameElement = document.getElementById('blockNameDisplay');
var progressBar = document.getElementById('progressBar');

if (positionElement) positionElement.textContent = position;
if (totalElement) totalElement.textContent = total;
if (blockNameElement) blockNameElement.textContent = blockName;

if (progressBar && total > 0) {
    var percentage = (position / total) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';
}

console.log('Progress:', blockName, position, 'of', total);

  // === STORE RESPONSE ===
  document.getElementById('alertForm').addEventListener('submit', function(e) {
    var selected = document.querySelector('input[name="response"]:checked');
    if (selected) {
      sessionStorage.setItem('participantResponse', selected.value);
      
      var correctAnswerField = document.getElementById('correctAnswerField');
      var correctAnswer = correctAnswerField ? correctAnswerField.value : 'Malicious';
      sessionStorage.setItem('correctAnswer', correctAnswer);
      
      console.log('Response stored:', selected.value);
      console.log('Correct answer stored:', correctAnswer);
    } else {
      e.preventDefault();
      alert('Please select either Malicious or Benign.');
    }
  });
}
                      },
                      "title": "Main Alert"
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cstyle\u003E\n  \u002F* === MAIN FEEDBACK STYLES === *\u002F\n  .feedback-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .feedback-title {\n    font-size: 22px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .feedback-result {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 30px 0 15px 0;\n  }\n  .feedback-result.correct {\n    color: #2e7d32;\n  }\n  .feedback-result.incorrect {\n    color: #c62828;\n  }\n  .feedback-details {\n    font-size: 16px;\n    color: #37474f;\n    margin-bottom: 20px;\n  }\n  .feedback-details p {\n    margin: 5px 0;\n  }\n  .next-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .next-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .feedback-container {\n      padding: 15px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"feedback-container\"\u003E\n\n  \u003Ch1 class=\"feedback-title\"\u003E📊 Feedback\u003C\u002Fh1\u003E\n\n  \u003Cdiv id=\"feedbackContent\"\u003E\n    \u003Cdiv id=\"resultDisplay\" class=\"feedback-result\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv id=\"detailsDisplay\" class=\"feedback-details\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cform id=\"feedbackForm\"\u003E\n    \u003Cinput name=\"variable\" hidden\u003E\n    \u003Cbutton type=\"submit\" class=\"next-btn\"\u003E➡ Next\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "run": function anonymous(
) {
  // === RETRIEVE AND DISPLAY FEEDBACK ===
  (function() {
    var participantResponse = sessionStorage.getItem('participantResponse');
    var correctAnswer = sessionStorage.getItem('correctAnswer');
    
    if (!correctAnswer) {
      correctAnswer = 'Malicious';
      console.warn('Correct answer not found. Using fallback.');
    }
    
    if (participantResponse) {
      participantResponse = participantResponse.trim();
    } else {
      participantResponse = 'Not provided';
    }
    
    var isCorrect = (participantResponse === correctAnswer);
    
    var resultDiv = document.getElementById('resultDisplay');
    var detailsDiv = document.getElementById('detailsDisplay');
    
    if (isCorrect) {
      resultDiv.className = 'feedback-result correct';
      resultDiv.textContent = '✅ Correct!';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #2e7d32; font-weight: 500;">Well done!</p>
      `;
    } else {
      resultDiv.className = 'feedback-result incorrect';
      resultDiv.textContent = '❌ Incorrect';
      detailsDiv.innerHTML = `
        <p><strong>Your answer:</strong> ${participantResponse}</p>
        <p><strong>Correct answer:</strong> ${correctAnswer}</p>
        <p style="color: #c62828; font-weight: 500;">Remember to carefully read each alert before deciding.</p>
      `;
    }
    
    console.log('Feedback displayed:', { participantResponse, correctAnswer, isCorrect });
  })();

  // === RESET TRIAL COUNT AFTER BLOCK ===
  document.getElementById('feedbackForm').addEventListener('submit', function() {
    sessionStorage.removeItem('mainTrialCount');
    sessionStorage.removeItem('correctAnswer');
    console.log('Block complete. Trial count reset.');
  });
}
                      },
                      "title": "Main Feedback"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Form",
                "content": "\u003Cstyle\u003E\n  \u002F* === NASA-TLX STYLES === *\u002F\n  .tlx-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  }\n  .tlx-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    text-align: center;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .tlx-subtitle {\n    font-size: 16px;\n    color: #37474f;\n    text-align: center;\n    margin-bottom: 25px;\n  }\n  .tlx-item {\n    margin-bottom: 25px;\n    padding: 15px 20px;\n    background: #f5f7fa;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n  }\n  .tlx-item label {\n    display: block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a237e;\n    margin-bottom: 10px;\n  }\n  .tlx-item .scale-labels {\n    display: flex;\n    justify-content: space-between;\n    font-size: 13px;\n    color: #455a64;\n    margin-top: 4px;\n  }\n  .tlx-item input[type=\"range\"] {\n    width: 100%;\n    height: 6px;\n    -webkit-appearance: none;\n    background: #c5cae9;\n    border-radius: 3px;\n    outline: none;\n  }\n  .tlx-item input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item input[type=\"range\"]::-moz-range-thumb {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: #1a237e;\n    cursor: pointer;\n  }\n  .tlx-item .slider-value {\n    float: right;\n    font-weight: 600;\n    color: #1a237e;\n    background: #e8eaf6;\n    padding: 2px 12px;\n    border-radius: 12px;\n    font-size: 14px;\n  }\n  .tlx-submit-btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    background: #1a237e;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n  }\n  .tlx-submit-btn:hover {\n    background: #0d47a1;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  @media (max-width: 600px) {\n    .tlx-container {\n      padding: 15px;\n    }\n    .tlx-title {\n      font-size: 20px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"tlx-container\"\u003E\n\n  \u003Ch1 class=\"tlx-title\"\u003E📊 NASA-TLX Questionnaire \u003C\u002Fh1\u003E\n  \u003Cp class=\"tlx-subtitle\"\u003EPlease rate your experience during the previous block of alerts.\u003C\u002Fp\u003E\n\n  \u003Cform id=\"tlxForm\"\u003E\n\n    \u003C!-- Item 1: Mental Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Mental Demand\n        \u003Cspan class=\"slider-value\" id=\"mentalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"mentalDemand\" name=\"mentalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('mentalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 2: Physical Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Physical Demand\n        \u003Cspan class=\"slider-value\" id=\"physicalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"physicalDemand\" name=\"physicalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('physicalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 3: Temporal Demand --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Temporal Demand\n        \u003Cspan class=\"slider-value\" id=\"temporalValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"temporalDemand\" name=\"temporalDemand\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('temporalValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 4: Performance --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Performance\n        \u003Cspan class=\"slider-value\" id=\"performanceValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"performance\" name=\"performance\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('performanceValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003EGood\u003C\u002Fspan\u003E\n        \u003Cspan\u003EPoor\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 5: Effort --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Effort\n        \u003Cspan class=\"slider-value\" id=\"effortValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"effort\" name=\"effort\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('effortValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Item 6: Frustration --\u003E\n    \u003Cdiv class=\"tlx-item\"\u003E\n      \u003Clabel\u003E\n        Frustration\n        \u003Cspan class=\"slider-value\" id=\"frustrationValue\"\u003E50\u003C\u002Fspan\u003E\n      \u003C\u002Flabel\u003E\n      \u003Cinput type=\"range\" id=\"frustration\" name=\"frustration\" min=\"0\" max=\"100\" value=\"50\" step=\"5\" oninput=\"document.getElementById('frustrationValue').textContent = this.value;\"\u003E\n      \u003Cdiv class=\"scale-labels\"\u003E\n        \u003Cspan\u003ELow\u003C\u002Fspan\u003E\n        \u003Cspan\u003EHigh\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton type=\"submit\" class=\"tlx-submit-btn\"\u003E✓ Continue\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\n\u003C\u002Fdiv\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
// === SET VALUES FOR THE NEXT BLOCK ===
var currentBlock = sessionStorage.getItem('currentBlock') || '';

// Determine the next block based on the current block
if (currentBlock.includes('Block 1')) {
    // After Block 1, the next block is Block 2
    sessionStorage.setItem('currentBlock', 'Block 2 - Low AI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Next block: Block 2 - Low AI (10 trials)');
} else if (currentBlock.includes('Block 2')) {
    // After Block 2, the next block is Block 3
    sessionStorage.setItem('currentBlock', 'Block 3 - High NoAI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 3 - High NoAI (30 trials)');
} else if (currentBlock.includes('Block 3')) {
    // After Block 3, the next block is Block 4
    sessionStorage.setItem('currentBlock', 'Block 4 - High AI');
    sessionStorage.setItem('trialTotal', '30');
    console.log('Next block: Block 4 - High AI (30 trials)');
} else if (currentBlock.includes('Block 4')) {
    // After Block 4, there is no next block (Debriefing)
    sessionStorage.setItem('currentBlock', '');
    sessionStorage.setItem('trialTotal', '0');
    console.log('Last block completed. No next block.');
} else {
    // Fallback for the first block (should not happen)
    sessionStorage.setItem('currentBlock', 'Block 1 - Low NoAI');
    sessionStorage.setItem('trialTotal', '10');
    console.log('Using fallback: Block 1 - Low NoAI (10 trials)');
}

// Reset trialPosition for the next block
sessionStorage.setItem('trialPosition', '0');
console.log('trialPosition reset for the next block');

 // === STORE NASA-TLX DATA AND PREVENT PAGE RELOAD ===
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tlxForm');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        // PREVENT THE PAGE FROM RELOADING
        e.preventDefault();
        
        // Get all slider values
        var mentalDemand = document.getElementById('mentalDemand').value;
        var physicalDemand = document.getElementById('physicalDemand').value;
        var temporalDemand = document.getElementById('temporalDemand').value;
        var performance = document.getElementById('performance').value;
        var effort = document.getElementById('effort').value;
        var frustration = document.getElementById('frustration').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('tlx_mental', mentalDemand);
        sessionStorage.setItem('tlx_physical', physicalDemand);
        sessionStorage.setItem('tlx_temporal', temporalDemand);
        sessionStorage.setItem('tlx_performance', performance);
        sessionStorage.setItem('tlx_effort', effort);
        sessionStorage.setItem('tlx_frustration', frustration);
        
        console.log('NASA-TLX Data:', {
          mental: mentalDemand,
          physical: physicalDemand,
          temporal: temporalDemand,
          performance: performance,
          effort: effort,
          frustration: frustration
        });
        
        // NOW SUBMIT THE FORM TO PROCEED (without reloading)
        // Use a hidden input to trigger Lab.js navigation
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'variable';
        hiddenInput.value = 'submitted';
        form.appendChild(hiddenInput);
        
        // Submit the form (this will NOT reload the page because of e.preventDefault)
        form.submit();
      });
    }
  });
}
                },
                "title": "NASA-TLX"
              }
            ]
          }
        ]
      }
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cstyle\u003E\n  \u002F* === DEBRIEFING STYLES === *\u002F\n  .debrief-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px 30px;\n    background: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n  .debrief-title {\n    font-size: 26px;\n    font-weight: 700;\n    color: #1a237e;\n    margin-bottom: 20px;\n    padding-bottom: 12px;\n    border-bottom: 3px solid #1a237e;\n  }\n  .debrief-text {\n    font-size: 16px;\n    color: #37474f;\n    line-height: 1.8;\n    text-align: left;\n    margin-bottom: 20px;\n  }\n  .debrief-text strong {\n    color: #1a237e;\n  }\n  .debrief-text .highlight {\n    background: #f0f4ff;\n    padding: 15px 20px;\n    border-radius: 8px;\n    border-left: 4px solid #1a237e;\n    margin: 15px 0;\n  }\n  .debrief-text ul {\n    padding-left: 20px;\n    margin: 10px 0;\n  }\n  .debrief-text ul li {\n    margin-bottom: 5px;\n  }\n  .btn-container {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 20px;\n  }\n  .btn {\n    display: block;\n    width: 100%;\n    padding: 14px 20px;\n    font-size: 18px;\n    font-weight: 600;\n    color: #ffffff;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    text-align: center;\n  }\n  .btn:hover:not(:disabled) {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  }\n  .btn:disabled {\n    background: #9e9e9e !important;\n    cursor: not-allowed;\n    opacity: 0.6;\n    transform: none !important;\n    box-shadow: none !important;\n  }\n  .btn-download {\n    background: #0d47a1;\n  }\n  .btn-download:hover:not(:disabled) {\n    background: #0a3a82;\n    box-shadow: 0 4px 15px rgba(13, 71, 161, 0.3);\n  }\n  .btn-finish {\n    background: #1a237e;\n  }\n  .btn-finish:hover:not(:disabled) {\n    background: #0d1a5e;\n    box-shadow: 0 4px 15px rgba(26, 35, 126, 0.3);\n  }\n  .status-message {\n    font-size: 14px;\n    color: #455a64;\n    margin-top: 5px;\n    font-style: italic;\n    padding: 8px 12px;\n    border-radius: 4px;\n    background: #f5f5f5;\n  }\n  .status-message.success {\n    color: #2e7d32;\n    font-weight: 600;\n    background: #e8f5e9;\n  }\n  .status-message.error {\n    color: #c62828;\n    font-weight: 600;\n    background: #ffebee;\n  }\n  .status-message.loading {\n    color: #e65100;\n    background: #fff3e0;\n  }\n  @media (max-width: 600px) {\n    .debrief-container {\n      padding: 15px;\n    }\n    .debrief-title {\n      font-size: 20px;\n    }\n    .btn {\n      font-size: 16px;\n      padding: 12px;\n    }\n  }\n\u003C\u002Fstyle\u003E\n\n\u003Cdiv class=\"debrief-container\"\u003E\n\n  \u003Ch1 class=\"debrief-title\"\u003E🎉 Thank You!\u003C\u002Fh1\u003E\n\n  \u003Cdiv class=\"debrief-text\"\u003E\n    \u003Cp\u003EYou have successfully completed the experiment. Thank you for your time and participation!\u003C\u002Fp\u003E\n\n    \u003Cdiv class=\"highlight\"\u003E\n      \u003Cp\u003E\u003Cstrong\u003E📋 Purpose of this study:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n      \u003Cp\u003EThis study investigates how alert volume and AI assistance affect decision-making accuracy, response time, and cognitive load during security alert triage.\u003C\u002Fp\u003E\n      \u003Cul\u003E\n        \u003Cli\u003EHow the number of alerts (low vs. high) affects your performance\u003C\u002Fli\u003E\n        \u003Cli\u003EWhether AI recommendations help reduce cognitive load\u003C\u002Fli\u003E\n        \u003Cli\u003EWhether the benefit of AI is greater when analysts are overwhelmed\u003C\u002Fli\u003E\n      \u003C\u002Ful\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"highlight\"\u003E\n      \u003Cp\u003E\u003Cstrong\u003E🔒 Your data:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n      \u003Cp\u003EAll your responses have been recorded \u003Cstrong\u003Eanonymously\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cp\u003E\u003Cstrong\u003E❓ Questions or concerns?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003EResearcher:\u003C\u002Fstrong\u003E Josmi Jose – \u003Ca href=\"mailto:josejosm@hs-albsig.de\"\u003Ejosejosm@hs-albsig.de\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n    \u003Cp\u003E\u003Cstrong\u003ESupervisor:\u003C\u002Fstrong\u003E Professor Stefan Sutterlin – \u003Ca href=\"mailto:suetterlin@hs-albsig.de\"\u003Esuetterlin@hs-albsig.de\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\n    \u003Cp style=\"margin-top: 25px; font-style: italic; color: #455a64; text-align: center;\"\u003E\n      ⬇️ Please download your data before finishing the experiment.\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"btn-container\"\u003E\n    \u003Cbutton id=\"downloadBtn\" type=\"button\" class=\"btn btn-download\"\u003E\n      📥 Download My Data\n    \u003C\u002Fbutton\u003E\n\n    \u003Cdiv id=\"downloadStatus\" class=\"status-message\"\u003E\n      ⏳ Please download your data to enable the Finish button.\n    \u003C\u002Fdiv\u003E\n\n    \u003Cbutton id=\"finishBtn\" type=\"button\" class=\"btn btn-finish\" disabled\u003E\n      Finish\n    \u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fdiv\u003E\n",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
setTimeout(function() {
  var self = this;
  var downloadBtn = document.getElementById('downloadBtn');
  var finishBtn = document.getElementById('finishBtn');
  var statusEl = document.getElementById('downloadStatus');

  if (!downloadBtn) {
    console.error('Download button not found in DOM.');
    return;
  }

  // Handle Data Download
  downloadBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (statusEl) {
      statusEl.className = 'status-message loading';
      statusEl.textContent = '⏳ Preparing your data for download...';
    }

    try {
      var exportData = {
        metadata: {
          download_date: new Date().toISOString(),
          versionToRun: sessionStorage.getItem('versionToRun') || 'Unknown',
          currentBlock: sessionStorage.getItem('currentBlock') || 'Completed'
        },
        trials_data: [],
        session_storage: {}
      };

      // 1. Export complete lab.js Datastore (all trial records)
      var datastore = (self.options && self.options.datastore) || self.datastore;
      if (datastore) {
        if (typeof datastore.exportJson === 'function') {
          exportData.trials_data = JSON.parse(datastore.exportJson());
        } else if (typeof datastore.get === 'function') {
          exportData.trials_data = datastore.get();
        }
      }

      // 2. Include session storage snapshot as supplementary info
      for (var i = 0; i < sessionStorage.length; i++) {
        var key = sessionStorage.key(i);
        exportData.session_storage[key] = sessionStorage.getItem(key);
      }

      // Trigger JSON file download
      var jsonData = JSON.stringify(exportData, null, 2);
      var blob = new Blob([jsonData], { type: 'application/json;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = 'experiment_data_' + new Date().toISOString().slice(0, 10) + '.json';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4000);

      // Enable Finish button
      sessionStorage.setItem('dataDownloaded', 'true');
      if (finishBtn) {
        finishBtn.disabled = false;
        finishBtn.style.opacity = '1';
      }

      if (statusEl) {
        statusEl.className = 'status-message success';
        statusEl.textContent = '✅ Data downloaded successfully! You can now click Finish.';
      }
    } catch (err) {
      console.error('Download error:', err);
      if (statusEl) {
        statusEl.className = 'status-message error';
        statusEl.textContent = '❌ Error downloading data. Please try again.';
      }
    }
  });

  // Handle Finish Button
  if (finishBtn) {
    finishBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (finishBtn.disabled) {
        alert('⚠️ Please download your data first.');
        return;
      }
      try {
        window.close();
      } catch (err) {}
      setTimeout(function() {
        window.location.href = 'about:blank';
      }, 500);
    });
  }
}.bind(this), 300);

}
      },
      "title": "Debriefing"
    }
  ]
})

// Let's go!
study.run()