import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import SuccessComponent from './components/SuccessComponent';

const App = () => {
  const [formData, setFormData] = useState(null);

  return (
    <div className="App">
      {formData ? (
        <SuccessComponent formData={formData} />
      ) : (
        <FormComponent setFormData={setFormData} />
      )}
    </div>
  );
};

export default App;
