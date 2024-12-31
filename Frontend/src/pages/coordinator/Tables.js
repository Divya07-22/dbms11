
import React, { useState } from 'react';

const Tables = () => {
  const [recruiter, setRecruiter] = useState({});
  const [skill, setSkill] = useState({});
  const [internship, setInternship] = useState({});
  const [interview, setInterview] = useState({});
  const [placement, setPlacement] = useState({});

  const commonStyles = {
    container: {
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      maxWidth: '600px',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
    },
    inputField: {
      margin: '10px 0',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      width: '100%',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    formContainer: {
      marginBottom: '20px',
    },
  };

  const handleSubmit = async (e, data, endpoint) => {
    e.preventDefault();
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Data submitted successfully!');
      } else {
        alert('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting data.');
    }
  };

  return (
    <div>
      {/* Recruiter Details */}
      <div style={commonStyles.container}>
        <h2>Recruiter Details</h2>
        <form onSubmit={(e) => handleSubmit(e, recruiter, '/api/recruiter')}>
          <div style={commonStyles.formContainer}>
            <label>Recruiter ID:</label>
            <input
              type="text"
              value={recruiter.recruit_id || ''}
              onChange={(e) => setRecruiter({ ...recruiter, recruit_id: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Company Name:</label>
            <input
              type="text"
              value={recruiter.company_name || ''}
              onChange={(e) => setRecruiter({ ...recruiter, company_name: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Contact Person:</label>
            <input
              type="text"
              value={recruiter.contact_person || ''}
              onChange={(e) => setRecruiter({ ...recruiter, contact_person: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Contact Email:</label>
            <input
              type="text"
              value={recruiter.contact_email || ''}
              onChange={(e) => setRecruiter({ ...recruiter, contact_email: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <button
            type="submit"
            style={commonStyles.button}
          >
            Submit Recruiter
          </button>
        </form>
      </div>

      {/* Skill Details */}
      <div style={commonStyles.container}>
        <h2>Skill Details</h2>
        <form onSubmit={(e) => handleSubmit(e, skill, '/api/skill')}>
          <div style={commonStyles.formContainer}>
            <label>Skill ID:</label>
            <input
              type="text"
              value={skill.skill_id || ''}
              onChange={(e) => setSkill({ ...skill, skill_id: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Skill Name:</label>
            <input
              type="text"
              value={skill.skill_name || ''}
              onChange={(e) => setSkill({ ...skill, skill_name: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <button
            type="submit"
            style={commonStyles.button}
          >
            Submit Skill
          </button>
        </form>
      </div>

      {/* Internship Details */}
      <div style={commonStyles.container}>
        <h2>Internship Details</h2>
        <form onSubmit={(e) => handleSubmit(e, internship, '/api/internship')}>
          <div style={commonStyles.formContainer}>
            <label>Internship ID:</label>
            <input
              type="text"
              value={internship.int_id || ''}
              onChange={(e) => setInternship({ ...internship, int_id: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Title:</label>
            <input
              type="text"
              value={internship.title || ''}
              onChange={(e) => setInternship({ ...internship, title: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Description:</label>
            <input
              type="text"
              value={internship.description || ''}
              onChange={(e) => setInternship({ ...internship, description: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Recruiter ID:</label>
            <input
              type="text"
              value={internship.recruit_id || ''}
              onChange={(e) => setInternship({ ...internship, recruit_id: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <button
            type="submit"
            style={commonStyles.button}
          >
            Submit Internship
          </button>
        </form>
      </div>

      {/* Interview Details */}
      <div style={commonStyles.container}>
        <h2>Interview Details</h2>
        <form onSubmit={(e) => handleSubmit(e, interview, '/api/interview')}>
          <div style={commonStyles.formContainer}>
            <label>Interview ID:</label>
            <input
              type="text"
              value={interview.interview_id || ''}
              onChange={(e) => setInterview({ ...interview, interview_id: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Student ID:</label>
            <input
              type="text"
              value={interview.std_id || ''}
              onChange={(e) => setInterview({ ...interview, std_id: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Recruiter ID:</label>
            <input
              type="text"
              value={interview.recruit_id || ''}
              onChange={(e) => setInterview({ ...interview, recruit_id: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Interview Result:</label>
            <input
              type="text"
              value={interview.interview_result || ''}
              onChange={(e) => setInterview({ ...interview, interview_result: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <button
            type="submit"
            style={commonStyles.button}
          >
            Submit Interview
          </button>
        </form>
      </div>

      {/* Placement Details */}
      <div style={commonStyles.container}>
        <h2>Placement Details</h2>
        <form onSubmit={(e) => handleSubmit(e, placement, '/api/placement')}>
          <div style={commonStyles.formContainer}>
            <label>Placement ID:</label>
            <input
              type="text"
              value={placement.plac_id || ''}
              onChange={(e) => setPlacement({ ...placement, plac_id: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Student ID:</label>
            <input
              type="text"
              value={placement.std_id || ''}
              onChange={(e) => setPlacement({ ...placement, std_id: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <div style={commonStyles.formContainer}>
            <label>Date of Placement:</label>
            <input
              type="text"
              value={placement.date_of_placement || ''}
              onChange={(e) => setPlacement({ ...placement, date_of_placement: e.target.value })}
              style={commonStyles.inputField}
            />
          </div>
          <button
            type="submit"
            style={commonStyles.button}
          >
            Submit Placement
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tables;
