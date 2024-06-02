"use client";
import {
	Calculator,
	Calendar,
	CreditCard,
	Settings,
	Smile,
	User
} from "lucide-react";

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut
} from "@/components/ui/command";

const CommandPalette = ({open, keybindings, onCommandSelect}) => {
	return (
		<CommandDialog open={open}>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Commands">
				{keybindings.map((binding, index) => (
					<CommandItem key={index} onSelect={() => onCommandSelect(binding)}>
						<span>{binding.name || "Unnamed Command"}</span>
						<CommandShortcut>{binding.key}</CommandShortcut>
					</CommandItem>
			  ))}
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	);
};

export default CommandPalette;
