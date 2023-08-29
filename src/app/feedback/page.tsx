'use client';
import { useState, FormEvent, ChangeEvent, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Head from '@/components/Head';

const initState: IFeedback = {
  name: '',
  email: '',
  message: '',
};

export default function Feedback() {
  const [data, setData] = useState<IFeedback>(initState);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    await res.json();
    toast.success('Thank your feedback!!!');
    router.push(`/thank`);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean);

  const content = (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      className='flex flex-col mx-auto max-w-3xl p-6'
    >
      <h1 className='text-2xl mb-4'>Contact Us</h1>

      <label className='text-xl mb-1' htmlFor='name'>
        Name:
      </label>
      <input
        className='p-3 border border-gray-300 mb-6 text-xl rounded-xl text-black'
        type='text'
        id='name'
        name='name'
        placeholder='Jane'
        value={data.name}
        onChange={handleChange}
        autoFocus
      />

      <label className='text-xl mb-1' htmlFor='email'>
        Email:
      </label>
      <input
        className='p-3 border border-gray-300 mb-6 text-xl rounded-xl text-black'
        type='email'
        id='email'
        name='email'
        placeholder='Jane@yoursite.com'
        value={data.email}
        onChange={handleChange}
      />

      <label className='text-xl mb-1' htmlFor='message'>
        Message:
      </label>
      <textarea
        className='p-3 mb-6 border border-gray-300 text-xl rounded-xl text-black'
        id='message'
        name='message'
        placeholder='Your message here...'
        rows={5}
        cols={33}
        value={data.message}
        onChange={handleChange}
      />

      <div className='flex items-center mb-6 gap-3'>
        <button
          className='p-3 text-xl rounded-xl text-black border-solid border-white border-2 bg-slate-400 hover:cursor-pointer hover:bg-slate-300'
          disabled={!canSave}
        >
          Submit
        </button>

        <button
          type='button'
          onClick={() => router.push('/')}
          className='p-3 text-xl rounded-xl text-black border-solid border-white border-2 min-w-[100px] bg-green-400 hover:cursor-pointer hover:bg-slate-300'
        >
          Back
        </button>
      </div>
    </form>
  );

  return (
    <Fragment>
      <Head title='Give your feedback' />
      {content}
    </Fragment>
  );
}
