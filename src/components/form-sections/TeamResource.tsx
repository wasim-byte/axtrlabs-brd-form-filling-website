import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "../BRDForm";

interface TeamResourceProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function TeamResource({ formData, updateFormData }: TeamResourceProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="stakeholders">Who Are Your Stakeholders / Point of Contact?</Label>
        <Textarea
          id="stakeholders"
          value={formData.stakeholders}
          onChange={(e) => updateFormData({ stakeholders: e.target.value })}
          placeholder="Names, roles, and contact information"
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="resourceConstraints">Any Resource Availability Constraints or Blockers?</Label>
        <Textarea
          id="resourceConstraints"
          value={formData.resourceConstraints}
          onChange={(e) => updateFormData({ resourceConstraints: e.target.value })}
          placeholder="Time constraints, availability, budget limitations, etc."
          rows={3}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}