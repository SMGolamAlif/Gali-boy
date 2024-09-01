function Home() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1473800447596-01729482b8eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded">
        <h1 className="text-6xl font-bold text-white">Saadman Galib</h1>
        <p className="text-2xl text-gray-500 mt-4 p-4">
          A modern web developer with a passion for building scalable and
          efficient applications.
        </p>
        <a href="/about" >
        <button className="mt-8 bg-cyan-900 hover:bg-cyan-950 text-white font-bold py-3 px-6 rounded">
          Learn More
        </button></a>
      </div>
    </div>
  );
}

export default Home;
