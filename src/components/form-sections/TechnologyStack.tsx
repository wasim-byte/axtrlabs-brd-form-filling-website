import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData } from "../BRDForm";

interface TechnologyStackProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function TechnologyStack({ formData, updateFormData }: TechnologyStackProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="preferredTech">Do You Have Preferred Technologies?</Label>
        <Input
          id="preferredTech"
          value={formData.preferredTech}
          onChange={(e) => updateFormData({ preferredTech: e.target.value })}
          placeholder="E.g., Python, Node.js, Flutter, LangChain, n8n"
          className="bg-muted/50"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="openToAlternatives"
          checked={formData.openToAlternatives}
          onCheckedChange={(checked) => updateFormData({ openToAlternatives: !!checked })}
        />
        <Label htmlFor="openToAlternatives">Are You Open to Alternative Suggestions?</Label>
      </div>
    </div>
  );
}