import { Search } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";

export default function SearchInput() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-3 h-4 w-4 text-slate-600" />
      <Input className="rounded-full pl-9" placeholder="Search movie" />
    </div>
  );
}
