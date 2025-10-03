import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "../BRDForm";

interface RisksManagementProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function RisksManagement({ formData, updateFormData }: RisksManagementProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="knownRisks">Any Known Risks or Concerns?</Label>
        <Textarea
          id="knownRisks"
          value={formData.knownRisks}
          onChange={(e) => updateFormData({ knownRisks: e.target.value })}
          placeholder="E.g., Data sensitivity, Model Accuracy, Integration challenges"
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="failureHandling">How Should We Handle Failures or Issues?</Label>
        <Textarea
          id="failureHandling"
          value={formData.failureHandling}
          onChange={(e) => updateFormData({ failureHandling: e.target.value })}
          placeholder="Escalation process, fallback procedures, communication protocol"
          rows={3}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}