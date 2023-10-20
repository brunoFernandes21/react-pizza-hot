import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center max-w-[800px]">
      <h2 className="text-2xl mb-[30px]">Welcome to Pizza Hot</h2>
      <Link>
        <button className="py-[15px] px-[30px] text-xl border-2">Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default Home;
