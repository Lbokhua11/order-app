"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import DropdownIcon from "@/components/icons/Dropdown/DropdownIcon";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { supportedLanguages } from "@/common/languages";

interface Props {
  orderId: string;
}
const OrderLanguages = ({ orderId }: Props) => {
  const locale = useLocale();
  let langText = "Geo";
  if (locale === "en") {
    langText = "Eng";
  }
  if (locale == "ka") {
    langText = "Geo";
  }
  if (locale == "uz") {
    langText = "Uzb";
  }
  if (locale == "ru") {
    langText = "Rus";
  }
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isLangClicked, setIsLangClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setIsLangClicked(!isLangClicked)}
          className="w-[8.125rem] h-[2rem] flex relative"
        >
          <div className="ml-[1.5rem] mt-[0.375rem] relative w-5 h-5">
            <Image
              src={`/assets/images/flags/${locale}.png`}
              alt={langText}
              fill
            />
          </div>
          <span className="ml-[0.5rem] mt-[0.3125rem] text-[0.875rem]">
            {langText}
          </span>
          <div className="ml-[0.5rem] mb-[0.375rem] mt-[0.3125rem]">
            <DropdownIcon />
          </div>
        </button>
      </div>
      {isLangClicked && (
        <div className="bg-[#3E425D] w-[5.6875rem] left-[78.09375rem] top-[3.5rem] p-[0.75rem] rounded-[0.375rem] absolute flex flex-col gap-y-[0.75rem]">
          {supportedLanguages
            .filter((language) => language !== locale)
            .map((language) => {
              return (
                <>
                  <button
                    className=" w-[3.3125rem] h-[1.25rem] flex items-center"
                    onClick={() => {
                      router.push(`/${language}/order/${orderId}`);
                    }}
                  >
                    <Image
                      src={`/assets/images/flags/${language}.png`}
                      alt={language}
                      width={20}
                      height={20}
                    />
                    <span className="ml-[0.5rem] mt-[0.3125rem] text-[0.875rem]">
                      {language == "en"
                        ? "Eng"
                        : language == "ka"
                          ? "Geo"
                          : language == "uz"
                            ? "Uzb"
                            : language == "ru"
                              ? "Rus"
                              : "Non-supported"}
                    </span>
                  </button>
                </>
              );
            })}
        </div>
      )}
    </>
  );
};

export default OrderLanguages;
