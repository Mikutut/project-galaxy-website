type FormType = "fractions-lspd" | "fractions-ems" | "fractions-lsc" | "fractions-lspo";
type ApplicationStatus = "ready" | "sending" | "sent" | "send-error";
type VerificationStatus = "idle" | "creating-token" | "passed" | "failed" | "verification-error" | "creating-token-error";

interface FormData {
  type: FormType;
  fields: { 
    [key: string]: any;
  };
  onSend(formData: FormData): any | Promise<any>;
}

export {
  ApplicationStatus,
  VerificationStatus,
  FormType,
  FormData,
};