import React from 'react';

import { Navigation } from '../groups/Navigation';
import { More } from '../groups/More';
import { Button } from '../components/Button';

export const Timeline = () => {
  return (
    <main className='bg-slate-50'>
      <div className='container mx-auto py-3'>
        <div className='flex flex-col space-y-3 max-w-[240px]'>
          <Navigation />
          <More />
          <Button label='New spout' primary={true} size='large' icon={true} />
        </div>
      </div>
    </main>
  );
};
