import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchText } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    if (query.trim() === "") return; // avoid empty search
    dispatch(setSearchText(query));
    navigate("/browse");
  };

  return (
    <section className="text-center px-4 md:px-0 my-16">
      <div className="flex flex-col gap-6 items-center">
        <div className="bg-gray-100 text-[#F83002] px-4 py-2 rounded-full font-medium">
          No. 1 Job Hunt Website
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Search, Apply & <br /> Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>

        <p className="text-gray-500 text-base sm:text-lg max-w-2xl">
          Explore thousands of job opportunities from top companies, apply online with a single click, 
          and take the next step in your career. Our platform makes job searching simple, fast, and 
          personalized to your skills and interests.
        </p>

        <div className="flex w-full max-w-xl shadow-lg border border-gray-200 rounded-full overflow-hidden">
          <input
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find your dream jobs"
            className="flex-1 px-4 py-3 outline-none text-gray-700"
          />
          <Button
            onClick={searchJobHandler}
            className="bg-[#6A38C2] hover:bg-[#5f32ad] px-4 flex items-center justify-center"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
