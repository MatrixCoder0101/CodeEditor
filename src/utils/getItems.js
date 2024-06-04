const getItems = async () => {
  const res = await fetch('/api/files', { cache: 'no-store' });
  const { items } = await res.json();
  return items;
}

export default getItems;