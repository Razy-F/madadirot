import React from "react";
import { ContentWrapper } from ".";
import { footerlLinks, generalLinks, neighborhoodsLinks, socialLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gradient-footer py-5 text-white">
          <ContentWrapper classList="text-sm flex justify-between">
            <div className="flex space-s-12">
                <ul className="space-y-2">
                    <li className="mb-6">
                        <h4 className="font-bold">
                            neighborhoods
                        </h4>
                    </li>
                  {neighborhoodsLinks.map((neighborhoods) => (
                    <li key={neighborhoods.id}>
                      <Link href={neighborhoods.href}>{neighborhoods.title}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                    <li className="mb-6">
                        <h4 className="font-bold">
                        general
                        </h4>
                    </li>
                  {generalLinks.map((general) => (
                    <li key={general.id}>
                      <Link href={general.href}>{general.title}</Link>
                    </li>
                  ))}
                </ul>
            </div>
            <div className="">

                <Image
                    src="/assets/icons/logo.svg"
                    alt="logo"
                    width={85}
                    height={85}
                    className="mr-auto"
                />
                <ul className="flex pt-7 space-s-6">
                    {socialLinks.map(social => (
                        <li key={social.id}>
                            <Link href={social.href}>
                                <Image 
                                    src={social.src}
                                    alt={social.alt}
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
          </ContentWrapper>
      </div>
      <ContentWrapper classList="flex justify-between py-6 text-[#767676] text-sm">        
          <ul className="flex space-s-9">
            {footerlLinks.map(footer => (
                <li key={footer.id}>
                <Link href={footer.href}>{footer.title}</Link>
            </li>
            ))}
          </ul>
          <p>{" MadaDirot " + new Date().getFullYear() } </p>        
      </ContentWrapper>
    </footer>
  );
};

export default Footer;