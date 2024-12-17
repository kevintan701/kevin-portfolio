"use client";

import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import kevinImage from "../images/kevin.jpeg";


type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, This is Kevin Tan',
            'Guy-who-enjoys: Exporing-Creating-Sharing',
            'Good to see you here!'
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-10 items-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                src={kevinImage.src}
                alt="Kevin2"
                className="relative rounded-full w-36 h-36 mx-auto object-cover md:w-55 md:h-55 lg:w-77 lg:h-77"
            />

            <div className="z-20">
                <h2 className="text-sm uppercase text-grey-500 pb-2 tracking-[15px]">Software Engineer
                </h2>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="yellow" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">
                            About
                        </button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">
                            Experience
                        </button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">
                            Skills
                        </button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">
                            Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
