import { GiBigDiamondRing } from "react-icons/gi";

export default function Navbar({ links }: Props) {
  return (
    <nav className="py-8 w-full px-8 bg-white shadow-lg sticky top-0">
      <div className="max-w-screen-lg flex gap-4 justify-between mx-auto">
        <a href="/">
          <GiBigDiamondRing className="w-10 h-10" />
        </a>
        <div className="flex gap-4 text-lg fw-bold items-center">
          {links.map((link) => (
            <a
              className=""
              key={link.label}
              href={link.url}
              target={link.target}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div />
      </div>
    </nav>

  );
}

type Props = {
  links: {
    label: string;
    url: string;
    target?: string;
  }[];
};
