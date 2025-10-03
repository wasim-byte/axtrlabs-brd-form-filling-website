import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FormData } from "../BRDForm";

interface ROIBusinessImpactProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function ROIBusinessImpact({ formData, updateFormData }: ROIBusinessImpactProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="strategicGoal">Strategic Goal of the Project?</Label>
        <Input
          id="strategicGoal"
          value={formData.strategicGoal}
          onChange={(e) => updateFormData({ strategicGoal: e.target.value })}
          placeholder="Cost reduction, efficiency, new revenue, etc."
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="expectedROI">How Soon Do You Expect ROI (Return on Investment)?</Label>
        <Input
          id="expectedROI"
          value={formData.expectedROI}
          onChange={(e) => updateFormData({ expectedROI: e.target.value })}
          placeholder="3 months, 6 months, 1 year"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="expectedBenefits">What Benefits or Improvements Do You Expect?</Label>
        <Textarea
          id="expectedBenefits"
          value={formData.expectedBenefits}
          onChange={(e) => updateFormData({ expectedBenefits: e.target.value })}
          placeholder="Quantifiable benefits and improvements"
          rows={3}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}