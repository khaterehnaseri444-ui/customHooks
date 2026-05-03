import React from 'react';
import Stars from '../core/hooks/stars/Stars';

function StarsTest() {
    return (
        <div className='w-full h-200 bg-yellow-100 flex items-center justify-center flex-col'>
            <h1 className='text-[30px]'>Test Stars Hook</h1>
            <Stars stars={5}/>
        </div>
    );
}

export default StarsTest;