import React, { useState } from 'react';
import {
  Autocomplete,
  AutocompleteRenderGetTagProps,
  Chip,
  IconButton,
  TextField,
  createFilterOptions,
  FilterOptionsState,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export interface OptionType {
  inputValue?: string;
  name: string;
  id: string;
  extra?: boolean;
}

export interface CustomSelectProps {
  label?: string;
  loading?: boolean;
  multiple?: boolean;
  options?: OptionType[];
  value?: null | string | string[];
  onChange: (value: null | string | string[]) => void;
}

const filter = createFilterOptions<OptionType>();

const getOptionKey = (option: OptionType | string) => (typeof option === 'string' ? option : option.id);

export function CustomSelect(props: CustomSelectProps) {
  const { multiple, label, loading, options = [], value, onChange } = props;

  const [extraOptions, setExtraOptions] = useState<OptionType[]>([]);

  const allOptions = [...options, ...extraOptions];

  const filterOptions = (unfilteredOptions: OptionType[], params: FilterOptionsState<OptionType>) => {
    const filtered = filter(unfilteredOptions, params);

    const { inputValue } = params;

    const isExisting = unfilteredOptions.some((option) => inputValue === option.name);

    if (inputValue !== '' && !isExisting) {
      filtered.push({
        inputValue,
        id: inputValue,
        name: `Add extra option "${inputValue}"`,
      });
    }

    return filtered;
  };

  const getOptionLabel = (option: string | OptionType) => {
    if (typeof option === 'string') {
      return option;
    }

    if (option.inputValue) {
      return option.inputValue;
    }

    return option.name;
  };

  const handleChangeSingle = (newValue: string | OptionType | null) => {
    if (typeof newValue === 'string') {
      onChange(newValue);

      return;
    }

    if (newValue && newValue.inputValue) {
      const extraOption = {
        name: newValue.inputValue,
        id: newValue.inputValue,
        extra: true,
      };

      setExtraOptions((currentExtraOptions) => [...currentExtraOptions, extraOption]);
      onChange(newValue.inputValue);

      return;
    }

    if (newValue && newValue.name) {
      onChange(newValue.name);

      return;
    }

    if (newValue === null) {
      onChange(null);
    }
  };

  const handleChangeMultiple = (items: (OptionType | string)[]) => {
    const updatedValue: string[] = [];

    items.forEach((item) => {
      if (typeof item === 'string') {
        updatedValue.push(item);

        return;
      }

      if (item && item.inputValue) {
        const extraOption = {
          name: item.inputValue,
          id: item.inputValue,
          extra: true,
        };

        setExtraOptions((currentExtraOptions) => [...currentExtraOptions, extraOption]);
        updatedValue.push(item.inputValue);

        return;
      }

      if (item && item.name) {
        updatedValue.push(item.name);
      }
    });

    onChange(updatedValue);
  };

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: string | OptionType | null | (string | OptionType)[],
  ) => {
    if (Array.isArray(newValue)) {
      handleChangeMultiple(newValue);
      return;
    }

    handleChangeSingle(newValue);
  };

  const unselectExtraOption = (extraOption?: string) => {
    if (Array.isArray(value)) {
      const updatedValue = value.filter((option) => option !== extraOption);

      onChange(updatedValue);

      return;
    }

    if (value === extraOption) {
      onChange(null);
    }
  };

  const deleteExtraOption = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const { extraOption } = e.currentTarget.dataset;

    unselectExtraOption(extraOption);

    setExtraOptions((currentExtraOptions) => currentExtraOptions.filter((option) => option.name !== extraOption));
  };

  const renderOption = (params: React.HTMLAttributes<HTMLLIElement>, option: OptionType) => (
    <li {...params} style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} title={option.name}>
        {option.name}
      </span>

      {option.extra && (
        <IconButton
          data-extra-option={option.name}
          onClick={deleteExtraOption}
          size="small"
          title={`Delete extra option "${option.name}"`}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      )}
    </li>
  );

  const renderTags = (items: (string | OptionType)[], getTagProps: AutocompleteRenderGetTagProps) =>
    items.map((item: string | OptionType, index: number) => (
      // eslint-disable-next-line react/jsx-key
      <Chip variant="outlined" label={typeof item === 'string' ? item : item.name} {...getTagProps({ index })} />
    ));

  return (
    <Autocomplete
      clearOnBlur
      filterOptions={filterOptions}
      freeSolo
      getOptionKey={getOptionKey}
      getOptionLabel={getOptionLabel}
      handleHomeEndKeys
      loading={loading}
      multiple={multiple}
      onChange={handleChange}
      options={allOptions}
      renderInput={(params) => <TextField {...params} label={label} />}
      renderOption={renderOption}
      renderTags={renderTags}
      selectOnFocus
      value={value}
    />
  );
}
