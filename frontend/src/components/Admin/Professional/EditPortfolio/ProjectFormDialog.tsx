import FormDialog from 'components/Commons/FormDialog';
import ProjectForm from './ProjectForm';
import { useState } from 'react';
import type { Project } from './EditPortfolio';

interface ProjectFormDialogProps {
  project: Project;
  trigger: ReactNode;
}

export default function ProjectFormDialog(props: ProjectFormDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (formData) => {
    console.log("Form submited", formData.get("title"));
    setOpen(false);
  }

  const portfolioForm = <ProjectForm handleSubmit={handleSubmit}/>;
  const action = props.project ? "Edit": "Create"

  return (
    <FormDialog
      open={open}
      setOpen={setOpen}
      trigger={props.trigger}
      form={portfolioForm}
      title={`${action} Project`}
      description={`${action} a project for your Portfolio`}
      handleSubmit={handleSubmit}
    />
  );
}
