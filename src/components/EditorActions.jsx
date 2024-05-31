import React from 'react';
import { Save, RotateCcw, RotateCw } from 'lucide-react';

const EditorActions = ({ onSave, onUndo, onRedo }) => {
  return (
    <div className="fixed bottom-1.5 flex justify-around w-full bg-gray-200 justify-center border-t border-gray-300">
      <button 
        className="flex items-center gap-1 px-4 py-2 text-white bg-blue-700 active:bg-blue-800 rounded"
        onClick={onSave}
      >
        <Save className="h-4 w-4" />
      </button>
      <button 
        className="flex items-center gap-1 px-4 py-2 text-white bg-blue-700 active:bg-blue-800 rounded"
        onClick={onUndo}
      >
        <RotateCcw className="h-4 w-4" />
      </button>
      <button 
        className="flex items-center gap-1 px-4 py-2 text-white bg-blue-700 active:bg-blue-800 rounded"
        onClick={onRedo}
      >
        <RotateCw className="h-4 w-4" />
      </button>
    </div>
  );
};

export default EditorActions;