"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuSubTrigger,
  DropdownMenuShortcut,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Editor from "@/components/Editor";
import TopBar from "@/components/TopBar";

export default function Main() {
  const { setTheme } = useTheme();
  const { toast } = useToast();
  const [editorValue, setEditorValue] = useState(`console.log("Hello World");`);
  const [history, setHistory] = useState([`console.log("Hello World");`]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (history[currentStep] !== undefined) {
      setEditorValue(history[currentStep]);
    }
  }, [currentStep, history]);

  const handleEditorChange = (value) => {
    setEditorValue(value);
    const newHistory = history.slice(0, currentStep + 1);
    setHistory([...newHistory, value]);
    setCurrentStep(newHistory.length);
  };

  const Save = () => {
    toast({
      description: "Successfully Saved.",
    });
  };

  const Undo = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const Redo = () => {
    if (currentStep < history.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <div className="h-full w-full flex flex-col">
      <TopBar />
        <Editor
          value={editorValue}
          onChange={handleEditorChange}
        />
    </div>
  );
}