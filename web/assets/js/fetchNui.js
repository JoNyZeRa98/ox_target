const resource = GetParentResourceName();

export const fetchNui = async (eventName, data) => {
  const res = await fetch(`https://${resource}/${eventName}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};
