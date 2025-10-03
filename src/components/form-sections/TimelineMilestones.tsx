import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FormData } from "../BRDForm";

interface TimelineMilestonesProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function TimelineMilestones({ formData, updateFormData }: TimelineMilestonesProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="expectedTimeline">What is Your Expected Timeline? *</Label>
        <Input
          id="expectedTimeline"
          value={formData.expectedTimeline}
          onChange={(e) => updateFormData({ expectedTimeline: e.target.value })}
          placeholder="Total project duration? (e.g., 3 months, 6 weeks)"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="keyMilestones">Any Key Milestones or Deadlines?</Label>
        <Textarea
          id="keyMilestones"
          value={formData.keyMilestones}
          onChange={(e) => updateFormData({ keyMilestones: e.target.value })}
          placeholder="(E.g., Phase 1 – UI, Phase 2 – AI Integration)"
          rows={3}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}