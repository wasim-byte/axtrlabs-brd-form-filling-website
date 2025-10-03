import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { FormData } from "../BRDForm";

interface SystemWorkflowProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function SystemWorkflow({ formData, updateFormData }: SystemWorkflowProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="idealWorkflow">Describe Your Ideal Workflow *</Label>
        <Textarea
          id="idealWorkflow"
          value={formData.idealWorkflow}
          onChange={(e) => updateFormData({ idealWorkflow: e.target.value })}
          placeholder="What are the step-by-step stages of how the system should work? (Example: User submits form → AI processes → Result emailed)"
          rows={5}
          className="bg-muted/50"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="hasFlowchart"
          checked={formData.hasFlowchart}
          onCheckedChange={(checked) => updateFormData({ hasFlowchart: !!checked })}
        />
        <Label htmlFor="hasFlowchart">I have a flowchart or screenshot to upload</Label>
      </div>

      {formData.hasFlowchart && (
        <div className="space-y-2">
          <Label htmlFor="flowchartFile">Upload Flowchart/Screenshot</Label>
          <Input
            id="flowchartFile"
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => {
              const file = e.target.files?.[0];
              updateFormData({ flowchartFile: file || null });
            }}
            className="bg-muted/50"
          />
        </div>
      )}
    </div>
  );
}