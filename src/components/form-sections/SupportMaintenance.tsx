import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormData } from "../BRDForm";

interface SupportMaintenanceProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function SupportMaintenance({ formData, updateFormData }: SupportMaintenanceProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="supportPeriod">Post-launch Support Period Needed</Label>
        <Input
          id="supportPeriod"
          value={formData.supportPeriod}
          onChange={(e) => updateFormData({ supportPeriod: e.target.value })}
          placeholder="1 month / 3 months / Ongoing?"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="updateFrequency">Expected Update Frequency?</Label>
        <Input
          id="updateFrequency"
          value={formData.updateFrequency}
          onChange={(e) => updateFormData({ updateFrequency: e.target.value })}
          placeholder="Weekly / Monthly / As needed"
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}