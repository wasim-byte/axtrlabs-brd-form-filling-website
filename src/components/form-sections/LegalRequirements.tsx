import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData } from "../BRDForm";

interface LegalRequirementsProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function LegalRequirements({ formData, updateFormData }: LegalRequirementsProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="signNDA"
          checked={formData.signNDA}
          onCheckedChange={(checked) => updateFormData({ signNDA: !!checked })}
        />
        <Label htmlFor="signNDA">Do You Want to Sign NDA?</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="wantsSLA"
          checked={formData.wantsSLA}
          onCheckedChange={(checked) => updateFormData({ wantsSLA: !!checked })}
        />
        <Label htmlFor="wantsSLA">Do You Want SLA or MSA Document Format?</Label>
      </div>
    </div>
  );
}