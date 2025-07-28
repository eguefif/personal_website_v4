import { InlineWrapper, InputLabel, TextInput, AreaWrapper, AreaLabel, TextArea } from 'components/Commons/Form';
import type { Experience } from 'components/ProfessionalPage/ProfessionalContent/Experience/data';

interface ExperienceFormProps {
  experience?: Experience;
  handleSubmit: (formData: FormData) => void;
}

export default function ExperienceForm({ experience, handleSubmit }: ExperienceFormProps) {
  return (
    <div>
      <InlineWrapper>
        <InputLabel htmlFor="title">Job Title</InputLabel>
        <TextInput
          id="title"
          name="title"
          type="text"
          defaultValue={experience?.title || ''}
          placeholder="Enter job title"
          required
        />
      </InlineWrapper>

      <InlineWrapper>
        <InputLabel htmlFor="start">Start Year</InputLabel>
        <TextInput
          id="start"
          name="start"
          type="number"
          defaultValue={experience?.start || ''}
          placeholder="2024"
          required
        />
      </InlineWrapper>

      <InlineWrapper>
        <InputLabel htmlFor="end">End Year</InputLabel>
        <TextInput
          id="end"
          name="end"
          type="number"
          defaultValue={experience?.end || ''}
          placeholder="2025"
          required
        />
      </InlineWrapper>

      <InlineWrapper>
        <InputLabel htmlFor="tech">Technologies</InputLabel>
        <TextInput
          id="tech"
          name="tech"
          type="text"
          defaultValue={experience?.tech?.join(', ') || ''}
          placeholder="React, TypeScript, Node.js"
          required
        />
      </InlineWrapper>

      <AreaWrapper>
        <AreaLabel htmlFor="achievements">Achievements</AreaLabel>
        <TextArea
          id="achievements"
          name="achievements"
          defaultValue={experience?.achievements?.join('\n') || ''}
          placeholder="Achievement 1&#10;Achievement 2&#10;Achievement 3"
          required
        />
      </AreaWrapper>
    </div>
  );
}