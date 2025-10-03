import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData } from "../BRDForm";

interface InfrastructureProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function Infrastructure({ formData, updateFormData }: InfrastructureProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="cloudVendor">Preferred Cloud Vendor (if any)</Label>
        <Input
          id="cloudVendor"
          value={formData.cloudVendor}
          onChange={(e) => updateFormData({ cloudVendor: e.target.value })}
          placeholder="AWS / Azure / GCP / None"
          className="bg-muted/50"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="needsHostingHelp"
          checked={formData.needsHostingHelp}
          onCheckedChange={(checked) => updateFormData({ needsHostingHelp: !!checked })}
        />
        <Label htmlFor="needsHostingHelp">Do You Need Our Help with Hosting / Setup?</Label>
      </div>
    </div>
  );
}