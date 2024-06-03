const getItems = async () => {
  const res = await fetch('http://localhost:3000/api/files', { cache: 'no-store' });
  const { items } = await res.json();
  return items;
}

export default getItems;