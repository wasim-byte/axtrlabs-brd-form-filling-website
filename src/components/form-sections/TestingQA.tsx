import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData } from "../BRDForm";

interface TestingQAProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function TestingQA({ formData, updateFormData }: TestingQAProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="acceptanceCriteria">Acceptance Criteria *</Label>
        <Textarea
          id="acceptanceCriteria"
          value={formData.acceptanceCriteria}
          onChange={(e) => updateFormData({ acceptanceCriteria: e.target.value })}
          placeholder="What conditions must be met for the project to be considered complete?"
          rows={4}
          className="bg-muted/50"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="needsUAT"
          checked={formData.needsUAT}
          onCheckedChange={(checked) => updateFormData({ needsUAT: !!checked })}
        />
        <Label htmlFor="needsUAT">User Acceptance Testing Needed?</Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="testCases">Expected Test Cases / Scenarios (Optional)</Label>
        <Textarea
          id="testCases"
          value={formData.testCases}
          onChange={(e) => updateFormData({ testCases: e.target.value })}
          placeholder="Describe specific scenarios you want tested"
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="testingMethod">Preferred Testing Method</Label>
        <Input
          id="testingMethod"
          value={formData.testingMethod}
          onChange={(e) => updateFormData({ testingMethod: e.target.value })}
          placeholder="Manual / Automated / Loop with Client?"
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}