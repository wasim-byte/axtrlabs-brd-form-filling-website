import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "../BRDForm";

interface ConstraintsValidationProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function ConstraintsValidation({ formData, updateFormData }: ConstraintsValidationProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="validationRules">Any Specific Rules or Error Handling?</Label>
        <Textarea
          id="validationRules"
          value={formData.validationRules}
          onChange={(e) => updateFormData({ validationRules: e.target.value })}
          placeholder="E.g., no empty fields, fallback if API fails, reject low confidence AI outputs"
          rows={4}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}