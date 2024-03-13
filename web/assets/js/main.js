import { createOptions } from "./createOptions.js";

$('#deluxeOxTarget').hide();

window.addEventListener("message", (event) => {
  $('#actionsContainer').empty();

  const eyeElement = $('#eye');

  switch (event.data.event) {
    case 'visible': {
      $('#deluxeOxTarget').fadeTo(100, event.data.state ? 1 : 0);
      eyeElement.fadeOut(100, () => {
        eyeElement.removeClass().addClass('ti ti-eye-closed').fadeIn(100);
      });
      break;
    }
    case 'leftTarget': {
      eyeElement.fadeOut(100, () => {
        eyeElement.removeClass().addClass('ti ti-eye-closed').fadeIn(100);
      });
      break;
    }
    case 'setTarget': {
      eyeElement.fadeOut(100, () => {
        eyeElement.removeClass().addClass('ti ti-eye').fadeIn(100);
      });
      setTarget(event.data);
      break;
    }
  }
});

const setTarget = (targetType) => {
  const { options, zones } = targetType;

  if (options) {
    for (const type in options) {
      options[type].forEach((data, id) => {
        createOptions(type, data, id + 1);
      });
    }
  }

  if (zones) {
    for (let i = 0; i < zones.length; i++) {
      zones[i].forEach((data, id) => {
        createOptions("zones", data, id + 1, i + 1);
      });
    }
  }
};
