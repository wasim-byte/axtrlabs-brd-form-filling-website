import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormData } from "../BRDForm";

interface CommunicationManagementProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function CommunicationManagement({ formData, updateFormData }: CommunicationManagementProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="communicationTools">Preferred Communication Tools</Label>
        <Input
          id="communicationTools"
          value={formData.communicationTools}
          onChange={(e) => updateFormData({ communicationTools: e.target.value })}
          placeholder="Slack, Notion, WhatsApp, Email"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="meetingPreference">Weekly/Monthly Meeting Preference?</Label>
        <Input
          id="meetingPreference"
          value={formData.meetingPreference}
          onChange={(e) => updateFormData({ meetingPreference: e.target.value })}
          placeholder="Weekly standup, Monthly review, Ad-hoc"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="escalationContact">Escalation Contact (if issues arise)</Label>
        <Input
          id="escalationContact"
          value={formData.escalationContact}
          onChange={(e) => updateFormData({ escalationContact: e.target.value })}
          placeholder="Name and contact information"
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}