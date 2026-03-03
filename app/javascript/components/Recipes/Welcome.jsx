const Welcome = () => {
    return (
        <>
            <div className='text-center mb-8'>
                <div className='flex flex-col items-center justify-center gap-3 mb-2'>
                    <h1 className='text-3xl font-bold bg-clip-text text-transparent'>
                        Welcome
                    </h1>
                    <p className='text-slate-400 text-sm'>This is the base default Ruby on Rails app for RyanJo Productions. Does hot reloading work?</p>
                    <p className='text-slate-400 text-sm'>So far the answer is no. It's in video 2, timestamp: 9:15</p>
                </div>
            </div>
        </>
    )
}

export default Welcome;