import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <div className="flex items-center border p-3">
      <Input type="text" placeholder="search" className="border" />
      <Button type="submit">search</Button>
    </div>
  );
}   
