import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData } from "../BRDForm";

interface DocumentationDeliverablesProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function DocumentationDeliverables({ formData, updateFormData }: DocumentationDeliverablesProps) {
  const documentationOptions = [
    "API Docs",
    "Integration Guides", 
    "UI Handoff",
    "Sprint Reports",
    "User Manual",
    "Technical Documentation"
  ];

  const handleDocumentationChange = (option: string, checked: boolean) => {
    const currentNeeds = formData.documentationNeeds || [];
    if (checked) {
      updateFormData({ documentationNeeds: [...currentNeeds, option] });
    } else {
      updateFormData({ documentationNeeds: currentNeeds.filter(item => item !== option) });
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <Label>Do You Need Any of the Following?</Label>
        <div className="grid grid-cols-2 gap-3">
          {documentationOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`doc-${option}`}
                checked={formData.documentationNeeds?.includes(option) || false}
                onCheckedChange={(checked) => handleDocumentationChange(option, !!checked)}
              />
              <Label htmlFor={`doc-${option}`} className="text-sm">{option}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="deliveryFormat">Preferred Delivery Format</Label>
        <Input
          id="deliveryFormat"
          value={formData.deliveryFormat}
          onChange={(e) => updateFormData({ deliveryFormat: e.target.value })}
          placeholder="GitHub, Zip, Google Drive, PDF?"
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}