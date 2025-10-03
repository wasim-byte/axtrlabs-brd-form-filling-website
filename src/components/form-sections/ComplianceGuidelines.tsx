import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "../BRDForm";

interface ComplianceGuidelinesProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function ComplianceGuidelines({ formData, updateFormData }: ComplianceGuidelinesProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="complianceGuidelines">Any Legal or Regulatory Guidelines?</Label>
        <Textarea
          id="complianceGuidelines"
          value={formData.complianceGuidelines}
          onChange={(e) => updateFormData({ complianceGuidelines: e.target.value })}
          placeholder="E.g., RBI compliance, no financial advice, GDPR, etc."
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="referenceContent">Do You Have Reference Blogs or Content Guidelines?</Label>
        <Textarea
          id="referenceContent"
          value={formData.referenceContent}
          onChange={(e) => updateFormData({ referenceContent: e.target.value })}
          placeholder="Links or upload references"
          rows={3}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}