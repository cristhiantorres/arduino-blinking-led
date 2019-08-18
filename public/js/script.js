function led(power) {
  
  let elementId = Boolean(power);

  document.getElementById(elementId).toggleAttribute('disabled');
  document.getElementById(!elementId).removeAttribute('disabled');
  
  fetch(`/led?power=${power}`);
}