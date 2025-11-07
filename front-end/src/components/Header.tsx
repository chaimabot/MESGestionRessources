import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex sticky top-0 items-center justify-between whitespace-nowrap border-b border-solid border-white/10 dark:border-white/10 bg-background-light dark:bg-background-dark px-10 py-3 z-10">
      <div className="flex items-center gap-8">
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-gray-400 dark:text-[#9dabb9] flex border-none bg-gray-200 dark:bg-[#283039] items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-0 border-none bg-gray-200 dark:bg-[#283039] h-full placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              placeholder="Search..."
              value=""
            />
          </div>
        </label>
      </div>
      <div className="flex flex-1 justify-end items-center gap-6">
        <div className="flex gap-2">
          <button className="relative flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-200 dark:bg-[#283039] text-gray-600 dark:text-white">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1 right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-200 dark:bg-[#283039] text-gray-600 dark:text-white">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="John Doe's profile picture"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpUgC8j014m6qkd6eTl8oapN3F58UpWYz8YRxthu7gjpe5JLMnt8seMA0Vgi-iyaf4p4J9Wn8ijlWOTpTprLP5UJ7yGpPrJLTru1RJwxNkDO3Ql8AOaXNLpCWmVJ7Sb6ntInbBjxKgoZ0r16jXwrPe4L9aaC0WNlvEzWbgYU7sPl2bdwPcujPaLzteI2sLIlIU2UjtMuRMTntqNuPUqpdw38zxVl_-lkqFpQYwKuM6r3OLPvBoPhGbHIJaMiq7jQVolFYHg_5OwmU")',
            }}
          ></div>
          <div className="flex flex-col text-right">
            <h1 className="text-gray-800 dark:text-white text-base font-medium leading-normal">
              John Doe
            </h1>
            <p className="text-gray-500 dark:text-[#9dabb9] text-sm font-normal leading-normal">
              Plant Manager
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
