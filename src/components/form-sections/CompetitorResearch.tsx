import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "../BRDForm";

interface CompetitorResearchProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function CompetitorResearch({ formData, updateFormData }: CompetitorResearchProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="competitors">Do You Know Similar Tools or Competitors?</Label>
        <Textarea
          id="competitors"
          value={formData.competitors}
          onChange={(e) => updateFormData({ competitors: e.target.value })}
          placeholder="List competitors or similar tools with URLs if available"
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="inspirationProducts">Do You Have Any Products We Should Take Inspiration From?</Label>
        <Textarea
          id="inspirationProducts"
          value={formData.inspirationProducts}
          onChange={(e) => updateFormData({ inspirationProducts: e.target.value })}
          placeholder="Products or features you admire"
          rows={3}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}