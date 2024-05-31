'use client';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { dracula } from "@uiw/codemirror-theme-dracula";
import { inlineCopilot } from "codemirror-copilot";

const Editor = ({ value, onChange, editorTheme }) => {
  return (
    <div className="flex-1 overflow-auto">
      <CodeMirror
        value={value}
        theme={editorTheme || dracula}
        height="100%"
        extensions={[
          javascript({ jsx: true }),
          inlineCopilot(
            async (prefix, suffix) => {
              const res = await fetch("/api/copilot", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  prefix,
                  suffix,
                  language: "javascript",
                  model: "hf/meta-llama/meta-llama-3-8b-instruct",
                }),
              });
              const { prediction } = await res.json();
              return prediction;
            },
            500,
            true,
          ),
        ]}
        editorDidMount ={(editor) =>{
            editor.setSize("", "100%");
        }}
        onChange={(value) => onChange(value)}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default Editor;