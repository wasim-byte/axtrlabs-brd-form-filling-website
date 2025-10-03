import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormData } from "../BRDForm";

interface DeploymentWorkflowProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function DeploymentWorkflow({ formData, updateFormData }: DeploymentWorkflowProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="pilotOrLaunch">Will This Be a Pilot or Full Launch?</Label>
        <Input
          id="pilotOrLaunch"
          value={formData.pilotOrLaunch}
          onChange={(e) => updateFormData({ pilotOrLaunch: e.target.value })}
          placeholder="Pilot / Full Launch / Gradual Rollout"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="expectedVolume">Expected Volume of Users / Data / Traffic?</Label>
        <Input
          id="expectedVolume"
          value={formData.expectedVolume}
          onChange={(e) => updateFormData({ expectedVolume: e.target.value })}
          placeholder="e.g., 100 users, 1000 requests/day"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="internalOrPublic">Is It for Internal Use or Public / Client-facing?</Label>
        <Input
          id="internalOrPublic"
          value={formData.internalOrPublic}
          onChange={(e) => updateFormData({ internalOrPublic: e.target.value })}
          placeholder="Internal / Public / Client-facing"
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}