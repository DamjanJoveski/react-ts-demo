export const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Welcome to Brew Mate. We are the industry leader when it comes to all things - coffee. Here you can find loads of coffee recipes, whether you prefer your cup of Joe hot or cold, we've got you covered.</p>
                    <button className="btn btn-primary">Start brewing</button>
                </div>
            </div>
        </div>
    );
};