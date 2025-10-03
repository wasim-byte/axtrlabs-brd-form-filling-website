import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FormData } from "../BRDForm";

interface BrandingLanguageProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function BrandingLanguage({ formData, updateFormData }: BrandingLanguageProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="brandingGuidelines">Branding Guidelines / Fonts / Colors</Label>
        <Textarea
          id="brandingGuidelines"
          value={formData.brandingGuidelines}
          onChange={(e) => updateFormData({ brandingGuidelines: e.target.value })}
          placeholder="Do you have any branding rules or specific requirements?"
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="brandingFiles">Upload Branding Assets (Optional)</Label>
        <Input
          id="brandingFiles"
          type="file"
          multiple
          accept="image/*,.pdf"
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            updateFormData({ brandingFiles: files });
          }}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="languageTone">Preferred Language / Tone / Voice for Content?</Label>
        <Input
          id="languageTone"
          value={formData.languageTone}
          onChange={(e) => updateFormData({ languageTone: e.target.value })}
          placeholder="e.g., Professional, Friendly, Technical, Casual"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mockupsFiles">Upload Any Mockups / Documents / References</Label>
        <Input
          id="mockupsFiles"
          type="file"
          multiple
          accept="image/*,.pdf,.doc,.docx"
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            updateFormData({ mockupsFiles: files });
          }}
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}