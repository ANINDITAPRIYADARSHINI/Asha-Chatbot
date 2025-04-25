"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CAREER_CATEGORIES } from "@/lib/constants";
import { useState } from "react";

interface CareerCategorySelectorProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CareerCategorySelector({ 
  selectedCategory, 
  onCategoryChange 
}: CareerCategorySelectorProps) {
  const [open, setOpen] = useState(false);
  
  const categories = (Array.isArray(CAREER_CATEGORIES) ? CAREER_CATEGORIES : []) || [];
  const currentCategory = selectedCategory && categories.length > 0
    ? categories.find(category => category.id === selectedCategory)?.name 
    : "All Categories";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {currentCategory}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search categories..." />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value="all"
                onSelect={() => {
                  onCategoryChange(null);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedCategory === null ? "opacity-100" : "opacity-0"
                  )}
                />
                <span>All Categories</span>
              </CommandItem>
              {categories.length > 0 && <CommandSeparator />}
              {categories.map((category) => (
                <CommandItem
                  key={category.id}
                  value={category.id}
                  onSelect={() => {
                    onCategoryChange(category.id);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCategory === category.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex flex-col">
                    <span>{category.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {category.fields?.join(", ") || ""}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}