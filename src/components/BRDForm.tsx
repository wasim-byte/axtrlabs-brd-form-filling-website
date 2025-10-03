import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { ProjectOverview } from "./form-sections/ProjectOverview";
import { ProblemStatement } from "./form-sections/ProblemStatement";
import { ObjectivesGoals } from "./form-sections/ObjectivesGoals";
import { FunctionalRequirements } from "./form-sections/FunctionalRequirements";
import { TechnicalRequirements } from "./form-sections/TechnicalRequirements";
import { SystemWorkflow } from "./form-sections/SystemWorkflow";
import { ApiPayload } from "./form-sections/ApiPayload";
import { ConstraintsValidation } from "./form-sections/ConstraintsValidation";
import { TimelineMilestones } from "./form-sections/TimelineMilestones";
import { TestingQA } from "./form-sections/TestingQA";
import { BrandingLanguage } from "./form-sections/BrandingLanguage";
import { TechnologyStack } from "./form-sections/TechnologyStack";
import { ComplianceGuidelines } from "./form-sections/ComplianceGuidelines";
import { DeploymentWorkflow } from "./form-sections/DeploymentWorkflow";
import { TeamResource } from "./form-sections/TeamResource";
import { Infrastructure } from "./form-sections/Infrastructure";
import { SupportMaintenance } from "./form-sections/SupportMaintenance";
import { ROIBusinessImpact } from "./form-sections/ROIBusinessImpact";
import { CompetitorResearch } from "./form-sections/CompetitorResearch";
import { DocumentationDeliverables } from "./form-sections/DocumentationDeliverables";
import { CommunicationManagement } from "./form-sections/CommunicationManagement";
import { RisksManagement } from "./form-sections/RisksManagement";
import { FinalApprovals } from "./form-sections/FinalApprovals";
import { LegalRequirements } from "./form-sections/LegalRequirements";
import { FinalInputs } from "./form-sections/FinalInputs";
import { useToast } from "@/hooks/use-toast";
import { GeometricBackground } from "./GeometricBackground";

export interface FormData {
  projectTitle: string;
  projectDescription: string;
  businessContext: string;
  targetUsers: string;
  businessModel: string;
  currentChallenges: string;
  problemImpact: string;
  highLevelGoals: string;
  kpis: string;
  requiredFeatures: string;
  featurePrioritization: string;
  inputFormat: string;
  dataSource: string;
  authentication: string;
  integrationNeeds: string;
  platformCompatibility: string;
  deploymentPreference: string;
  idealWorkflow: string;
  hasFlowchart: boolean;
  flowchartFile: File | null;
  needsApiIntegration: boolean;
  samplePayload: string;
  payloadFile: File | null;
  validationRules: string;
  expectedTimeline: string;
  keyMilestones: string;
  acceptanceCriteria: string;
  needsUAT: boolean;
  testCases: string;
  testingMethod: string;
  brandingGuidelines: string;
  brandingFiles: File[];
  languageTone: string;
  mockupsFiles: File[];
  preferredTech: string;
  openToAlternatives: boolean;
  complianceGuidelines: string;
  referenceContent: string;
  pilotOrLaunch: string;
  expectedVolume: string;
  internalOrPublic: string;
  stakeholders: string;
  resourceConstraints: string;
  cloudVendor: string;
  needsHostingHelp: boolean;
  supportPeriod: string;
  updateFrequency: string;
  strategicGoal: string;
  expectedROI: string;
  expectedBenefits: string;
  competitors: string;
  inspirationProducts: string;
  documentationNeeds: string[];
  deliveryFormat: string;
  communicationTools: string;
  meetingPreference: string;
  escalationContact: string;
  knownRisks: string;
  failureHandling: string;
  stageApprovers: string;
  finalAuthority: string;
  signNDA: boolean;
  wantsSLA: boolean;
  existingDocs: string;
  existingFiles: File[];
  additionalInfo: string;
}

const sections = [
  { title: "Project Overview", component: ProjectOverview },
  { title: "Problem Statement", component: ProblemStatement },
  { title: "Objectives & Goals", component: ObjectivesGoals },
  { title: "Functional Requirements", component: FunctionalRequirements },
  { title: "Technical Requirements", component: TechnicalRequirements },
  { title: "System Workflow", component: SystemWorkflow },
  { title: "Expected API Payload", component: ApiPayload },
  { title: "Constraints & Validation", component: ConstraintsValidation },
  { title: "Timeline & Milestones", component: TimelineMilestones },
  { title: "Testing & QA", component: TestingQA },
  { title: "Branding & Language", component: BrandingLanguage },
  { title: "Technology Stack", component: TechnologyStack },
  { title: "Compliance & Guidelines", component: ComplianceGuidelines },
  { title: "Deployment & Workflow", component: DeploymentWorkflow },
  { title: "Team & Resource Planning", component: TeamResource },
  { title: "Infrastructure", component: Infrastructure },
  { title: "Support & Maintenance", component: SupportMaintenance },
  { title: "ROI & Business Impact", component: ROIBusinessImpact },
  { title: "Competitor Research", component: CompetitorResearch },
  { title: "Documentation & Deliverables", component: DocumentationDeliverables },
  { title: "Communication & Management", component: CommunicationManagement },
  { title: "Risks Management", component: RisksManagement },
  { title: "Final Approvals", component: FinalApprovals },
  { title: "Legal Requirements", component: LegalRequirements },
  { title: "Final Inputs", component: FinalInputs },
];

export function BRDForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    projectTitle: "",
    projectDescription: "",
    businessContext: "",
    targetUsers: "",
    businessModel: "",
    currentChallenges: "",
    problemImpact: "",
    highLevelGoals: "",
    kpis: "",
    requiredFeatures: "",
    featurePrioritization: "",
    inputFormat: "",
    dataSource: "",
    authentication: "",
    integrationNeeds: "",
    platformCompatibility: "",
    deploymentPreference: "",
    idealWorkflow: "",
    hasFlowchart: false,
    flowchartFile: null,
    needsApiIntegration: false,
    samplePayload: "",
    payloadFile: null,
    validationRules: "",
    expectedTimeline: "",
    keyMilestones: "",
    acceptanceCriteria: "",
    needsUAT: false,
    testCases: "",
    testingMethod: "",
    brandingGuidelines: "",
    brandingFiles: [],
    languageTone: "",
    mockupsFiles: [],
    preferredTech: "",
    openToAlternatives: false,
    complianceGuidelines: "",
    referenceContent: "",
    pilotOrLaunch: "",
    expectedVolume: "",
    internalOrPublic: "",
    stakeholders: "",
    resourceConstraints: "",
    cloudVendor: "",
    needsHostingHelp: false,
    supportPeriod: "",
    updateFrequency: "",
    strategicGoal: "",
    expectedROI: "",
    expectedBenefits: "",
    competitors: "",
    inspirationProducts: "",
    documentationNeeds: [],
    deliveryFormat: "",
    communicationTools: "",
    meetingPreference: "",
    escalationContact: "",
    knownRisks: "",
    failureHandling: "",
    stageApprovers: "",
    finalAuthority: "",
    signNDA: false,
    wantsSLA: false,
    existingDocs: "",
    existingFiles: [],
    additionalInfo: "",
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const progress = ((currentStep + 1) / sections.length) * 100;

  const handleNext = () => {
    if (currentStep < sections.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const webhookUrl = "https://service-321.app.n8n.cloud/webhook-test/c787dc2a-97e9-46c9-b323-c2effb29113d";
      
      // Convert File objects to base64 for JSON transmission
      const convertFilesToBase64 = async (files: File[]): Promise<any[]> => {
        return Promise.all(files.map(async (file) => {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
              resolve({
                name: file.name,
                type: file.type,
                size: file.size,
                data: reader.result
              });
            };
            reader.readAsDataURL(file);
          });
        }));
      };

      const processedData = {
        ...formData,
        flowchartFile: formData.flowchartFile ? await convertFilesToBase64([formData.flowchartFile]) : null,
        payloadFile: formData.payloadFile ? await convertFilesToBase64([formData.payloadFile]) : null,
        brandingFiles: await convertFilesToBase64(formData.brandingFiles),
        mockupsFiles: await convertFilesToBase64(formData.mockupsFiles),
        existingFiles: await convertFilesToBase64(formData.existingFiles),
        submittedAt: new Date().toISOString(),
        source: "aXtrlabs BRD Form"
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processedData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your BRD form has been submitted successfully. We'll get back to you soon!",
        });
        
        // Reset form
        setCurrentStep(0);
        setFormData({
          projectTitle: "",
          projectDescription: "",
          businessContext: "",
          targetUsers: "",
          businessModel: "",
          currentChallenges: "",
          problemImpact: "",
          highLevelGoals: "",
          kpis: "",
          requiredFeatures: "",
          featurePrioritization: "",
          inputFormat: "",
          dataSource: "",
          authentication: "",
          integrationNeeds: "",
          platformCompatibility: "",
          deploymentPreference: "",
          idealWorkflow: "",
          hasFlowchart: false,
          flowchartFile: null,
          needsApiIntegration: false,
          samplePayload: "",
          payloadFile: null,
          validationRules: "",
          expectedTimeline: "",
          keyMilestones: "",
          acceptanceCriteria: "",
          needsUAT: false,
          testCases: "",
          testingMethod: "",
          brandingGuidelines: "",
          brandingFiles: [],
          languageTone: "",
          mockupsFiles: [],
          preferredTech: "",
          openToAlternatives: false,
          complianceGuidelines: "",
          referenceContent: "",
          pilotOrLaunch: "",
          expectedVolume: "",
          internalOrPublic: "",
          stakeholders: "",
          resourceConstraints: "",
          cloudVendor: "",
          needsHostingHelp: false,
          supportPeriod: "",
          updateFrequency: "",
          strategicGoal: "",
          expectedROI: "",
          expectedBenefits: "",
          competitors: "",
          inspirationProducts: "",
          documentationNeeds: [],
          deliveryFormat: "",
          communicationTools: "",
          meetingPreference: "",
          escalationContact: "",
          knownRisks: "",
          failureHandling: "",
          stageApprovers: "",
          finalAuthority: "",
          signNDA: false,
          wantsSLA: false,
          existingDocs: "",
          existingFiles: [],
          additionalInfo: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const CurrentSection = sections[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-primary relative overflow-hidden">
      <GeometricBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
            aXtrlabs
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Business Requirements Document Form
          </p>
          <div className="max-w-md mx-auto">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              Step {currentStep + 1} of {sections.length}
            </p>
          </div>
        </div>

        {/* Form Card */}
        <Card className="max-w-4xl mx-auto shadow-card border-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              {sections[currentStep].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <CurrentSection 
              formData={formData} 
              updateFormData={updateFormData} 
            />
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              
              <span className="text-sm text-muted-foreground">
                {currentStep + 1} / {sections.length}
              </span>
              
              {currentStep === sections.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}