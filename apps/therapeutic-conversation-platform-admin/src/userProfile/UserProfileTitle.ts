import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "firstName";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.firstName?.toString() || String(record.id);
};
