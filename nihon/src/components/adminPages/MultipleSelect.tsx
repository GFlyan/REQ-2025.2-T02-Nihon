"use client";

import Select from 'react-select';

const options = [
  { value: 'op1', label: 'Opção 1' },
  { value: 'op2', label: 'Opção 2' },
  { value: 'op3', label: 'Opção 3' },
  { value: 'op4', label: 'Opção 4' },
  { value: 'op5', label: 'Opção 5' },
];

export default function MultiSelect() {
  return (
    <div className='w-[225px] xl:w-[250px]'>
        <Select
        options={options}
        isMulti
        instanceId="multiSelect1"
        className='w-full'
        classNamePrefix="react-select"
        styles={{
            control: (base, state) => ({
            ...base,
            display: 'flex',
            alignItems: 'center',
            height: '2.5rem',
            minHeight: '2.5rem',
            width: '100%',
            borderRadius: '1.5rem',
            borderColor: state.isFocused ? '#3b82f6' : '#d1d5db',
            boxShadow: 'none',
            paddingLeft: '0.75rem',  // padding interno maior
            paddingRight: '0.75rem',
            '&:hover': {
                borderColor: state.isFocused ? '#3b82f6' : '#d1d5db',
            },
            }),
            valueContainer: (base) => ({
            ...base,
            display: 'flex',
            flexWrap: 'nowrap',      // sem wrap para não empurrar borda
            overflowX: 'auto',       // scroll horizontal se necessário
            gap: '0.25rem',
            maxHeight: '100%',
            padding: '0',            // sem padding vertical
            scrollbarWidth: 'none',  // esconde scrollbar
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            }),
            multiValue: (base) => ({
            ...base,
            borderRadius: '0.5rem',
            maxWidth: '100%',        // não excede o container
            }),
            input: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
            width: 0,
            minWidth: 0,
            }),
        }}
        />
    </div>
  );
}
