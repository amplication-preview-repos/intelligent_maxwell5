import { MentalHealthAssessment as TMentalHealthAssessment } from "../api/mentalHealthAssessment/MentalHealthAssessment";

export const MENTALHEALTHASSESSMENT_TITLE_FIELD = "typeField";

export const MentalHealthAssessmentTitle = (
  record: TMentalHealthAssessment
): string => {
  return record.typeField?.toString() || String(record.id);
};
