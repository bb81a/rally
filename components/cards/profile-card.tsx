"use client";
import Icon from "@/components/icons";
import { ESocialMedia } from "@/types/enums";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RHProfileImage from "../images/rh-profile-image";
import NoisyCard from "./noisy-card";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] w-full gap-4">
      <div className="flex flex-col justify-center gap-4">
        <NoisyCard>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide justify-center md:justify-start flex gap-2">
            <span>Railly Hugo</span>
            <span>{`~`}</span>
            <span className="animated-gray-gradient">Hunter</span>
          </h1>
          <p className="flex flex-col">
            <span className="text-lg md:text-xl font-bold text-center md:text-left tracking-wide">
              <span className="animated-blue-gradient">Software Engineer</span>
              <span className="text-gray-400">{" & "}</span>
              <span className="inline-flex gap-2">
                <span className="animated-yellow-gradient">UI Developer</span>
                <img
                  className="rounded-lg no-drag"
                  src="/images/pci-logo.png"
                  alt="PCI Energy Solutions Logo"
                  width={30}
                  height={30}
                />
              </span>
            </span>
            <span className="text-muted-foreground text-center md:text-left">
              22y/o ~ Lima, Perú 🇵🇪
            </span>
          </p>
        </NoisyCard>
        <NoisyCard>
          <p className="text-base flex text-center md:text-left flex-col gap-2">
            <span className="before:content-['>'] before:font-bold before:text-2xl before:mr-2 before:text-gray-400 before:font-mono">
              Detail-oriented, design-driven, passionate about making things
              work.
            </span>
            <span className="before:content-['>'] before:font-bold before:text-2xl before:mr-2 before:text-gray-400 before:font-mono">
              With over 2 years in frontend development, I&apos;m not just
              coding; I&apos;m crafting experiences.
            </span>
          </p>
        </NoisyCard>
      </div >

      <NoisyCard className="relative flex md:flex-col items-center justify-center gap-5">
        <Image
          src="/svg/rh-logo-dark.svg"
          alt="RH Logo"
          width={36}
          height={36}
          className="no-drag hidden absolute top-2 right-3 sm:flex"
        />
        <RHProfileImage size={120} />
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-3">
            <Icon
              href="https://github.com/Railly"
              name={ESocialMedia.Github}
            />
            <Icon
              href="https://www.linkedin.com/in/railly-hugo/"
              name={ESocialMedia.LinkedIn}
            />
            <Icon
              href="https://twitter.com/raillyhugo"
              name={ESocialMedia.Twitter}
            />
          </div>
          <Button className="group">
            <Link
              href="/about"
              className="flex items-center justify-center gap-2"
            >
              <span className="hidden md:block">More about me</span>
              <span className="block md:hidden">About me</span>
              <ArrowRight className="hidden md:block group-hover:animate-bounce" />
            </Link>
          </Button>
        </div>
      </NoisyCard>
    </section >
  );
};

export default ProfileCard;
