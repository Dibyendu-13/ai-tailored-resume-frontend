import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 18px;
  padding: 1.5rem;
  max-width: 1200px;
  width: 95%;
  margin: 3rem auto;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const UploadSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const FileInput = styled.input`
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9fafb;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 900px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const InputSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  resize: none;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  background-color: #f9fafb;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background-color: #ffffff;
  }
`;

const Button = styled.button`
  align-self: center;
  margin-top: 1rem;
  padding: 1rem 2.5rem;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

const OutputBox = styled.div`
  background-color: #f3f4f6;
  padding: 2rem;
  border-radius: 14px;
  font-size: 1rem;
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 500px;
  line-height: 1.6;
`;

function UploadForm() {
  const [resumeText, setResumeText] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [tailored, setTailored] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePDFUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await axios.post('https://ai-tailored-resume.onrender.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResumeText(response.data.extractedText || '');
    } catch (err) {
      console.error('PDF Upload Failed:', err);
      alert('Failed to extract text from PDF.');
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setTailored('');

    try {
      const response = await axios.post('https://ai-tailored-resume.onrender.com/api/tailor', {
        resume: resumeText,
        jobDescription: jobDesc,
      });

      setTailored(response.data.tailoredResume);
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong while tailoring your resume.');
    }

    setLoading(false);
  };

  return (
    <FormContainer>
      <UploadSection>
        <Label>Upload Resume (PDF)</Label>
        <FileInput type="file" accept="application/pdf" onChange={handlePDFUpload} />
      </UploadSection>

      <FlexRow>
        <InputSection>
          <Label>Paste Resume</Label>
          <TextArea
            placeholder="Paste your resume here or upload a PDF above..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          />
        </InputSection>

        <InputSection>
          <Label>Job Description</Label>
          <TextArea
            placeholder="Paste job description here..."
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
          />
        </InputSection>
      </FlexRow>

      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Tailoring...' : 'Tailor My Resume'}
      </Button>

      {tailored && (
        <OutputBox>
          <strong>🎯 Tailored Resume</strong>
          <br />
          {tailored}
        </OutputBox>
      )}
    </FormContainer>
  );
}

export default UploadForm;
