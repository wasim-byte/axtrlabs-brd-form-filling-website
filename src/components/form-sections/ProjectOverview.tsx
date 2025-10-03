import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "../BRDForm";

interface ProjectOverviewProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export function ProjectOverview({ formData, updateFormData }: ProjectOverviewProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="projectTitle">Project Title *</Label>
        <Input
          id="projectTitle"
          value={formData.projectTitle}
          onChange={(e) => updateFormData({ projectTitle: e.target.value })}
          placeholder="What should we call this project?"
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectDescription">Brief Description *</Label>
        <Textarea
          id="projectDescription"
          value={formData.projectDescription}
          onChange={(e) => updateFormData({ projectDescription: e.target.value })}
          placeholder="What is the main idea or goal of this project?"
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessContext">Business Context / Motivation *</Label>
        <Textarea
          id="businessContext"
          value={formData.businessContext}
          onChange={(e) => updateFormData({ businessContext: e.target.value })}
          placeholder="What problem are you trying to solve or opportunity you want to explore?"
          rows={3}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetUsers">Target Users / Stakeholders *</Label>
        <Textarea
          id="targetUsers"
          value={formData.targetUsers}
          onChange={(e) => updateFormData({ targetUsers: e.target.value })}
          placeholder="Who will use this product (e.g., internal team, end users, customers)?"
          rows={2}
          className="bg-muted/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessModel">Business Model / Revenue Type</Label>
        <Input
          id="businessModel"
          value={formData.businessModel}
          onChange={(e) => updateFormData({ businessModel: e.target.value })}
          placeholder="How do you plan to monetize it? (e.g., Subscription, One-time, Service-based)"
          className="bg-muted/50"
        />
      </div>
    </div>
  );
}