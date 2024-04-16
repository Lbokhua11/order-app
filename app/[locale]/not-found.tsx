import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-4">
      <div className="w-[12.5rem] h-[8.75rem] relative">
        <Image src="/assets/images/notfound.png" alt="404 image" fill />
      </div>
      <h1 className="font-bold text-[2.5rem] text-white-grey-800 mt-10 mb-4 ">
        404 - page not found
      </h1>
      <p className="text-base font-normal text-secondary-600 text-center max-w-[20.5rem] w-full">
        We can not find the page you are looking for. Check website address once
        again
      </p>

      <Link
        className="bg-primary-1000 text-white-grey-800 font-bold text-sm text-center py-3 px-6 rounded-[31.25rem] mt-6"
        href="https://www.citypay.io/"
      >
        Go to main page
      </Link>
    </div>
  );
};

export default NotFoundPage;
