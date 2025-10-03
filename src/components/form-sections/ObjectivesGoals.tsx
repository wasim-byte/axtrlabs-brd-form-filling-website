import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "../BRDForm";

interface ObjectivesGoalsProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function ObjectivesGoals({ formData, updateFormData }: ObjectivesGoalsProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="highLevelGoals">High-Level Goals *</Label>
        <Textarea
          id="highLevelGoals"
          value={formData.highLevelGoals}
          onChange={(e) => updateFormData({ highLevelGoals: e.target.value })}
          placeholder="What do you hope to achieve with this solution?"
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="kpis">Key Performance Indicators (KPIs) *</Label>
        <Textarea
          id="kpis"
          value={formData.kpis}
          onChange={(e) => updateFormData({ kpis: e.target.value })}
          placeholder="How will you measure success? (e.g., 50% less manual effort, 90% accuracy)"
          rows={3}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}