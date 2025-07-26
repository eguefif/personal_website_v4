import FormDialog from 'components/Commons/FormDialog';
import { useState } from 'react';

interface ProjectFormDialogProps {
  trigger: ReactNode
}

export default function ProjectFormDialog() {
  const [open, setOpen] = usestate(false);

  const handleSubmit = (formData) => {
    console.log("Form submited", formData.get("title"));
    setOpen(false);
  }

  const portfolioForm = <PortfolioForm project={project} handleSubmit={handleSubmit}/>;
  const action = project ? "Edit": "Create"

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
