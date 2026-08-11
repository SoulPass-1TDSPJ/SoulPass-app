import { Link } from "react-router";
import Navbar from "../Navbar/Navbar";
import onibusIcon from "../../assets/hero/onibus-pass.png";

/**
 * Cabeçalho fixo do site: logo (link para a Home) + navegação principal.
 * Reaproveitado em todas as páginas via Layout.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-soulup-900 via-soulup-700 to-soulup-500 shadow-md shadow-soulup-900/20">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 xs:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 p-1.5 ring-1 ring-white/40"
          >
            <img src={onibusIcon} alt="" className="h-full w-full object-contain" />
          </span>
          SoulPass
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
