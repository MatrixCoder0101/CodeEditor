'use client';
import React, { useEffect, useState } from 'react';
import getItems from '@/utils/getItems';
import Tree from './Tree';

const FileTree = ({ onOpenFile }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsData = await getItems();
      setItems(itemsData);
      setLoading(false);
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {items.map((item) => (
        <Tree key={item.path} node={item} onOpenFile={onOpenFile} />
      ))}
    </div>
  );
};

export default FileTree;