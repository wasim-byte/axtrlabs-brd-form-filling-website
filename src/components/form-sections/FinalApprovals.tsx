import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "../BRDForm";

interface FinalApprovalsProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function FinalApprovals({ formData, updateFormData }: FinalApprovalsProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="stageApprovers">Who Will Approve Each Stage?</Label>
        <Textarea
          id="stageApprovers"
          value={formData.stageApprovers}
          onChange={(e) => updateFormData({ stageApprovers: e.target.value })}
          placeholder="Names and roles for different approval stages"
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="finalAuthority">Final Sign-off Authority?</Label>
        <Textarea
          id="finalAuthority"
          value={formData.finalAuthority}
          onChange={(e) => updateFormData({ finalAuthority: e.target.value })}
          placeholder="Who has the final approval authority?"
          rows={2}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}