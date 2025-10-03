import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FormData } from "../BRDForm";

interface TechnicalRequirementsProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function TechnicalRequirements({ formData, updateFormData }: TechnicalRequirementsProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="inputFormat">Expected Input Format & Rules</Label>
        <Textarea
          id="inputFormat"
          value={formData.inputFormat}
          onChange={(e) => updateFormData({ inputFormat: e.target.value })}
          placeholder="What kind of input will the system handle? (e.g., Excel, API JSON, text) Any logic rules?"
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dataSource">Data Source & Format</Label>
        <Input
          id="dataSource"
          value={formData.dataSource}
          onChange={(e) => updateFormData({ dataSource: e.target.value })}
          placeholder="Where is the data coming from? Format? (CSV, SQL, API?)"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="authentication">Authentication / Authorization Needs</Label>
        <Input
          id="authentication"
          value={formData.authentication}
          onChange={(e) => updateFormData({ authentication: e.target.value })}
          placeholder="Do you need login? Roles? API keys? OAuth?"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="integrationNeeds">Integration Needs</Label>
        <Input
          id="integrationNeeds"
          value={formData.integrationNeeds}
          onChange={(e) => updateFormData({ integrationNeeds: e.target.value })}
          placeholder="What systems should this connect to? (CRM, CMS, ERP, WhatsApp, etc.)"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="platformCompatibility">Platform Compatibility</Label>
        <Input
          id="platformCompatibility"
          value={formData.platformCompatibility}
          onChange={(e) => updateFormData({ platformCompatibility: e.target.value })}
          placeholder="Should it work on Web, Mobile, Desktop, IoT, etc.?"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="deploymentPreference">Deployment Preference</Label>
        <Input
          id="deploymentPreference"
          value={formData.deploymentPreference}
          onChange={(e) => updateFormData({ deploymentPreference: e.target.value })}
          placeholder="Do you prefer Cloud, On-Premise, or Hybrid?"
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}