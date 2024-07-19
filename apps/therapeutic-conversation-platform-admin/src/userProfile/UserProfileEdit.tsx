import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ConversationTitle } from "../conversation/ConversationTitle";
import { MentalHealthAssessmentTitle } from "../mentalHealthAssessment/MentalHealthAssessmentTitle";
import { ReferralTitle } from "../referral/ReferralTitle";
import { SessionTitle } from "../session/SessionTitle";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="password" source="password" />
        <TextInput label="location" source="location" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="email" source="email" type="email" />
        <NumberInput step={1} label="age" source="age" />
        <SelectInput
          source="gender"
          label="gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="conversations"
          reference="Conversation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConversationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mentalHealthAssessments"
          reference="MentalHealthAssessment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MentalHealthAssessmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="referrals"
          reference="Referral"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReferralTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
