import FormDialog from 'components/Commons/FormDialog';
import { useState, ReactNode } from 'react';
import ExperienceForm from './ExperienceForm';
import type { Experience } from 'components/ProfessionalPage/ProfessionalContent/Experience/data';

interface ExperienceFormDialogProps {
  trigger: ReactNode;
  experience?: Experience;
}

export default function ExperienceFormDialog({ trigger, experience }: ExperienceFormDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (formData: FormData) => {
    console.log("Form submitted", formData.get("title"));
    setOpen(false);
  }

  const experienceForm = <ExperienceForm experience={experience} handleSubmit={handleSubmit}/>;
  const action = experience ? "Edit": "Create"

  return (
    <FormDialog
      open={open}
      setOpen={setOpen}
      trigger={trigger}
      form={experienceForm}
      title={`${action} Experience`}
      description={`${action} an experience entry`}
      handleSubmit={handleSubmit}
    />
  );
}