// Write your code in this file!
function scuberGreetingForFeet(dist){
  let response = ''
  if (dist <= 400) {
    response = 'This one is on me!'
  }else if (dist > 2500) {
    response = 'No can do.'
  }else if (dist > 2000) {
    response = 'I will gladly take your thirty bucks.'
  }
  return response
}

function ternaryCheckCity(destination){
  let response;
  destination === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.';
  return response;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'generous':
      response = "Thank you so much."
      break;
    case 'not as generous':
      response = "Thank you."
      break;
    default:
      response = "Bye."
      break;
  }
  return response;
}
