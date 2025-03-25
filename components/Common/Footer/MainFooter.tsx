import TPLXFooterDiscordLogo from '@/components/Common/Footer/footer_logo/tplx-footer-discord-logo';
import TPLXFooterGitbookLogo from '@/components/Common/Footer/footer_logo/tplx-footer-gitbook-logo';
import TPLXFooterTelegramLogo from '@/components/Common/Footer/footer_logo/tplx-footer-telegram-logo';
import TPLXFooterXLogo from '@/components/Common/Footer/footer_logo/tplx-footer-x-logo';
import { cn } from '@/utils/tw';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { headerItems } from '../NavigationBar';
import { Righteous } from 'next/font/google';

type FooterLink = {
  url: string;
  alt: string;
  image: React.ReactNode;
};

const footerLinks: Array<FooterLink> = [
  {
    url: 'https://twitter.com/TensorplexLabs',
    alt: 'Twitter',
    image: <TPLXFooterXLogo className="size-[36px]"></TPLXFooterXLogo>,
  },
  {
    url: 'https://t.me/+ug7C1J7Apf8wNzc1/',
    alt: 'Telegram',
    image: <TPLXFooterTelegramLogo className="size-[36px]"></TPLXFooterTelegramLogo>,
  },
  {
    url: 'https://discord.com/invite/zVZbRdt6U4',
    alt: 'Discord',
    image: <TPLXFooterDiscordLogo className="size-[36px]"></TPLXFooterDiscordLogo>,
  },
  {
    url: 'https://tensorplex.gitbook.io/tensorplex-docs/',
    alt: 'Gitbook',
    image: <TPLXFooterGitbookLogo className="size-[36px]"></TPLXFooterGitbookLogo>,
  },
];

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MainFooter = ({ className, ...props }: Props) => {
  return (
        <div></div>
  );
};

export default MainFooter;
