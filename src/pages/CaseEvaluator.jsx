import React, { useState } from 'react';

function CaseEvaluator() {
  const [form, setForm] = useState({
    oem: '',
    details: '',
    photos: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photos') {
      setForm({ ...form, [name]: files });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Integrate ChatGPT plugin for evaluation here
  };

  return (
    <div>
      <h1>Case Evaluator (Beta)</h1>
      <form onSubmit={handleSubmit}>
        <label>
          OEM:
          <select name="oem" value={form.oem} onChange={handleChange}>
            <option value="">Select OEM</option>
            <option value="cummins">Cummins</option>
            <option value="zf">ZF</option>
            <option value="dana">Dana</option>
          </select>
        </label>
        <label>
          Details:
          <textarea name="details" value={form.details} onChange={handleChange} />
        </label>
        <label>
          Photos:
          <input type="file" name="photos" multiple onChange={handleChange} />
        </label>
        <button type="submit">Submit for Evaluation</button>
      </form>
    </div>
  );
}

export default CaseEvaluator;
