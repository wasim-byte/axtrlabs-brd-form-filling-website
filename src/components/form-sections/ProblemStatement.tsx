import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "../BRDForm";

interface ProblemStatementProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function ProblemStatement({ formData, updateFormData }: ProblemStatementProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="currentChallenges">Current Challenges / Limitations *</Label>
        <Textarea
          id="currentChallenges"
          value={formData.currentChallenges}
          onChange={(e) => updateFormData({ currentChallenges: e.target.value })}
          placeholder="What are the problems with your current process or system?"
          rows={4}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="problemImpact">Impact of These Problems *</Label>
        <Textarea
          id="problemImpact"
          value={formData.problemImpact}
          onChange={(e) => updateFormData({ problemImpact: e.target.value })}
          placeholder="How are these issues affecting your business or users?"
          rows={4}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}