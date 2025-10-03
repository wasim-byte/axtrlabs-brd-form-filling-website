import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { FormData } from "../BRDForm";

interface ApiPayloadProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function ApiPayload({ formData, updateFormData }: ApiPayloadProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="needsApiIntegration"
          checked={formData.needsApiIntegration}
          onCheckedChange={(checked) => updateFormData({ needsApiIntegration: !!checked })}
        />
        <Label htmlFor="needsApiIntegration">Do You Need API Integration?</Label>
      </div>

      {formData.needsApiIntegration && (
        <>
          <div className="space-y-2">
            <Label htmlFor="samplePayload">Sample Input/Output Structure</Label>
            <Textarea
              id="samplePayload"
              value={formData.samplePayload}
              onChange={(e) => updateFormData({ samplePayload: e.target.value })}
              placeholder="Paste JSON sample or describe the API structure"
              rows={6}
              className="bg-muted/50 font-mono text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="payloadFile">Upload Sample File (Optional)</Label>
            <Input
              id="payloadFile"
              type="file"
              accept=".json,.txt,.xml"
              onChange={(e) => {
                const file = e.target.files?.[0];
                updateFormData({ payloadFile: file || null });
              }}
              className="bg-muted/50"
            />
          </div>
        </>
      )}
    </div>
  );
}