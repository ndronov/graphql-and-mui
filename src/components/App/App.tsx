import { Box, Button } from '@mui/material';
import { useForm, SubmitHandler, UseFormProps } from 'react-hook-form';

// eslint-disable-next-line import/extensions
import { FormValues } from '$declarations/form';
import { useAllPositionsQuery, useAllRelationsQuery } from '$generated/graphql';
import { CustomSelectField } from '$components/CustomSelectField';
import { FormTextField } from '$components/FormTextField';
import { VALIDATION_ERROR_MESSAGES } from '$common/validation';

const useFormProps: UseFormProps<FormValues> = {
  defaultValues: {
    comment: '',
    name: '',
    position: '',
    relation: [],
  },
};

const rules = {
  comment: { required: VALIDATION_ERROR_MESSAGES.required },
  name: { required: VALIDATION_ERROR_MESSAGES.required },
  position: { required: VALIDATION_ERROR_MESSAGES.required },
  relation: { required: VALIDATION_ERROR_MESSAGES.required },
};

export function App() {
  const { data: allPositionsQuery, loading: positionsLoading } = useAllPositionsQuery();
  const { data: allRelationsQuery, loading: relationsLoading } = useAllRelationsQuery();

  const positionOptions = allPositionsQuery?.applicantIndividualCompanyPositions?.data.slice() ?? [];
  const relationOptions = allRelationsQuery?.applicantIndividualCompanyRelations?.data.slice() ?? [];

  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm<FormValues>(useFormProps);

  const onValid: SubmitHandler<FormValues> = (values) => {
    reset();
    // eslint-disable-next-line no-console
    console.log('submitted values:', values);
  };

  return (
    <Box
      component="main"
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: ' center',
        justifyContent: 'center',
        backgroundColor: 'grey.500',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onValid)}
        onReset={() => reset()}
        sx={{
          width: 400,
          display: 'flex',
          flexFlow: 'column',
          gap: 5,
          padding: 4,
          boxShadow: 4,
          backgroundColor: 'background.default',
        }}
      >
        <CustomSelectField
          name="position"
          label="Position"
          loading={positionsLoading}
          options={positionOptions}
          control={control}
          rules={rules.position}
          error={errors.position}
        />

        <CustomSelectField
          name="relation"
          label="Relation"
          loading={relationsLoading}
          options={relationOptions}
          control={control}
          rules={rules.relation}
          error={errors.relation}
          multiple
        />

        <FormTextField control={control} label="Name" name="name" rules={rules.name} error={errors.name} />

        <FormTextField
          control={control}
          label="Comment"
          multiline
          name="comment"
          rows={5}
          rules={rules.comment}
          error={errors.comment}
        />

        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>

        <Button type="reset" variant="outlined" size="large">
          Reset
        </Button>
      </Box>
    </Box>
  );
}
