/** @jsxImportSource @emotion/react */

import { Controller, FieldValues, ControllerProps, FieldPath, FieldError, Merge } from 'react-hook-form';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

import { DEFAULT_VALIDATION_ERROR_MESSAGE } from '$common/validation';

import { CustomSelect, CustomSelectProps } from '../CustomSelect';

interface CustomSelectFieldProps<
  FormValues extends FieldValues,
  Name extends FieldPath<FormValues> = FieldPath<FormValues>,
> extends Pick<ControllerProps<FormValues, Name>, 'rules' | 'name' | 'control'>,
    Pick<CustomSelectProps, 'label' | 'loading' | 'options' | 'multiple'> {
  error?: Merge<FieldError, (FieldError | undefined)[]>;
}

export function CustomSelectField<FormValues extends FieldValues>(props: CustomSelectFieldProps<FormValues>) {
  const { rules, error, name, control, ...fieldProps } = props;

  const theme = useTheme();

  return (
    <Controller<FormValues>
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        const { ref, ...justField } = field;

        return (
          <div
            css={css`
              position: relative;
            `}
          >
            <CustomSelect {...justField} {...fieldProps} />

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
        );
      }}
    />
  );
}
