import React from 'react';

export function useForm(
  {
    initialValues,
    onSubmit,
    validateSchema,
  },
) {
  const [values, setValues] = React.useState(initialValues);

  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouchedField] = React.useState({});

  React.useEffect(() => {
    validateSchema(values)
      .then(() => {
        setIsFormDisabled(false);
        setErrors({});
      })
      .catch((err) => {
        const formatedErrors = err.inner.reduce((errorObjectAccumulated, currentError) => {
          const fieldName = currentError.path;
          const errorMessage = currentError.message;

          return {
            ...errorObjectAccumulated,
            [fieldName]: errorMessage,
          };
        }, {});
        setErrors(formatedErrors);
        setIsFormDisabled(true);
      });
  }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    // Validação Formulário
    isFormDisabled,
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');

      setTouchedField({
        ...touched,
        [fieldName]: true,
      });
    },
  };
}
