import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "../BRDForm";

interface FunctionalRequirementsProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function FunctionalRequirements({ formData, updateFormData }: FunctionalRequirementsProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="requiredFeatures">List Required Features *</Label>
        <Textarea
          id="requiredFeatures"
          value={formData.requiredFeatures}
          onChange={(e) => updateFormData({ requiredFeatures: e.target.value })}
          placeholder="Mention each feature needed (with notes: Must Have or Optional)"
          rows={4}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="featurePrioritization">Feature Prioritization *</Label>
        <Textarea
          id="featurePrioritization"
          value={formData.featurePrioritization}
          onChange={(e) => updateFormData({ featurePrioritization: e.target.value })}
          placeholder="Which features are urgent, and which can wait?"
          rows={3}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}