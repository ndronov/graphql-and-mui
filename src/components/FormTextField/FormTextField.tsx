/** @jsxImportSource @emotion/react */

import { Controller, FieldValues, ControllerProps, FieldPath, FieldError } from 'react-hook-form';
import { css } from '@emotion/react';
import { TextFieldProps, TextField, useTheme } from '@mui/material';

import { DEFAULT_VALIDATION_ERROR_MESSAGE } from '$common/validation';

interface FormTextFieldProps<FormValues extends FieldValues, Name extends FieldPath<FormValues> = FieldPath<FormValues>>
  extends Pick<ControllerProps<FormValues, Name>, 'rules' | 'name' | 'control'>,
    Pick<TextFieldProps, 'label' | 'multiline' | 'rows'> {
  error?: FieldError;
}

export function FormTextField<FormValues extends FieldValues>(props: FormTextFieldProps<FormValues>) {
  const { error, control, name, rules, ...fieldProps } = props;

  const theme = useTheme();

  return (
    <Controller<FormValues>
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <div
          css={css`
            position: relative;
          `}
        >
          <TextField {...field} {...fieldProps} sx={{ width: '100%' }} />

          {error && (
            <div
              css={css`
                position: absolute;
                bottom: ${theme.spacing(-2.5)};
                color: ${theme.palette.error.light};
                font-size: ${theme.typography.caption.fontSize};
              `}
            >
              {error?.message || DEFAULT_VALIDATION_ERROR_MESSAGE}
            </div>
          )}
        </div>
      )}
    />
  );
}
