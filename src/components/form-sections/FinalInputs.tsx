import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FormData } from "../BRDForm";

interface FinalInputsProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function FinalInputs({ formData, updateFormData }: FinalInputsProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="existingDocs">Do You Have Any Existing Docs, POCs, Demos We Should See?</Label>
        <Textarea
          id="existingDocs"
          value={formData.existingDocs}
          onChange={(e) => updateFormData({ existingDocs: e.target.value })}
          placeholder="Links or descriptions of existing resources"
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="existingFiles">Upload Existing Files (Optional)</Label>
        <Input
          id="existingFiles"
          type="file"
          multiple
          accept="*/*"
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            updateFormData({ existingFiles: files });
          }}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalInfo">Anything Else You'd Like Us to Know?</Label>
        <Textarea
          id="additionalInfo"
          value={formData.additionalInfo}
          onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
          placeholder="Any additional information, special requirements, or questions"
          rows={4}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}