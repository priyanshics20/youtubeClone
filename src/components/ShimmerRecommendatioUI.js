import React from 'react'

const ShimmerRecommendatioUI = () => {
    return (
        <div className='h-24 grid grid-cols-12 bg-gray-50 mb-2 '>
            <div className='col-span-5 bg-gray-200 rounded-lg mr-2'></div>
            <div className='col-span-7 grid grid-rows-4 py-1 bg-gray-100 rounded-lg'>
                <div className='row-span-1 py-2 w-11/12'> <p className='bg-gray-300 h-1/2 rounded-lg'></p></div>
                <div className='row-span-1 py-2 w-10/12'> <p className='bg-gray-300 h-1/2 rounded-lg'></p></div>
                <div className='row-span-1 py-2 w-3/4'> <p className='bg-gray-300 h-1/2 rounded-lg'></p></div>
                <div className='row-span-1 py-2 w-1/2'> <p className='bg-gray-300 h-1/2 rounded-lg'></p></div>
            </div>
        </div>
    )
}

export default ShimmerRecommendatioUI