/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { CircularProgress, useMediaQuery } from '@mui/material';
import TextInput from '../../components/TextInput/TextInput';
import { theme } from '../../theme';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  ExplanationEval,
  createExplanationChatCompletetion,
} from '../../data/OpenAI';

export default function ExplanationToolPage() {
  const isWeb = useMediaQuery(theme.breakpoints.up('sm'));

  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [loadingImproved, setLoadingImproved] = useState(false);

  const [improvedUnlocked, setImprovedUnlocked] = useState(false);

  const [explanation, setExplanation] = useState<ExplanationEval | undefined>();

  const onSubmit = async (value: string) => {
    setLoading(true);
    setSubmitted(true);
    const response = await createExplanationChatCompletetion(value);
    setLoading(false);
    setExplanation(response);
  };

  const handleOnImproved = () => {
    setLoadingImproved(true);
    /// Set timeout for 0.5 seconds
    setTimeout(() => {
      setLoadingImproved(false);
      setImprovedUnlocked(true);
    }, 500);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: isWeb ? '700px' : '',
          textAlign: 'start',
        }}
        className={isWeb ? '' : 'mx-auto max-w-7xl px-6 lg:px-8'}
      >
        {isWeb && (
          <div className='mx-auto max-w-2xl lg:mx-0 py-8'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Forklaringsverktøy
            </h2>
          </div>
        )}

        <div className='border-b py-5 text-gray-700 text-m'>
          <p className='text-m'>
            Dette er et verktøy som hjelper deg å finne ut om en forklaring er
            god eller dårlig.
          </p>
          <br></br>
          <p>
            Den er laget på bakgrunn av blogg innlegget:{' '}
            <a
              style={{
                color: '(internal value)',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              target='_blank'
              rel='noreferrer'
              onClick={() => navigate('/gode-forklaringer')}
            >
              "Forklaringer: Hvordan skille de gode fra de dårlige."
            </a>
          </p>
          <br></br>

          <p className='text-lg font-semibold'>Sånn funker det:</p>
          <br></br>

          <p className='text-gray-700 text-m'>
            Lim inn din forklaring i tekstboksen under, og trykk på "Evaluer."
            Deretter vil forklaringen vurderes av en AI som er tilpasset til å
            evaluere forklaringer.
          </p>
        </div>
        <div className='pt-5 w-full'>
          <TextInput
            onSubmit={function (value: string): void {
              onSubmit(value);
            }}
            disabled={submitted}
            loading={loading}
            onReset={() => {
              setExplanation(undefined);
              setSubmitted(false);
              setImprovedUnlocked(false);
            }}
          ></TextInput>
          <p className='float-right relative text-sm text-gray-600 pt-2'>
            Kostnad: 1 kreditt
          </p>
        </div>
        {explanation && (
          <div className='border-b py-5 text-gray-700 text-m w-full'>
            <p className='text-lg font-semibold'>Resultat:</p>

            <br></br>

            <p className='text-gray-700'>
              Forklaringen er{' '}
              <strong className='text-gray-700'>
                {explanation.good ? 'god.' : 'dårlig.'}
              </strong>
            </p>

            <br></br>

            <p className='text-gray-700 text-m'>{explanation.reason}</p>
          </div>
        )}

        {explanation?.reasonImproved && (
          <div className='w-full'>
            <div className='border-b pt-5 text-gray-700 text-m w-full'>
              <p className='text-lg font-semibold'>Generer en god forklaring</p>
              <button
                className='w-36 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semiboldtext-white py-2 px-4 rounded-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed'
                onClick={() => handleOnImproved()}
                disabled={improvedUnlocked}
                style={{
                  backgroundColor: '#57b8ca',
                }}
              >
                {loadingImproved === true ? (
                  <CircularProgress size={20} color='inherit' />
                ) : (
                  'Generer forslag'
                )}
              </button>
              <p className='relative text-sm text-gray-600 right-0 bottom-0 pt-2'>
                Kostnad: 1 kreditt
              </p>
            </div>
            {improvedUnlocked && (
              <div className='w-full'>
                <p className='text-lg font-semibold pt-5'>God Forklaring:</p>
                <p className='text-gray-700 text-m'>
                  {explanation?.reasonImproved}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
