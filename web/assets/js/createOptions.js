import { fetchNui } from './fetchNui.js';

const onClick = (event) => {
  const target = event.currentTarget;

  $(target).css({ 'pointer-events': 'none' });

  fetchNui('select', [target.targetType, target.targetId, target.zoneId]);
  setTimeout(() => ($(target).css({ 'pointer-events': 'auto' })), 100);
};

export const createOptions = (type, data, id, zoneId) => {
  if (data.hide) return;

  const option = document.createElement('div');
  const iconElement = `<i class='fa-fw ${data.icon} option_icon'></i>`;

  option.innerHTML = `${iconElement}<p class='option_label'>${data.label}</p>`;
  option.className = 'option';
  option.targetType = type;
  option.targetId = id;
  option.zoneId = zoneId;

  option.addEventListener('click', onClick);
  $('#actionsContainer').append(option);
};
