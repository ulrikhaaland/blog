import React, { useEffect, useRef, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from '@mui/material';

interface Props {
  onSubmit: (value: string) => void;
  disabled?: boolean;
  loading?: boolean;
  onReset?: () => void;
}

const TextInput: React.FC<Props> = ({
  onSubmit,
  disabled = false,
  loading = false,
  onReset = () => {},
}) => {
  const myInput = useRef<HTMLTextAreaElement | null>(null);

  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!value.trim() || disabled) {
      return;
    }

    onSubmit(value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  const handleOnReset = () => {
    setValue('');
    onReset();
    myInput.current?.focus();
  };

  return (
    <div className='flex flex-col space-y-4 w-medium w-full'>
      <div className='justify-between flex flex-row'>
        <label className='text-lg font-semibold'>Din Forklaring</label>
      </div>
      <div className='border border-gray-300 rounded-lg p-4'>
        <textarea
          ref={myInput}
          id='myInput'
          className='w-full h-40 resize-none focus:outline-none'
          value={value}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          placeholder='Broren min sier at grunnen til at han får sitte foran er fordi han er eldre enn meg.'
          disabled={disabled}
        />
        <div className='float-right'>
          <button
            className='w-24 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semiboldtext-white py-2 px-4 rounded-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed'
            onClick={handleSubmit}
            disabled={!value.trim() || disabled}
            style={{
              backgroundColor: '#57b8ca',
            }}
          >
            {loading === true ? (
              <CircularProgress size={20} color='inherit' />
            ) : (
              'Evaluer'
            )}
          </button>
          <IconButton
            disabled={!value.trim() || loading}
            className='ml-4'
            onClick={() => handleOnReset()}
          >
            <ReplayIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
