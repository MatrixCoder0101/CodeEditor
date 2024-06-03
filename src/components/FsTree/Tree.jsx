'use client';
import React, { useState } from 'react';

const Tree = ({ node, onOpenFile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const Toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFileClick = () => {
    if (!node.isFolder) {
      onOpenFile(node.path);
    }
  };

  return (
    <div style={{ marginLeft: node.isFolder ? 20 : 40 }}>
      {node.isFolder ? (
        <div onClick={Toggle} style={{ cursor: 'pointer' }}>
          {isOpen ? '📂' : '📁'} {node.name}
        </div>
      ) : (
        <div onClick={handleFileClick} style={{ cursor: 'pointer' }}>
          📄 {node.name}
        </div>
      )}
      {isOpen && node.children && (
        <div>
          {node.children.map((child) => (
            <Tree key={child.path} node={child} onOpenFile={onOpenFile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tree;