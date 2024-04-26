import React from 'react';

type HeaderProps = {
     content: string;
};

const Header = ({ content }: HeaderProps) => {
     return <h1 className="my-5 text-2xl font-bold">{content}</h1>;
};

export default Header;
